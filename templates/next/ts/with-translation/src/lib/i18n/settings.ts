export const fallbackLng = "en";
export const languages = [fallbackLng, "de", "es"];
export const defaultNS = "translation";

export function getOptions(
  lng: string = fallbackLng,
  ns: string | string[] | undefined = defaultNS
) {
  return {
    // debug: true,
    supportedLngs: languages,
    lng,
    fallbackLng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
