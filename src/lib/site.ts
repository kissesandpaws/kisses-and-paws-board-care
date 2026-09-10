// Datos del negocio compartidos por todas las paginas.

export const PHONE = "+17866700164";
export const PHONE_DISPLAY = "+1 786-670-0164";

// Reserva online. /reservar se redirige a la app de reservas desde
// public/_redirects, asi el enlace sigue funcionando cuando el dominio deje de
// apuntar a Wix. Todos los botones de "Book Now" usan esta constante.
export const BOOKING = "/reservar";

export const WHATSAPP_BASE = "https://wa.me/17866700164?text=";

// Cuentas del negocio. Las direcciones van limpias a proposito: los enlaces
// originales traian parametros de sesion y de seguimiento que no deben quedar
// publicados en la web.
export const SOCIAL = {
  instagram: "https://www.instagram.com/kissesandpawspetcare",
  tiktok: "https://www.tiktok.com/@kissesandpawspetcare",
  facebook: "https://www.facebook.com/share/1E7ihWuj8M/",
};
