export const color = [
  "White",
  "Black",
  "Red",
  "marun",
  "Being",
  "Pink",
  "Green",
  "Yellow",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
        { value: "white", label: "White" },
        { value: "beige", label: "Beige"},
        { value: "blue", label: "Blue"},
        { value: "brown", label: "Brown"},
        { value: "green", label: "Green"},
        { value: "purple", label: "Purple"},
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "$159 to $399" },
      { value: "399-999", label: "$399 to $999" },
      { value: "999-1999", label: "$999 to $1999" },
      { value: "1999-2999", label: "$1999 to $2999" },
      { value: "3999-4999", label: "$3999 to $4999" },
    ],
  },
  {
    id: "discout",
    name: "Discount RANGE",
    options: [
      { value: "10", label: "10% and Above" },
      { value: "20", label: "20% and Above" },
      { value: "30", label: "30% and Above" },
      { value: "40", label: "40% and Above" },
      { value: "50", label: "50% and Above" },
      { value: "60", label: "60% and Above" },
      { value: "70", label: "70% and Above" },
      { value: "80", label: "80% and Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
    ],
  },
];

export const sortOption=[
    {name:"Price: Low to High",query:"price_low",current:false},
    {name:"Price: High to Low",query:"price_high",current:false},
]