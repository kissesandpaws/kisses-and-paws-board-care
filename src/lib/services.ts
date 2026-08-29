import fg1 from "@/assets/full-groom/fg-1.jpeg.asset.json";
import fg2 from "@/assets/full-groom/fg-2.jpeg.asset.json";
import fg3 from "@/assets/full-groom/fg-3.jpeg.asset.json";
import fg4 from "@/assets/full-groom/fg-4.jpeg.asset.json";
import fg5 from "@/assets/full-groom/fg-5.jpeg.asset.json";
import fg6 from "@/assets/full-groom/fg-6.jpeg.asset.json";

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  ideal: string;
  description: string[];
  includes: string[];
  gallery: { label: string; tone: string; src?: string }[];
}

export const services: ServiceDetail[] = [
  {
    slug: "full-groom",
    title: "Full Groom",
    tagline: "El servicio completo, de la nariz a la cola.",
    duration: "2 – 3 horas",
    ideal: "Perros de razas pequeñas que necesitan corte de pelo completo.",
    description: [
      "Nuestro Full Groom es la experiencia insignia de Kisses and Paws. Es mucho más que un corte: es una sesión pensada para que tu perrito salga renovado, cómodo y radiante, trabajando cada detalle con la calma que los caracteriza.",
      "Comenzamos con un baño tibio con productos suaves y de calidad profesional, seguido de un secado cuidadoso y un cepillado a fondo para desenredar el pelaje. Después realizamos el corte según el estilo de la raza o el look que tú prefieras, siempre respetando la comodidad de tu mascota.",
      "Trabajamos sin jaulas de espera estresantes y con manejo gentil en todo momento. Si tu perro se pone nervioso, tomamos pausas: aquí nadie tiene prisa.",
    ],
    includes: [
      "Baño con shampoo y acondicionador profesional",
      "Secado y cepillado completo",
      "Corte de pelo según raza o estilo personalizado",
      "Corte y limado de uñas",
      "Limpieza de oídos",
      "Vaciado de glándulas (si aplica)",
      "Perfume y lazo o bandana de cortesía",
    ],
    gallery: [
      { label: "Antes y después", tone: "blush", src: fg1.url },
      { label: "Corte de raza", tone: "muted", src: fg2.url },
      { label: "Acabado detallado", tone: "secondary", src: fg3.url },
      { label: "Feliz y limpio", tone: "blush", src: fg4.url },
      { label: "Estilo poodle", tone: "muted", src: fg5.url },
      { label: "Listo para casa", tone: "secondary", src: fg6.url },
    ],
  },
  {
    slug: "puppy-groom",
    title: "Puppy Groom",
    tagline: "Su primera experiencia de grooming, con paciencia y amor.",
    duration: "1 – 1.5 horas",
    ideal: "Cachorros de 8 semanas a 6 meses.",
    description: [
      "Las primeras experiencias marcan a un cachorro de por vida. Por eso el Puppy Groom está diseñado para que la primera visita al salón sea positiva, tranquila y llena de cariño, sin prisas ni sustos.",
      "Trabajamos en sesiones cortas y suaves: acostumbramos al cachorro al agua, al secador y a la mesa de grooming poco a poco, con muchas pausas, premios y mimos. El objetivo es que asocie el cuidado con algo bueno.",
      "Además de dejarlo limpio y adorable, te damos consejos para el cepillado en casa y para preparar a tu cachorro para sus próximas citas de grooming.",
    ],
    includes: [
      "Baño suave con productos especiales para cachorros",
      "Introducción gradual al secador y las herramientas",
      "Retoque ligero de cara, patas e higiene",
      "Corte de uñas",
      "Limpieza de oídos",
      "Muchas pausas, juego y refuerzo positivo",
      "Guía de cuidado en casa para los dueños",
    ],
    gallery: [
      { label: "Primera visita", tone: "muted" },
      { label: "Baño tranquilo", tone: "blush" },
      { label: "Mimos y premios", tone: "secondary" },
      { label: "Listo para casa", tone: "muted" },
    ],
  },
  {
    slug: "bath-tidy",
    title: "Bath & Tidy",
    tagline: "Un retoque refrescante entre cortes completos.",
    duration: "1 – 1.5 horas",
    ideal: "Perros que no necesitan corte completo pero sí un repaso.",
    description: [
      "El Bath & Tidy es perfecto para mantener a tu perrito limpio, fresco y presentable entre citas de corte completo. Es un servicio más ágil que conserva el estilo de su pelaje mientras renueva su higiene.",
      "Incluye un baño profundo con productos de calidad, secado, cepillado y un retoque higiénico en las zonas que más lo necesitan: cara, patas, orejas y área sanitaria. También cortamos y limamos las uñas y limpiamos los oídos.",
      "Muchos de nuestros clientes alternan Bath & Tidy y Full Groom en un calendario mensual: así su perrito siempre está impecable sin pasar por cortes innecesarios.",
    ],
    includes: [
      "Baño con shampoo y acondicionador profesional",
      "Secado y cepillado",
      "Retoque de cara, patas y zona sanitaria",
      "Corte y limado de uñas",
      "Limpieza de oídos",
      "Perfume de cortesía",
    ],
    gallery: [
      { label: "Baño refrescante", tone: "secondary" },
      { label: "Retoque de cara", tone: "blush" },
      { label: "Uñas perfectas", tone: "muted" },
      { label: "Fresco y feliz", tone: "secondary" },
    ],
  },
  {
    slug: "board-care",
    title: "Board & Care",
    tagline: "Hospedaje supervisado, limpio y lleno de amigos.",
    duration: "Estancias por noche o por días",
    ideal: "Razas pequeñas que necesitan cuidado mientras viajas.",
    description: [
      "Cuando viajas, tu perrito merece quedarse en un lugar donde lo traten como en casa. Nuestro Board & Care es un hospedaje boutique en West Miami, pensado especialmente para razas pequeñas que necesitan supervisión cercana y un ambiente controlado.",
      "A diferencia de las perreras tradicionales, mantenemos grupos pequeños y compatibles, con espacios limpios, climatizados y supervisión constante durante el día. Cada huésped tiene su rutina de paseos, juegos y descanso adaptada a su edad y energía.",
      "Te enviamos actualizaciones con fotos para que veas lo bien que la está pasando. Y si quieres, puedes combinar la estancia con un grooming para que vuelva a casa limpio y guapo.",
    ],
    includes: [
      "Hospedaje supervisado en grupos pequeños",
      "Espacio limpio, seguro y climatizado",
      "Rutina de paseos, juego y descanso",
      "Alimentación según las indicaciones del dueño",
      "Actualizaciones con fotos durante la estancia",
      "Opción de grooming antes de la entrega",
    ],
    gallery: [
      { label: "Área de juego", tone: "blush" },
      { label: "Descanso cómodo", tone: "muted" },
      { label: "Nuevos amigos", tone: "secondary" },
      { label: "Supervisión constante", tone: "blush" },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
