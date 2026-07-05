export type Product = {
  id: string;
  category: string;
  title: string;
  description: string;
  spec: string; // small mono spec tag, e.g. wattage/capacity range
  gradient: [string, string];
};

export const products: Product[] = [
  {
    id: "panels",
    category: "Solar Panels",
    title: "Monocrystalline Solar Panels",
    description:
      "High-efficiency panels built for strong Zambian sun, from single-room setups to full commercial arrays.",
    spec: "150W – 600W",
    gradient: ["#2E7D32", "#0F3D14"],
  },
  {
    id: "batteries",
    category: "Batteries",
    title: "Lithium & Gel Battery Banks",
    description:
      "Deep-cycle storage that carries your home through the night and every load-shedding stage.",
    spec: "100Ah – 400Ah",
    gradient: ["#FFC107", "#B8860B"],
  },
  {
    id: "inverters",
    category: "Inverters",
    title: "Hybrid Solar Inverters",
    description:
      "Seamless switching between grid, battery and panel power — your appliances never feel the difference.",
    spec: "1kVA – 10kVA",
    gradient: ["#1B3324", "#2E7D32"],
  },
  {
    id: "controllers",
    category: "Charge Controllers",
    title: "MPPT Charge Controllers",
    description:
      "Smart charging that protects your battery bank and squeezes every watt out of your panels.",
    spec: "20A – 100A",
    gradient: ["#FF8A00", "#B8860B"],
  },
  {
    id: "streetlights",
    category: "Solar Street Lights",
    title: "All-in-One Street Lights",
    description:
      "Motion-sensing, self-contained lighting for compounds, driveways and business premises.",
    spec: "30W – 120W",
    gradient: ["#14251A", "#2E7D32"],
  },
  {
    id: "pumps",
    category: "Water Pumps",
    title: "Solar Water Pumps",
    description:
      "Off-grid pumping for boreholes and irrigation — no diesel, no downtime, no noise.",
    spec: "0.5HP – 5HP",
    gradient: ["#2E7D32", "#FFC107"],
  },
  {
    id: "accessories",
    category: "Accessories",
    title: "Cables, Mounts & Combiners",
    description:
      "The connective tissue of every install: DC cable, mounting rail, breakers and combiner boxes.",
    spec: "Full range",
    gradient: ["#1E2420", "#2E7D32"],
  },
];
