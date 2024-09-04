import { useTranslation } from "react-i18next";
import { langs } from "../i18n";

const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <main className="flex min-h-screen flex-col gap-10 items-center justify-center p-24 bg-neutral-900 text-center">
      <h1 className="text-3xl font-bold text-neutral-100">
        {t("welcomeTo")} React-Typescript-Tailwind-i18next {t("template")}
      </h1>
      <select
        className="w-20 bg-neutral-700 py-1 px-4 rounded text-neutral-50"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        {langs.map((lng) => (
          <option key={lng} value={lng}>
            {lng}
          </option>
        ))}
      </select>
      <a
        href="https://github.com/abarisic1509/frontend-web-temp"
        target="_blank"
        className="flex items-center py-3 px-20 rounded bg-neutral-100 text-neutral-900 hover:bg-neutral-300"
      >
        GitHub
      </a>
    </main>
  );
};

export default Home;
