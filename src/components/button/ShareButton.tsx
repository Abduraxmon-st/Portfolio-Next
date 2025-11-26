import { useEffect, useRef } from "react";

export default function ShareButton({
  title,
  text,
  url, // qrcode image URL
}: {
  title: string;
  text: string;
  url: string;
}) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // URL -> File convert
  async function urlToFile(imageUrl: string) {
    const res = await fetch(imageUrl);
    const blob = await res.blob();
    return new File([blob], "qrcode.png", { type: blob.type });
  }
  
  useEffect(() => {
    const btn = buttonRef.current;

    if (!navigator.share || !btn) return;

    const handler = async () => {
      try {
        const file = await urlToFile(url);

        await navigator.share({
          title,
          text,
          files: [file], // rasmni file sifatida jo‘natish
        });
      } catch (err) {
        console.error("Sharing failed:", err);
      }
    };

    btn.addEventListener("click", handler);
    return () => btn.removeEventListener("click", handler);
  }, [title, text, url]);

  return (
    <button ref={buttonRef} className="blog-share">
      Share
    </button>
  );
}
