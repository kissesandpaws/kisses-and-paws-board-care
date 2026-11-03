// Datos del negocio compartidos por todas las paginas.

// URL base del sitio en produccion (sin barra final). Se usa para los canonical
// absolutos; Google prefiere la URL completa con dominio, no una ruta relativa.
export const SITE_URL = "https://kissesandpawsboardandcare.com";

// Calendario de temas de temporada (decoracion temporal). La web se pone sola el
// tema que toque segun la fecha en Miami; fuera de estas fechas queda exactamente
// como siempre. Las paginas legales nunca llevan tema: la campana de SMS de
// Twilio se aprobo con esas paginas tal como estan.
// Fechas "MM-DD", ambas incluidas. Un rango puede cruzar el ano (Navidad termina
// el 6 de enero, dia de Reyes). Pascua cambia cada ano y se calcula. La web
// anterior al primer tema es el commit b68e2d3 (etiqueta git "pre-halloween").
export type SeasonalTheme =
  "valentines" | "easter" | "july4" | "dogday" | "halloween" | "thanksgiving" | "christmas";
const SEASONAL_THEMES: { theme: SeasonalTheme; dates: (year: number) => [string, string] }[] = [
  { theme: "valentines", dates: () => ["02-01", "02-15"] },
  { theme: "easter", dates: easterWeek },
  { theme: "july4", dates: () => ["06-28", "07-05"] },
  { theme: "dogday", dates: () => ["08-20", "08-27"] },
  { theme: "halloween", dates: () => ["10-01", "10-31"] },
  { theme: "thanksgiving", dates: () => ["11-16", "11-30"] },
  { theme: "christmas", dates: () => ["12-01", "01-06"] },
];
const THEME_EXCLUDED = ["/privacy", "/sms-terms", "/sms-opt-in"];

export function isSeasonalTheme(value: unknown): value is SeasonalTheme {
  return SEASONAL_THEMES.some(({ theme }) => theme === value);
}

// Semana de Pascua: del lunes anterior al domingo de Pascua. El domingo se
// calcula con el algoritmo gregoriano anonimo (Meeus/Jones/Butcher).
function easterWeek(year: number): [string, string] {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const h = (19 * a + b - Math.floor(b / 4) - Math.floor((8 * b + 13) / 25) + 15) % 30;
  const l = (32 + 2 * (b % 4) + 2 * Math.floor(c / 4) - h - (c % 4)) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  const sunday = Date.UTC(year, month - 1, day);
  const monthDay = (t: number) => new Date(t).toISOString().slice(5, 10);
  return [monthDay(sunday - 6 * 86400000), monthDay(sunday)];
}

// Ano y "MM-DD" de hoy en Miami: el servidor de Netlify trabaja en UTC.
function miamiToday(now: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const part = (type: string) => parts.find((p) => p.type === type)?.value;
  return { year: Number(part("year")), monthDay: `${part("month")}-${part("day")}` };
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
  const { year, monthDay: today } = miamiToday(now);
  const match = SEASONAL_THEMES.find(({ dates }) => {
    const [from, to] = dates(year);
    return from <= to ? today >= from && today <= to : today >= from || today <= to;
  });
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
