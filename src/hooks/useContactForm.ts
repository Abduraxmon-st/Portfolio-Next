import { useEffect, useState } from "react";

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  interface dataProps {
    name: string,
    contact: string,
    message: string
  }
  useEffect(() => {
    setTimeout(() => {
      setSuccess(null)
    }, 4000)
  }, [success])

  useEffect(() => {
    setTimeout(() => {
      setError(null)
    }, 4000)
  }, [error])

  const send = async (data: dataProps) => {
    setLoading(true);
    setSuccess(null);
    setError(null);
    const url = process.env.GOOGLE_SHEETS_API_URL
    if (!url) return
    const contact1 = data.contact.startsWith("+")
      ? "'" + data.contact
      : data.contact;

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({
          name: data.name,
          contact: contact1,
          message: data.message
        }),
        mode: "no-cors",
      });
      setSuccess("Message sent successfully");
    } catch (error) {
      setError("Failed to send. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return { loading, success, error, send };

}
