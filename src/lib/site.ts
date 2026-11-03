// Datos del negocio compartidos por todas las paginas.

// URL base del sitio en produccion (sin barra final). Se usa para los canonical
// absolutos; Google prefiere la URL completa con dominio, no una ruta relativa.
export const SITE_URL = "https://kissesandpawsboardandcare.com";

// Calendario de temas de temporada (decoracion temporal). La web se pone sola el
// tema que toque segun la fecha en Miami; fuera de estas fechas queda exactamente
// como siempre. Las paginas legales nunca llevan tema: la campana de SMS de
// Twilio se aprobo con esas paginas tal como estan.
// Fechas "MM-DD", ambas incluidas. Un rango puede cruzar el ano (Navidad termina
// el 6 de enero, dia de Reyes). La web anterior al primer tema es el commit
// b68e2d3 (etiqueta git "pre-halloween").
export type SeasonalTheme = "halloween" | "thanksgiving" | "christmas";
const SEASONAL_THEMES: { theme: SeasonalTheme; from: string; to: string }[] = [
  { theme: "halloween", from: "10-01", to: "10-31" },
  { theme: "thanksgiving", from: "11-16", to: "11-30" },
  { theme: "christmas", from: "12-01", to: "01-06" },
];
const THEME_EXCLUDED = ["/privacy", "/sms-terms", "/sms-opt-in"];

export function isSeasonalTheme(value: unknown): value is SeasonalTheme {
  return SEASONAL_THEMES.some(({ theme }) => theme === value);
}

// Mes y dia de hoy en Miami ("MM-DD"): el servidor de Netlify trabaja en UTC.
function miamiMonthDay(now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const part = (type: string) => parts.find((p) => p.type === type)?.value;
  return `${part("month")}-${part("day")}`;
}

// `forced` sirve para revisar un tema antes de su fecha; las paginas legales
// tampoco lo llevan en ese caso.
export function seasonalTheme(
  pathname: string,
  now = new Date(),
  forced?: SeasonalTheme,
): SeasonalTheme | null {
  if (THEME_EXCLUDED.includes(pathname.replace(/\/$/, ""))) return null;
  if (forced) return forced;
  const today = miamiMonthDay(now);
  const match = SEASONAL_THEMES.find(({ from, to }) =>
    from <= to ? today >= from && today <= to : today >= from || today <= to,
  );
  return match?.theme ?? null;
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
