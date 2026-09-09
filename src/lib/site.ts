// Datos del negocio compartidos por todas las paginas.

export const PHONE = "+17866700164";
export const PHONE_DISPLAY = "+1 786-670-0164";

// Reserva online. /reservar se redirige a la app de reservas desde
// public/_redirects, asi el enlace sigue funcionando cuando el dominio deje de
// apuntar a Wix. Todos los botones de "Book Now" usan esta constante.
export const BOOKING = "/reservar";

export const WHATSAPP_BASE = "https://wa.me/17866700164?text=";

// PENDIENTE: sustituir por las direcciones reales de las cuentas.
// Mientras esten apuntando a la pagina principal de cada red, los iconos se ven
// y no dan error, pero no llevan al perfil del negocio.
export const SOCIAL = {
  instagram: "https://www.instagram.com/",
  tiktok: "https://www.tiktok.com/",
  facebook: "https://www.facebook.com/",
};
