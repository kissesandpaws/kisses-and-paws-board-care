// Datos del negocio compartidos por todas las paginas.

// URL base del sitio en produccion (sin barra final). Se usa para los canonical
// absolutos; Google prefiere la URL completa con dominio, no una ruta relativa.
export const SITE_URL = "https://kissesandpawsboardandcare.com";

// Interruptor del tema de Halloween (temporal). En false la web queda exactamente
// como siempre. Las paginas legales nunca llevan el tema: la campana de SMS de
// Twilio se aprobo con esas paginas tal como estan.
// RETORNO: poner en false el 2026-11-01. La web anterior al tema es el commit
// b68e2d3 (etiqueta git "pre-halloween").
export const HALLOWEEN = true;
const HALLOWEEN_EXCLUDED = ["/privacy", "/sms-terms", "/sms-opt-in"];
export function halloweenOn(pathname: string) {
  return HALLOWEEN && !HALLOWEEN_EXCLUDED.includes(pathname.replace(/\/$/, ""));
}

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
