import axios from "axios";

export const sliderItems = [
  {
    id: 1,
    img: "./photo3.jpg",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fbf0f4",
  },
  {
    id: 2,
    img: "./photo2.jpg",
    title: "WINTER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "f5fafd",
  },
  {
    id: 3,
    img: "./photo4.jpg",
    title: "POPULAR SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  },
];

export const fetchProd = async () => {
  const res = await axios.get("localhost:3001/products/");
  console.log(res);
  return res.data.length;
};

export const categories = [
  {
    id: 0,
    name: "Nowości",
  },
  {
    id: 1,
    name: "Sukienki",
  },
  {
    id: 2,
    name: "Spodnie",
  },
  {
    id: 3,
    name: "Koszulki",
  },
  {
    id: 4,
    name: "Marynarki",
  },
  {
    id: 5,
    name: "Akcesoria",
  },
];

export const products = [
  {
    id: 1,
    name: "bluzka1",
    price: 10,
    img: "../photo2.jpg",
  },
  {
    id: 2,
    name: "bluzka1",
    price: 10,
    img: "../photo2.jpg",
  },
  {
    id: 3,
    name: "bluzka1",
    price: 10,
    img: "../photo2.jpg",
  },
  {
    id: 4,
    name: "bluzka1",
    price: 10,
    img: "../photo2.jpg",
  },
  {
    id: 5,
    name: "bluzka1",
    price: 10,
    img: "../photo2.jpg",
  },
  {
    id: 6,
    name: "bluzka2",
    price: 10,
    img: "../photo2.jpg",
  },
  {
    id: 7,
    name: "bluzka1",
    price: 10,
    img: "../photo2.jpg",
  },
  {
    id: 8,
    name: "bluzka3",
    price: 10,
    img: "../photo2.jpg",
  },
];
