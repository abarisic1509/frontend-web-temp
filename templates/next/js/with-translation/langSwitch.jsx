"use client";
import Link from "next/link";
import { languages } from "./lib/i18n/settings";
import { usePathname } from "next/navigation";

const LanguageSwitch = ({ lng }) => {
  const pathname = usePathname();

  const handleLanguageChange = (languageTag) => {
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
          <Link href={handleLanguageChange(l)}>{l}</Link>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSwitch;
