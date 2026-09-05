import bathTidy1 from "@/assets/bath-tidy/bath-tidy-1.mp4.asset.json";
import bathTidy2 from "@/assets/bath-tidy/bath-tidy-2.mp4.asset.json";
import daycare1 from "@/assets/daycare/daycare-1.mp4.asset.json";
import daycare2 from "@/assets/daycare/daycare-2.mp4.asset.json";
import daycare3 from "@/assets/daycare/daycare-3.jpg.asset.json";
import daycare4 from "@/assets/daycare/daycare-4.jpg.asset.json";
import fg1 from "@/assets/full-groom/fg-1.jpeg.asset.json";
import fg2 from "@/assets/full-groom/fg-2.jpeg.asset.json";
import fg3 from "@/assets/full-groom/fg-3.jpeg.asset.json";
import fg4 from "@/assets/full-groom/fg-4.jpeg.asset.json";
import fg5 from "@/assets/full-groom/fg-5.jpeg.asset.json";
import fg6 from "@/assets/full-groom/fg-6.jpeg.asset.json";
import nats1 from "@/assets/nats/nats-1.jpeg.asset.json";
import nats2 from "@/assets/nats/nats-2.jpeg.asset.json";
import nats3 from "@/assets/nats/nats-3.jpeg.asset.json";
import transport1 from "@/assets/transportation/transport-1.jpg.asset.json";
import transport2 from "@/assets/transportation/transport-2.jpg.asset.json";
import transport3 from "@/assets/transportation/transport-3.jpg.asset.json";
import unas1 from "@/assets/unas/unas-1.jpg.asset.json";

export interface ServiceDetail {
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  ideal: string;
  metaTitle: string;
  metaDescription: string;
  description: string[];
  includes: string[];
  gallery: { label: string; tone: string; src?: string; type?: "image" | "video" }[];
}

