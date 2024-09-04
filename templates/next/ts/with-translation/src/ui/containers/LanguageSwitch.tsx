"use client";
import { languages } from "@/lib/i18n/settings";
import Link from "next/link";
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
            className={`w-20 h-10 rounded-sm grid place-items-center hover:bg-neutral-800 ${
              lng === l ? "text-red-500" : "text-neutral-200"
            }`}
          >
            {l}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSwitch;
