import daycare1 from "@/assets/daycare/daycare-1.mp4.asset.json";
import daycare2 from "@/assets/daycare/daycare-2.mp4.asset.json";
import fg1 from "@/assets/full-groom/fg-1.jpeg.asset.json";
import fg2 from "@/assets/full-groom/fg-2.jpeg.asset.json";
import fg3 from "@/assets/full-groom/fg-3.jpeg.asset.json";
import fg4 from "@/assets/full-groom/fg-4.jpeg.asset.json";
import fg5 from "@/assets/full-groom/fg-5.jpeg.asset.json";
import fg6 from "@/assets/full-groom/fg-6.jpeg.asset.json";
import nats1 from "@/assets/nats/nats-1.jpeg.asset.json";
import nats2 from "@/assets/nats/nats-2.jpeg.asset.json";
import nats3 from "@/assets/nats/nats-3.jpeg.asset.json";

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  ideal: string;
  description: string[];
  includes: string[];
  gallery: { label: string; tone: string; src?: string; type?: "image" | "video" }[];
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
    title: "Boarding",
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
  {
    slug: "daycare",
    title: "Daycare",
    tagline: "Un día de diversión, amigos y supervisión constante.",
    duration: "Medio día o día completo",
    ideal: "Perros sociables que disfrutan jugar y convivir en un ambiente seguro.",
    description: [
      "Nuestro Daycare es el lugar perfecto para que tu perrito pase un día divertido, activo y lleno de compañía mientras tú trabajas o te ocupas de tus pendientes. En un espacio limpio, climatizado y diseñado para la socialización canina, tu mascota juega, explora y descansa bajo supervisión constante.",
      "Mantenemos grupos pequeños y compatibles para que cada perro se sienta cómodo y seguro. El ambiente está lleno de juguetes, áreas de juego suaves y detalles pensados para estimularlos y mantenerlos felices durante su estadía.",
      "Ya sea por medio día o por jornada completa, tu perrito vuelve a casa cansado, contento y bien cuidado. Te mantenemos informado con actualizaciones y fotos para que sepas lo bien que la está pasando.",
    ],
    includes: [
      "Espacio de juego limpio, seguro y climatizado",
      "Supervisión constante durante todo el día",
      "Socialización en grupos pequeños y compatibles",
      "Juguetes y áreas de estimulación",
      "Pausas de descanso según la energía de cada perro",
      "Actualizaciones con fotos durante la estadía",
      "Opción de combinar con grooming o boarding",
    ],
    gallery: [
      { label: "Diversión en grupo", tone: "blush", src: daycare1.url, type: "video" },
      { label: "Juegos y amigos", tone: "secondary", src: daycare2.url, type: "video" },
      { label: "Ambiente acogedor", tone: "muted" },
      { label: "Supervisión cercana", tone: "blush" },
    ],
  },
  {
    slug: "nats",
    title: "NATS — Servicio Dental",
    tagline: "Sonrisa fresca y salud bucal para tu perrito.",
    duration: "20 – 40 minutos",
    ideal: "Perros con sarro, mal aliento o que necesiten limpieza dental regular.",
    description: [
      "La salud dental es una parte del cuidado canino que muchas veces pasa desapercibida, pero tiene un impacto enorme en el bienestar general de tu mascota. Nuestro servicio NATS está pensado para mantener limpia y saludable la boca de tu perrito de forma suave, segura y sin anestesia.",
      "Utilizamos técnicas de limpieza dental no invasivas con productos específicos para perros, removiendo suavemente el sarro superficial y el plato de los dientes. Trabajamos con paciencia, pausas y refuerzo positivo para que la experiencia sea lo más relajada posible.",
      "Además de dejarle el aliento fresco, te orientamos sobre cómo cuidar sus dientes en casa y con qué frecuencia recomendamos repetir el servicio según su edad, raza y hábitos.",
    ],
    includes: [
      "Evaluación visual inicial de dientes y encías",
      "Limpieza dental suave sin anestesia",
      "Remoción de placa y sarro superficial",
      "Aplicación de gel dental apto para perros",
      "Refuerzo positivo y pausas durante la sesión",
      "Recomendaciones de cuidado dental en casa",
    ],
    gallery: [
      { label: "Antes y después", tone: "blush", src: nats1.url },
      { label: "Sarro removido", tone: "muted", src: nats2.url },
      { label: "Dientes limpios", tone: "secondary", src: nats3.url },
    ],
  },
  {
    slug: "bath",
    title: "Bath",
    tagline: "Baño profundo, relajante y listo para abrazar.",
    duration: "45 – 60 minutos",
    ideal: "Perros que necesitan un baño completo sin corte de pelo.",
    description: [
      "A veces lo único que tu perrito necesita es un buen baño para volver a casa oliendo delicioso, con el pelaje suave y la piel fresca. Nuestro servicio Bath es una experiencia de limpieza profunda sin corte, ideal para mantener la higiene entre grooming completos.",
      "Comenzamos con una revisión del pelaje y la piel para elegir el shampoo adecuado. Luego realizamos un baño tibio con productos profesionales, acondicionador si el pelaje lo necesita, secado cuidadoso y cepillado para remover el pelo suelto y desenredar.",
      "Terminamos con limpieza de oídos, corte de uñas si lo deseas, y un toque de perfume para que tu perrito se sienta renovado. Todo con el mismo manejo gentil y sin prisas que nos caracteriza.",
    ],
    includes: [
      "Baño con shampoo profesional según tipo de pelaje",
      "Acondicionador para pelaje suave y brillante",
      "Secado cuidadoso y cepillado completo",
      "Limpieza de oídos",
      "Corte y limado de uñas",
      "Perfume de cortesía",
    ],
    gallery: [
      { label: "Baño relajante", tone: "secondary" },
      { label: "Secado suave", tone: "blush" },
      { label: "Pelaje brillante", tone: "muted" },
      { label: "Listo para casa", tone: "secondary" },
    ],
  },
  {
    slug: "unas",
    title: "Uñas",
    tagline: "Corte y limado de uñas con calma y seguridad.",
    duration: "15 – 25 minutos",
    ideal: "Perros que necesiten mantener sus uñas cortas y saludables.",
    description: [
      "Las uñas largas no solo son incómodas: pueden cambiar la forma de caminar de tu perrito, causar dolor y hasta provocar problemas en las articulaciones. Nuestro servicio de Uñas está diseñado para hacer este cuidado rápido, seguro y lo menos estresante posible.",
      "Cortamos y limamos cada uña con herramientas adecuadas y técnicas seguras, adaptándonos al tamaño, color y sensibilidad de tu mascota. Si tu perro se pone nervioso, tomamos el tiempo necesario, con pausas y mucha calma.",
      "Es un servicio ideal como complemento a cualquier grooming o como cita express cuando solo necesitas este cuidado puntual. Saldrá con las patitas listas y cómodas.",
    ],
    includes: [
      "Revisión del estado de las uñas y almohadillas",
      "Corte de uñas con técnica segura",
      "Limado para evitar filos y grietas",
      "Manejo gentil y pausas según necesidad",
      "Limpieza ligera de almohadillas",
      "Consejos de frecuencia según actividad y raza",
    ],
    gallery: [
      { label: "Uñas cuidadas", tone: "blush" },
      { label: "Corte seguro", tone: "muted" },
      { label: "Patas limpias", tone: "secondary" },
      { label: "Manejo gentil", tone: "blush" },
    ],
  },
  {
    slug: "transportation",
    title: "Transportation",
    tagline: "Te recogemos y devolvemos a tu perrito con cuidado.",
    duration: "Según zona en West Miami y alrededores",
    ideal: "Dueños que necesitan ayuda para llevar y traer a su mascota al salón.",
    description: [
      "Sabemos que entre el trabajo, el tráfico y las agendas apretadas no siempre es fácil llevar a tu perrito al grooming. Por eso ofrecemos Transportation: un servicio de recogida y entrega pensado para que cuidar de tu mascota sea aún más conveniente.",
      "Nuestro transporte es seguro, limpio y climatizado, con espacio adecuado para razas pequeñas. Tu perrito viaja cómodo y acompañado, sin jaulas estresantes ni esperas innecesarias. Coordinamos horarios que se ajusten a tu día y te avisamos cuando esté en camino.",
      "Puedes combinar el transporte con cualquiera de nuestros servicios de grooming o boarding. Es la manera más fácil de mantener a tu perrito impecable sin salir de casa.",
    ],
    includes: [
      "Recogida a domicilio en horario acordado",
      "Transporte seguro y climatizado",
      "Manejo gentil durante el trayecto",
      "Entrega de vuelta a casa",
      "Coordinación por WhatsApp",
      "Combinable con grooming o boarding",
    ],
    gallery: [
      { label: "Recogida a domicilio", tone: "muted" },
      { label: "Viaje cómodo", tone: "blush" },
      { label: "Entrega segura", tone: "secondary" },
      { label: "Rutas locales", tone: "muted" },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
