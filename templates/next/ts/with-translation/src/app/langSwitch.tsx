"use client";
import Link from "next/link";
import { languages } from "../lib/i18n/settings";
import { usePathname } from "next/navigation";

const LanguageSwitch = ({ lng }: { lng: string }) => {
  const pathname = usePathname();

  const handleLanguageChange = (languageTag: string) => {
    const updatedPathname = `/${languageTag}${pathname.replace(
      /^\/[^/]+(?=\/|$)/,
      ""
    )}`;
    return updatedPathname;
  };

  return (
    <ul className="flex items-center gap-5">
      {languages.map((l) => (
        <li key={l}>
          <Link
            href={handleLanguageChange(l)}
            className={`${lng === l ? "!text-red-500" : ""}`}
          >
            {l}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSwitch;
