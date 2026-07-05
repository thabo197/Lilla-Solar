export type Testimonial = {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Mwaka Chileshe",
    location: "Kabulonga, Lusaka",
    quote: "Very professional service and excellent installation. Load-shedding doesn't touch our house anymore.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Bwalya Mutale",
    location: "Kitwe",
    quote: "Highly recommended for solar solutions — the team explained everything before we paid a single kwacha.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Natasha Phiri",
    location: "Ndola",
    quote: "System works perfectly and reduced our electricity costs within the first month.",
    rating: 4,
  },
  {
    id: "t4",
    name: "Given Banda",
    location: "Chalala, Lusaka",
    quote: "Installed our shop's backup system in two days. We haven't lost a sale to an outage since.",
    rating: 5,
  },
];
