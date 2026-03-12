'use client';

import { useCallback } from 'react';

export const useCookie = () => {
  // Cookie qiymatini olish funksiyasi
  const getCookie = useCallback((name: string) => {
    const value = `; ${document?.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
  }, []);

  // Cookie qo'shish yoki o'zgartirish funksiyasi
  const setCookie = useCallback((name: string, value: string, days: number = 7) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    // path=/ barcha sahifalarda ishlashi uchun
    document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`;
  }, []);

  // Cookie o'chirish funksiyasi
  const deleteCookie = useCallback((name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }, []);

  return { getCookie, setCookie, deleteCookie };
};
