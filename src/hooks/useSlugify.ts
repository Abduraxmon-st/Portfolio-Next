export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")     // bo‘sh joylarni "-" ga
    .replace(/[^a-z0-9\-]/g, ""); // maxsus belgilarni olib tashlash
}
