import {
  GiFruitTree,
  GiChickenOven,
  GiBeerBottle,
  GiBowlOfRice,
} from "react-icons/gi";
import { MdOutlineIcecream ,MdFastfood} from "react-icons/md";
import { FaFish } from "react-icons/fa";
import { BiDish,BiBowlRice } from "react-icons/bi";

export const Categories = [
  {
    id: 0,
    name: "Menu",
    icon: BiDish,
  },
  {
    id: 1,
    name: "Chicken",
    icon: GiChickenOven,
  },
  {
    id: 2,
    name: "Fruits",
    icon: GiFruitTree,
  },
  {
    id: 3,
    name: "Soft Drinks",
    icon: GiBeerBottle,
  },
  {
    id: 4,
    name: "Desserts",
    icon: MdFastfood
 },
  {
    id: 5,
    name: "Icecreams",
    icon: MdOutlineIcecream,
  },
  {
    id: 6,
    name: "Fish",
    icon: FaFish,
  },
  {
    id: 7,
    name: "Rice",
    icon: GiBowlOfRice,
  },
  {
    id: 8,
    name: "Curry",
    icon: BiBowlRice
  },
];
