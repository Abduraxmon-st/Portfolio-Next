'use client';

import { useCallback } from 'react';

export const useCookie = () => {
  // Cookie qiymatini olish
  const getCookie = useCallback((name: string) => {
    if (typeof document === "undefined") return null; // serverda return
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
  }, []);

  // Cookie qo'shish yoki o'zgartirish
  const setCookie = useCallback((name: string, value: string, days: number = 7) => {
    if (typeof document === "undefined") return; // serverda ishlamasin
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`;
  }, []);

  // Cookie o'chirish
  const deleteCookie = useCallback((name: string) => {
    if (typeof document === "undefined") return; // serverda ishlamasin
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }, []);

  return { getCookie, setCookie, deleteCookie };
};