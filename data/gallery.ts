export type GalleryItem = {
  id: string;
  title: string;
  location: string;
  gradient: [string, string];
  span?: "tall" | "wide" | "normal";
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "Rooftop Array", location: "Kabulonga, Lusaka", gradient: ["#2E7D32", "#0F3D14"], span: "tall" },
  { id: "g2", title: "Battery Room", location: "Kitwe", gradient: ["#FFC107", "#B8860B"] },
  { id: "g3", title: "Shop Backup System", location: "Chalala, Lusaka", gradient: ["#1B3324", "#2E7D32"] },
  { id: "g4", title: "Borehole Pump", location: "Chongwe", gradient: ["#FF8A00", "#B8860B"], span: "wide" },
  { id: "g5", title: "Street Lighting", location: "Ndola", gradient: ["#14251A", "#2E7D32"] },
  { id: "g6", title: "Lodge Installation", location: "Livingstone", gradient: ["#2E7D32", "#FFC107"] },
  { id: "g7", title: "Panel Close-Up", location: "Lusaka", gradient: ["#1E2420", "#2E7D32"] },
  { id: "g8", title: "Inverter Wall Mount", location: "Kabwe", gradient: ["#0F3D14", "#FFC107"], span: "tall" },
];
