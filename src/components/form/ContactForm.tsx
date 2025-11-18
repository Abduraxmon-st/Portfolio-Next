export const ContactForm = () => {
  return (
    <div className="mt-30">
      <h2 className="text-[54px] font-light tracking-wider leading-[120%] text-center">Get In <span className="text-thirtyColor">Touch</span></h2>
      <div className="grid grid-cols-2">
        <div className="w-full flex flex-col">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Email or Phone" />
          <textarea placeholder="Your Message" />
        </div>
        <div></div>
      </div>
    </div>
  )
}
