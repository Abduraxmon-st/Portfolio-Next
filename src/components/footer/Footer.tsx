import { Mail, MapPin, PhoneOutgoing, Send } from "lucide-react"
import { ContactForm } from "../form"

export const Footer = () => {
  return (
    <footer className="mt-26 xl:mt-41">
      <h2 className="main-title text-center">Get In <span className="text-thirtyColor">Touch</span></h2>
      <div className="flex items-center gap-10 xl:gap-20 mt-10">
        <ContactForm />
        <div className="border-r border-borderColor/60 w-1 h-70" />
        <div className="w-[46%]">
          <h3 className="text-xl sm:text-2xl font-light text-white/90 mb-4 sm:mb-6">Contact Information</h3>
          <div className="space-y-4 xl:space-y-6">
            <a style={{ cursor: "none" }} target="_blank" href="mailto:tojixojayevabduraxmon@gmail.com" className="flex items-start gap-3 sm:gap-4 w-full group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all duration-300 shrink-0">
                <Mail size={22} className="text-descColor group-hover:text-cyan-400 transition-all duration-300" />
              </div>
              <div className="min-w-0"><p className="text-white/40 text-xs sm:text-sm mb-1">Email</p><p className="text-sm xl:text-base group-hover:text-cyan-400 transition-colors break-all text-descColor">tojixojayevabduraxmon@gmail.com</p>
              </div>
            </a>
            <a style={{ cursor: "none" }} target="_blank" href="https://t.me/Tojixojayev_099" className="flex items-start gap-3 sm:gap-4 w-full group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all duration-300 shrink-0">
                <Send size={20} className="text-descColor group-hover:text-cyan-400 transition-all duration-300" />
              </div>
              <div className="min-w-0">
                <p className="text-white/40 text-xs sm:text-sm mb-1">Telegram</p>
                <p className="text-sm xl:text-base group-hover:text-cyan-400 transition-colors break-all text-descColor">@Tojixojayev_099</p>
              </div>
            </a>
            <a style={{ cursor: "none" }} target="_blank" href="tel:+998000000000" className="flex items-start gap-3 sm:gap-4 w-full group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all duration-300 shrink-0">
                <PhoneOutgoing size={20} className="text-descColor group-hover:text-cyan-400 transition-all duration-300" />
              </div>
              <div className="min-w-0"><p className="text-white/40 text-xs sm:text-sm mb-1">Phone</p><p className="text-sm xl:text-base group-hover:text-cyan-400 transition-colors break-all text-descColor">+998 00 000 00 00</p>
              </div>
            </a>
            <div style={{ cursor: "none" }} className="flex items-start gap-3 sm:gap-4 w-full group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all duration-300 shrink-0">
                <MapPin size={20} className="text-descColor group-hover:text-cyan-400 transition-all duration-300" />
              </div>
              <div className="min-w-0"><p className="text-white/40 text-xs sm:text-sm mb-1">Location</p><p className="text-sm xl:text-base group-hover:text-cyan-400 transition-colors break-all text-descColor">Tashkent, Uzbekistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
