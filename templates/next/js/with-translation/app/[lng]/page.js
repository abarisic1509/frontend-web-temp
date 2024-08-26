import LanguageSwitch from "@/langSwitch";
import { useTranslation } from "@/lib/i18n";

const Home = async ({ params: { lng } }) => {
  const { t } = await useTranslation(lng);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-3xl font-bold">
        Welcome to Next.js-Tailwind-i18next template
      </h1>

      <section className="flex flex-col gap-6 w-full">
        <div className="flex flex-col w-full">
          <p className="text-xs text-neutral-400">Translation test</p>
          <h2>{t("areYouSure")}</h2>
          <div className="flex items-center gap-5">
            <p>{t("yes")}</p>
            <p>{t("no")}</p>
          </div>

          <LanguageSwitch lng={lng} />
        </div>
      </section>
    </main>
  );
};
export default Home;
