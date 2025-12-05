export function isMobileByWidth(): boolean {
  if (typeof window === "undefined") return false; // SSR uchun
  return window.innerWidth < 1024;
}