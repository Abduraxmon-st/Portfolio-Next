const GoogleSheeturl = process.env.GOOGLE_SHEETS_FRAME_URL
const ContactForm = () => {
  const url = GoogleSheeturl ? GoogleSheeturl : "https://youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
  return (
    <div className="size-full flex flex-col">
      <iframe
        allowFullScreen
        loading="eager"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          border: 0
        }}
        className="hidden md:block"
        src={url} />
      <a
        href={url}
        target="_blank"
        className="md:hidden w-max px-3 py-2 bg-blue-600 text-white rounded"
      >
        Open in Google Sheets
      </a>
    </div>
  )
}
export default ContactForm
