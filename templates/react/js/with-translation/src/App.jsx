import { useTranslation } from "react-i18next";
import { langs } from "./i18n";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <main className="flex min-h-screen flex-col gap-20 items-center justify-center p-24">
      <h1 className="text-3xl font-bold">
        Welcome to React-Tailwind-i18next template
      </h1>
      <section className="flex flex-col gap-6 w-full">
        <div className="flex flex-col w-full">
          <p className="text-xs text-neutral-400">Translation test</p>
          <h2>{t("areYouSure")}</h2>
          <div className="flex items-center gap-5">
            <p>{t("yes")}</p>
            <p>{t("no")}</p>
          </div>

          <select
            className="w-20"
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
          >
            {langs.map((lng) => (
              <option key={lng} value={lng}>
                {lng}
              </option>
            ))}
          </select>
        </div>
      </section>
    </main>
  );
}

export default App;
