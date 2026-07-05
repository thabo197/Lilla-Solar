export const siteConfig = {
  name: "LILLA SOLAR",
  fullName: "LILLA SOLAR Appliances Inv. Ltd.",
  tagline: "Where Power Starts With You!",
  phoneDisplay: "+260 97 123 4567",
  phoneHref: "tel:+260971234567",
  whatsappNumber: "260971234567", // international format, no leading +
  email: "info@lillasolar.co.zm",
  address: "Great East Road, Lusaka, Zambia",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#why-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
};

export function buildWhatsAppLink(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
