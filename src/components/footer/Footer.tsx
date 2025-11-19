import { Mail, MapPin, PhoneOutgoing, Send } from "lucide-react"
import { ContactForm } from "../form"

export const Footer = () => {
  return (
    <div className="mt-45">
      <h2 className="text-[54px] font-light tracking-wider leading-[120%] text-center">Get In <span className="text-thirtyColor">Touch</span></h2>
      <div className="flex items-center gap-20 mt-10">
        <ContactForm />
        <div className="border-r border-borderColor/60 w-1 h-70" />
        <div className="w-[46%]">
          <h3 className="text-xl sm:text-2xl font-light text-white/90 mb-4 sm:mb-6">Contact Information</h3>
          <div className="space-y-4 sm:space-y-6">
            <a style={{ cursor: "none" }} href="mailto:tojixojayevabduraxmon@gmail.com" className="flex items-start gap-3 sm:gap-4 w-full group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all duration-300 shrink-0">
                <Mail size={22} className="text-descColor group-hover:text-cyan-400 transition-all duration-300" />
              </div>
              <div className="min-w-0"><p className="text-white/40 text-xs sm:text-sm mb-1">Email</p><p className="text-sm sm:text-base group-hover:text-cyan-400 transition-colors break-all text-descColor">tojixojayevabduraxmon@gmail.com</p>
              </div>
            </a>
            <a style={{ cursor: "none" }} href="https://t.me/Tojixojayev_099" className="flex items-start gap-3 sm:gap-4 w-full group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all duration-300 shrink-0">
                <Send size={20} className="text-descColor group-hover:text-cyan-400 transition-all duration-300" />
              </div>
              <div className="min-w-0">
                <p className="text-white/40 text-xs sm:text-sm mb-1">Telegram</p>
                <p className="text-sm sm:text-base group-hover:text-cyan-400 transition-colors break-all text-descColor">@Tojixojayev_099</p>
              </div>
            </a>
            <a style={{ cursor: "none" }} href="tel:+998000000000" className="flex items-start gap-3 sm:gap-4 w-full group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all duration-300 shrink-0">
                <PhoneOutgoing size={20} className="text-descColor group-hover:text-cyan-400 transition-all duration-300" />
              </div>
              <div className="min-w-0"><p className="text-white/40 text-xs sm:text-sm mb-1">Phone</p><p className="text-sm sm:text-base group-hover:text-cyan-400 transition-colors break-all text-descColor">+998 00 000 00 00</p>
              </div>
            </a>
            <div style={{ cursor: "none" }} className="flex items-start gap-3 sm:gap-4 w-full group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all duration-300 shrink-0">
                <MapPin size={20} className="text-descColor group-hover:text-cyan-400 transition-all duration-300" />
              </div>
              <div className="min-w-0"><p className="text-white/40 text-xs sm:text-sm mb-1">Location</p><p className="text-sm sm:text-base group-hover:text-cyan-400 transition-colors break-all text-descColor">Tashkent, Uzbekistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-borderColor pt-9 pb-3 mt-20">
        <p className="text-center text-descColor/50">© 2025 Abduraxmon Tojixo'jayev. All rights reserved.</p>
      </div>
    </div>
  )
}
