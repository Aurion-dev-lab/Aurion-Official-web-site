import { useState } from "react";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaComments, FaTimes } from "react-icons/fa";

const contacts = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1DCALGsvki/?mibextid=wwXIfr",
    icon: FaFacebookF,
  },
  {
    name: "WhatsApp",
    href: "https://whatsapp.com/channel/0029VbCGMuoKbYMFYUge7N10",
    icon: FaWhatsapp,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/aurionit/",
    icon: FaLinkedinIn,
  },
];

function FloatingContactIcons() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="fixed right-4 z-[70] sm:bottom-6 sm:right-6"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <div
        className={`absolute bottom-12 right-0 flex flex-col gap-2 transition-all duration-300 sm:bottom-14 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        {contacts.map(({ name, href, icon: Icon }, index) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className={`flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-gradient-to-r from-accent to-accent-bright text-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/70 focus-visible:ring-offset-2 focus-visible:ring-offset-base dark:border-white/15 dark:bg-[#1a1a1f] dark:hover:bg-[#24242b] dark:hover:brightness-100 dark:text-white dark:shadow-[0_10px_24px_rgba(0,0,0,0.6)] sm:h-11 sm:w-11 ${
              isOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-90 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? `${index * 70}ms` : "0ms" }}
          >
            <Icon className="text-base sm:text-lg" />
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close contact links" : "Open contact links"}
        aria-expanded={isOpen}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 bg-gradient-to-r from-accent to-accent-bright text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright/70 focus-visible:ring-offset-2 focus-visible:ring-offset-base dark:border-white/15 dark:bg-[#1a1a1f] dark:hover:bg-[#24242b] dark:hover:brightness-100 dark:text-white dark:shadow-[0_10px_24px_rgba(0,0,0,0.6)]"
      >
        <span
          className={`transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}
        >
          {isOpen ? <FaTimes className="text-base" /> : <FaComments className="text-base" />}
        </span>
      </button>
    </div>
  );
}

export default FloatingContactIcons;
