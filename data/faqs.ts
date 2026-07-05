export type FAQ = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: "lifespan",
    question: "How long do solar panels last?",
    answer:
      "Most panels we install carry a 25-year performance warranty and keep producing well beyond that, with only a gradual dip in output over time.",
  },
  {
    id: "installation",
    question: "Do you offer installation?",
    answer:
      "Yes — every system we sell is installed by our own trained technicians, from mounting the panels to configuring the inverter.",
  },
  {
    id: "warranty",
    question: "What warranty do you provide?",
    answer:
      "Panels and inverters carry manufacturer warranties (typically 10–25 years), and we back our own installation workmanship for 2 years.",
  },
  {
    id: "whole-house",
    question: "Can solar power my whole house?",
    answer:
      "In most cases, yes. We size the system around your actual appliances — fridge, TV, lights, water pump — so nothing important gets left out.",
  },
  {
    id: "cost",
    question: "How much does a system cost?",
    answer:
      "It depends on your usage and battery backup time needed. A site visit and consultation gets you an exact, itemised quote — free of charge.",
  },
];