export const services: ServiceDetail[] = [
  {
    slug: "full-groom",
    title: "Full Groom",
    tagline: "The complete service, from nose to tail.",
    duration: "2 – 3 hours",
    ideal: "Small breed dogs who need a complete haircut.",
    metaTitle: "Full Groom — Dog Grooming in West Miami, FL | Kisses and Paws",
    metaDescription:
      "Full-service dog grooming in West Miami, FL 33144. Bath, breed haircut, nails and ears with cage-free, stress-free handling for small breeds.",
    description: [
      "Our Full Groom is the signature experience at Kisses and Paws Board and Care, and it is much more than a haircut. It is an unhurried appointment designed to send your dog home refreshed, comfortable and beautiful, with every detail handled at their pace.",
      "We start with a warm bath using gentle, professional-grade products, followed by a careful blow-dry and a thorough brush-out to release every tangle. Then we shape the coat to the breed standard or the look you prefer, always putting your dog's comfort first.",
      "As small breed specialists in West Miami, we work cage-free and with gentle, hands-on handling from start to finish. If your dog gets nervous, we take breaks. Nobody here is in a rush.",
    ],
    includes: [
      "Bath with professional shampoo and conditioner",
      "Full blow-dry and brush-out",
      "Breed-standard or custom haircut",
      "Nail trim and file",
      "Ear cleaning",
      "Anal gland expression (when needed)",
      "Complimentary cologne and bow or bandana",
    ],
    gallery: [
      { label: "Before and after", tone: "blush", src: fg1.url },
      { label: "Breed haircut", tone: "muted", src: fg2.url },
      { label: "Detailed finish", tone: "secondary", src: fg3.url },
      { label: "Happy and clean", tone: "blush", src: fg4.url },
      { label: "Poodle styling", tone: "muted", src: fg5.url },
      { label: "Ready to go home", tone: "secondary", src: fg6.url },
    ],
  },
  {
    slug: "puppy-groom",
    title: "Puppy Groom",
    tagline: "Their very first grooming, with patience and love.",
    duration: "1 – 1.5 hours",
    ideal: "Puppies from 8 weeks to 6 months old.",
    metaTitle: "Puppy Grooming in West Miami, FL | Kisses and Paws Board and Care",
    metaDescription:
      "Gentle puppy grooming in West Miami, FL. A calm, cage-free first visit with short sessions, treats and plenty of breaks. Book with our small breed specialists.",
    description: [
      "First experiences shape a puppy for life. That is why our Puppy Groom is built to make that very first salon visit positive, calm and full of affection, with no rushing and no scary surprises.",
      "We work in short, gentle sessions, introducing your puppy to the water, the dryer and the grooming table little by little, with lots of pauses, treats and cuddles. The goal is simple: your puppy should learn that being groomed feels good.",
      "Beyond sending home a clean and adorable puppy, we share tips for brushing at home and for getting ready for their next stress-free grooming appointment in West Miami.",
    ],
    includes: [
      "Gentle bath with puppy-safe products",
      "Gradual introduction to the dryer and tools",
      "Light tidy of face, paws and sanitary area",
      "Nail trim",
      "Ear cleaning",
      "Frequent breaks, play and positive reinforcement",
      "At-home care guidance for new puppy parents",
    ],
    gallery: [
      { label: "First visit", tone: "muted" },
      { label: "A calm bath", tone: "blush" },
      { label: "Treats and cuddles", tone: "secondary" },
      { label: "Ready to go home", tone: "muted" },
    ],
  },
  {
    slug: "bath-tidy",
    title: "Bath & Tidy",
    tagline: "A refreshing touch-up between full haircuts.",
    duration: "1 – 1.5 hours",
    ideal: "Dogs who don't need a full haircut but do need a refresh.",
    metaTitle: "Bath & Tidy Dog Grooming in West Miami, FL | Kisses and Paws",
    metaDescription:
      "Bath & Tidy for dogs in West Miami, FL 33144. Deep bath, blow-dry, face and paw tidy, nails and ears between full grooms. Cage-free and stress-free.",
    description: [
      "Bath & Tidy is the perfect way to keep your dog clean, fresh and presentable between full haircut appointments. It is a quicker service that preserves their current style while restoring that just-groomed feeling.",
      "It includes a deep bath with quality products, a full blow-dry, a brush-out and a hygienic tidy of the areas that need it most: face, paws, ears and sanitary area. We also trim and file the nails and clean the ears.",
      "Many of our West Miami clients alternate Bath & Tidy and Full Groom on a monthly schedule, so their dog always looks polished without unnecessary haircuts.",
    ],
    includes: [
      "Bath with professional shampoo and conditioner",
      "Blow-dry and brush-out",
      "Face, paw and sanitary tidy",
      "Nail trim and file",
      "Ear cleaning",
      "Complimentary cologne",
    ],
    gallery: [
      { label: "A refreshing bath", tone: "secondary", src: bathTidy1.url, type: "video" },
      { label: "Face tidy", tone: "blush", src: bathTidy2.url, type: "video" },
      { label: "Perfect nails", tone: "muted" },
      { label: "Fresh and happy", tone: "secondary" },
    ],
  },
  {
    slug: "board-care",
    title: "Boarding",
    tagline: "Supervised, spotless boarding full of new friends.",
    duration: "Overnight or multi-day stays",
    ideal: "Small breeds who need care while you travel.",
    metaTitle: "Dog Boarding in West Miami, FL 33144 | Kisses and Paws Board and Care",
    metaDescription:
      "Cage-free dog boarding in West Miami, FL. Small groups, climate-controlled rooms, constant supervision and photo updates while you travel. Small breed specialists.",
    description: [
      "When you travel, your dog deserves to stay somewhere that feels like home. Our boarding is a boutique stay in West Miami, designed specifically for small breeds who need close supervision and a calm, controlled environment.",
      "Unlike traditional kennels, we keep small, compatible groups in clean, climate-controlled spaces with constant daytime supervision. Every guest gets a walk, play and rest routine matched to their age and energy.",
      "We send photo updates so you can see how well they are doing. And if you'd like, you can add a grooming appointment so they come home clean and looking their best.",
    ],
    includes: [
      "Supervised boarding in small groups",
      "Clean, safe, climate-controlled space",
      "Daily walk, play and rest routine",
      "Feeding per your instructions",
      "Photo updates throughout the stay",
      "Optional grooming before pickup",
    ],
    gallery: [
      { label: "Play area", tone: "blush" },
      { label: "Comfortable rest", tone: "muted" },
      { label: "New friends", tone: "secondary" },
      { label: "Constant supervision", tone: "blush" },
    ],
  },
  {
    slug: "daycare",
    title: "Daycare",
    tagline: "A day of fun, friends and constant supervision.",
    duration: "Half day or full day",
    ideal: "Social dogs who love to play in a safe environment.",
    metaTitle: "Dog Daycare in West Miami, FL | Kisses and Paws Board and Care",
    metaDescription:
      "Cage-free dog daycare in West Miami, FL 33144. Small compatible playgroups, climate-controlled play space and photo updates. Half-day and full-day options.",
    description: [
      "Our daycare is the perfect place for your dog to spend an active, social day while you work or run errands. In a clean, climate-controlled space designed for canine socialization, your dog plays, explores and rests under constant supervision.",
      "We keep playgroups small and compatible so every dog feels comfortable and safe. The room is full of toys, soft play areas and thoughtful details that keep them stimulated and happy all day long.",
      "Whether it's a half day or a full day, your dog comes home tired, content and well cared for. We keep you posted with updates and photos so you can see the fun for yourself.",
    ],
    includes: [
      "Clean, safe, climate-controlled play space",
      "Constant supervision all day",
      "Socialization in small, compatible groups",
      "Toys and enrichment areas",
      "Rest breaks matched to each dog's energy",
      "Photo updates during the stay",
      "Can be combined with grooming or boarding",
    ],
    gallery: [
      { label: "Group fun", tone: "blush", src: daycare1.url, type: "video" },
      { label: "Games and friends", tone: "secondary", src: daycare2.url, type: "video" },
      { label: "A cozy space", tone: "muted", src: daycare3.url },
      { label: "Close supervision", tone: "blush", src: daycare4.url },
    ],
  },
  {
    slug: "nats",
    title: "NATS — Dental Cleaning",
    tagline: "A fresh smile and healthy gums for your dog.",
    duration: "20 – 40 minutes",
    ideal: "Dogs with tartar, bad breath or a need for regular dental care.",
    metaTitle: "Dog Teeth Cleaning in Miami — NATS Anesthesia-Free | Kisses and Paws",
    metaDescription:
      "Anesthesia-free dog teeth cleaning in West Miami, FL 33144. Gentle NATS dental service removes surface tartar and plaque for fresher breath and healthier gums.",
    description: [
      "Dental health is one of the most overlooked parts of dog care, and it has an enormous impact on your dog's overall wellbeing. Our NATS service keeps your dog's mouth clean and healthy in a gentle, safe, anesthesia-free way.",
      "We use non-invasive dog teeth cleaning techniques with products formulated specifically for dogs, softly lifting surface tartar and plaque from the teeth. We work with patience, breaks and positive reinforcement so the session stays as relaxed as possible.",
      "Along with fresher breath, you'll leave with clear guidance on caring for their teeth at home and how often we recommend repeating the service based on their age, breed and habits.",
    ],
    includes: [
      "Initial visual check of teeth and gums",
      "Gentle anesthesia-free dental cleaning",
      "Removal of surface plaque and tartar",
      "Dog-safe dental gel application",
      "Positive reinforcement and breaks throughout",
      "At-home dental care recommendations",
    ],
    gallery: [
      { label: "Before and after", tone: "blush", src: nats1.url },
      { label: "Tartar removed", tone: "muted", src: nats2.url },
      { label: "Clean teeth", tone: "secondary", src: nats3.url },
    ],
  },
  {
    slug: "bath",
    title: "Bath",
    tagline: "A deep, relaxing bath and a dog you'll want to hug.",
    duration: "45 – 60 minutes",
    ideal: "Dogs who need a complete bath without a haircut.",
    metaTitle: "Dog Bath Service in West Miami, FL | Kisses and Paws Board and Care",
    metaDescription:
      "Professional dog bath in West Miami, FL 33144. Deep clean, conditioner, careful blow-dry, brush-out, ears and nails. Gentle, cage-free handling.",
    description: [
      "Sometimes all your dog needs is a really good bath to come home smelling wonderful, with a soft coat and fresh, comfortable skin. Our Bath service is a deep clean without a haircut, ideal for keeping up hygiene between full grooming appointments.",
      "We begin by checking the coat and skin to choose the right shampoo. Then comes a warm bath with professional products, conditioner if the coat needs it, a careful blow-dry and a brush-out to release loose hair and tangles.",
      "We finish with ear cleaning, a nail trim if you'd like one, and a touch of cologne so your dog feels brand new — all with the same gentle, unhurried handling we're known for in West Miami.",
    ],
    includes: [
      "Bath with professional shampoo matched to the coat",
      "Conditioner for a soft, shiny coat",
      "Careful blow-dry and full brush-out",
      "Ear cleaning",
      "Nail trim and file",
      "Complimentary cologne",
    ],
    gallery: [
      { label: "A relaxing bath", tone: "secondary" },
      { label: "Gentle drying", tone: "blush" },
      { label: "Shiny coat", tone: "muted" },
      { label: "Ready to go home", tone: "secondary" },
    ],
  },
  {
    slug: "nails",
    title: "Nails",
    tagline: "Nail trims and filing, calm and safe.",
    duration: "15 – 25 minutes",
    ideal: "Dogs who need their nails kept short and healthy.",
    metaTitle: "Dog Nail Trim in West Miami, FL | Kisses and Paws Board and Care",
    metaDescription:
      "Quick, gentle dog nail trims and filing in West Miami, FL 33144. Safe technique, calm handling and breaks for nervous dogs. Walk-in friendly express service.",
    description: [
      "Long nails aren't just uncomfortable: they can change the way your dog walks, cause pain and even lead to joint problems over time. Our Nails service makes this bit of care quick, safe and as low-stress as possible.",
      "We trim and file each nail with the right tools and safe technique, adapting to your dog's size, nail color and sensitivity. If your dog gets nervous, we take all the time they need, with pauses and a calm, reassuring touch.",
      "It's a great add-on to any grooming appointment, or an express visit when this is the only thing on the list. Your dog leaves with comfortable, healthy paws.",
    ],
    includes: [
      "Check of nail and paw pad condition",
      "Nail trim with safe technique",
      "Filing to prevent sharp edges and cracks",
      "Gentle handling with breaks as needed",
      "Light paw pad cleaning",
      "Advice on frequency by activity and breed",
    ],
    gallery: [
      { label: "Before and after", tone: "blush", src: unas1.url },
      { label: "A safe trim", tone: "muted" },
      { label: "Clean paws", tone: "secondary" },
      { label: "Gentle handling", tone: "blush" },
    ],
  },
  {
    slug: "transportation",
    title: "Transportation",
    tagline: "We pick your dog up and bring them safely home.",
    duration: "By zone in West Miami and nearby areas",
    ideal: "Dog parents who need help getting their pet to and from the salon.",
    metaTitle: "Dog Grooming Pickup & Delivery in West Miami, FL | Kisses and Paws",
    metaDescription:
      "Door-to-door pickup and delivery for dog grooming and boarding in West Miami, Coral Gables, Flagami, Doral and nearby Miami neighborhoods.",
    description: [
      "Between work, traffic and packed schedules, getting your dog to the groomer isn't always easy. That's why we offer Transportation: a pickup and delivery service that makes caring for your dog even more convenient.",
      "Our vehicle is safe, clean and climate-controlled, with proper space for small breeds. Your dog travels comfortably and with company, no stressful crates and no unnecessary waiting. We schedule around your day and let you know when we're on the way.",
      "We serve West Miami, Coral Gables, Flagami, Doral and nearby Miami neighborhoods, and you can pair transportation with any grooming or boarding service.",
    ],
    includes: [
      "Home pickup at a scheduled time",
      "Safe, climate-controlled transport",
      "Gentle handling throughout the ride",
      "Delivery back to your door",
      "Coordination by WhatsApp",
      "Can be combined with grooming or boarding",
    ],
    gallery: [
      { label: "Our transport vehicle", tone: "muted", src: transport1.url },
      { label: "Home pickup", tone: "blush", src: transport2.url },
      { label: "Safe delivery", tone: "secondary", src: transport3.url },
      { label: "Local routes", tone: "muted" },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
