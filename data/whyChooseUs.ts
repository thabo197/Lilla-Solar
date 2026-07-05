import {
  Users,
  ShieldCheck,
  Wallet,
  BadgeCheck,
  HardHat,
  Smile,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyChooseUs: Feature[] = [
  {
    id: "experienced",
    icon: HardHat,
    title: "Experienced Technicians",
    description: "Certified installers who have wired homes and businesses across Zambia.",
  },
  {
    id: "quality",
    icon: BadgeCheck,
    title: "High Quality Products",
    description: "Only trusted brands like JA Solar, Deye and Growatt make it into our vans.",
  },
  {
    id: "affordable",
    icon: Wallet,
    title: "Affordable Pricing",
    description: "Transparent quotes with financing options, so going solar stays within reach.",
  },
  {
    id: "warranty",
    icon: ShieldCheck,
    title: "Warranty Support",
    description: "Manufacturer-backed warranties plus our own after-sales follow-up.",
  },
  {
    id: "installation",
    icon: Users,
    title: "Professional Installation",
    description: "Clean, code-compliant wiring — no shortcuts, no exposed cable left behind.",
  },
  {
    id: "satisfaction",
    icon: Smile,
    title: "Customer Satisfaction",
    description: "Hundreds of homes and businesses running on power they can count on.",
  },
];
