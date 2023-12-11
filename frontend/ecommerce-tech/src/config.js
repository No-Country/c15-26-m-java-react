export const categories = [
  { id: 0, name: "", subcategories: [] },
  { id: 1, name: "PC", subcategories: [] },
  { id: 2, name: "Notebooks", subcategories: [] },
  { id: 3, name: "Tablets", subcategories: [] },
  {
    id: 4,
    name: "Periféricos",
    subcategories: [
      { id: 41, name: "Monitores" },
      { id: 42, name: "Mouse" },
      { id: 43, name: "Teclados" },
      { id: 44, name: "Joysticks" },
      { id: 45, name: "Cables" },
    ],
  },
  {
    id: 5,
    name: "Audio",
    subcategories: [
      { id: 51, name: "Auriculares" },
      { id: 52, name: "Parlantes" },
      { id: 53, name: "Micrófonos" },
    ],
  },
  {
    id: 6,
    name: "Consolas",
    subcategories: [
      { id: 61, name: "PlayStation" },
      { id: 62, name: "Xbox" },
      { id: 63, name: "Nintendo" },
    ],
  },
  { id: 7, name: "Sillas y escritorios", subcategories: [] },
];

export const API_URL = "https://e-commerce-7i7l.onrender.com/api/v1/";
