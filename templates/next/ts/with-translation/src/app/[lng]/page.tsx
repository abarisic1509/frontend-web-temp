import { useTranslation } from "@/lib/i18n";
import LanguageSwitch from "@/ui/containers/LanguageSwitch";

const Home = async ({ params: { lng } }: { params: { lng: string } }) => {
  const { t } = await useTranslation(lng, "translation");
  return (
    <main className="flex min-h-screen flex-col gap-10 items-center justify-center p-24 bg-neutral-900 text-center">
      <h1 className="text-3xl font-bold text-neutral-100">
        {t("welcomeTo")} Next.js-Typescript-Tailwind-i18next {t("template")}
      </h1>
      <LanguageSwitch lng={lng} />
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
