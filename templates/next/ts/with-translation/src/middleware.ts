import { NextRequest, NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages } from "./lib/i18n/settings";

acceptLanguage.languages(languages);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

const cookieName = "i18next";
// Regex to check whether something has an extension, e.g. .jpg
// const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest): NextResponse {
  let lng: string | undefined;

  //Check if url already starts with some of supported languages
  if (languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`))) {
    const languageFromPath = req.nextUrl.pathname.split("/")[1];
    lng = languageFromPath;
  }

  // Check cookie
  if (!lng && req.cookies.has(cookieName)) {
    const cookieValue = req?.cookies?.get(cookieName)?.value;
    if (cookieValue && languages.includes(cookieValue)) {
      lng = cookieValue; // Use language from cookie if valid
    }
  }

  if (!lng) {
    // Check user preference from Accept-Language header only if Cookie doesn't provide a valid language
    lng = acceptLanguage.get(req.headers.get("Accept-Language")) || undefined;
  }
  if (!lng) lng = fallbackLng;

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next") &&
    !req.nextUrl.pathname.startsWith("/assets/")
  ) {
    console.log("Redirecting!");
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  // Set language cookie and finally return the response
  const response = NextResponse.next();
  response.cookies.set(cookieName, lng);
  return response;
}
