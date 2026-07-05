import {
  Home,
  Building2,
  Wrench,
  ClipboardList,
  BatteryCharging,
  Ruler,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Solar Installation",
    description:
      "Complete home systems sized to your household's real usage, not a one-size-fits-all package.",
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Solar Systems",
    description:
      "Larger arrays for shops, offices and lodges that keep operations running through outages.",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Maintenance & Repairs",
    description:
      "Panel cleaning, battery health checks and inverter servicing to protect your investment.",
  },
  {
    id: "consultation",
    icon: ClipboardList,
    title: "Solar Consultation",
    description:
      "An honest read on your power needs, budget and roof before you commit to any equipment.",
  },
  {
    id: "backup",
    icon: BatteryCharging,
    title: "Backup Power Systems",
    description:
      "Battery-first setups built around Zambia's load-shedding schedule, not against it.",
  },
  {
    id: "custom",
    icon: Ruler,
    title: "Custom Solar Design",
    description:
      "Bespoke layouts for irregular roofs, mixed loads and multi-building compounds.",
  },
];
