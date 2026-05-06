import en from "./en.json";
import ru from "./ru.json";
import uz from "./uz.json";

export const seo = {
  en,
  ru,
  uz,
} as const;

export type SeoKey = keyof typeof en;

export { en, ru, uz };
