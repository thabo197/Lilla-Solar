export type ProcessStep = {
  id: string;
  step: string; // mono step code, e.g. "01"
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "consultation",
    step: "01",
    title: "Consultation",
    description: "We talk through your power needs, budget and what keeps going off when load-shedding hits.",
  },
  {
    id: "site-visit",
    step: "02",
    title: "Site Visit",
    description: "Our technicians inspect your roof, wiring and meter to plan the right system size.",
  },
  {
    id: "quotation",
    step: "03",
    title: "Quotation",
    description: "A clear, itemised quote — equipment, labour and timeline, no hidden costs.",
  },
  {
    id: "installation",
    step: "04",
    title: "Installation",
    description: "Panels mounted, batteries wired, inverter configured — usually within a few days.",
  },
  {
    id: "support",
    step: "05",
    title: "After-Sales Support",
    description: "Ongoing monitoring, servicing and a team that still picks up the phone after install day.",
  },
];
