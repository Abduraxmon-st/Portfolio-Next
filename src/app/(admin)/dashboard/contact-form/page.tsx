const GoogleSheeturl = process.env.GOOGLE_SHEETS_FRAME_URL
const ContactForm = () => {
  return (
    <div className="size-full">
      <iframe
        allowFullScreen
        loading="eager"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "8px",
          border: 0
        }}
        src={GoogleSheeturl ? GoogleSheeturl : "https://youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"} />
    </div>
  )
}
export default ContactForm
