import { TUserAddOns, TUserPlans } from "./../types/data";

import arcadeImg from "../../public/icon-arcade.svg";
import advancedImg from "../../public/icon-advanced.svg";
import proImg from "../../public/icon-pro.svg";

export const userPlans: TUserPlans = {
  yearlyPlan: [
    {
      image: arcadeImg,
      title: "Arcade",
      price: 90,
      extra: "2 months free",
      duration: "yearly",
    },
    {
      image: advancedImg,
      title: "Advanced",
      price: 120,
      extra: "2 months free",
      duration: "yearly",
    },
    {
      image: proImg,
      title: "Pro",
      price: 150,
      extra: "2 months free",
      duration: "yearly",
    },
  ],

  monthlyPlan: [
    { image: arcadeImg, title: "Arcade", price: 9, duration: "monthly" },
    {
      image: advancedImg,
      title: "Advanced",
      price: 12,
      duration: "monthly",
    },
    { image: proImg, title: "Pro", price: 15, duration: "monthly" },
  ],
};

export const userAddOns: TUserAddOns = {
  monthlyPlans: [
    {
      title: "Online service",
      descreption: "Access to multiplayer games",
      price: 1,
      id: 0,
    },
    {
      title: "Larger storage",
      descreption: "Extra 1TB of cloud save",
      price: 2,
      id: 1,
    },
    {
      title: "Customizable profile",
      descreption: "Custom theme on your profile",
      price: 2,
      id: 2,
    },
  ],

  yearlyPlans: [
    {
      title: "Online service",
      descreption: "Access to multiplayer games",
      price: 10,
      id: 0,
    },
    {
      title: "Larger storage",
      descreption: "Extra 1TB of cloud save",
      price: 20,
      id: 1,
    },
    {
      title: "Customizable Profile",
      descreption: "Custom theme on your profile",
      price: 20,
      id: 2,
    },
  ],
};
