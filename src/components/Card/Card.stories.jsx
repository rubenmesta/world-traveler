import React from "react";

import { Card } from "./Card";
import "./card.scss";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const International = Template.bind({});
International.args = {
  destination: "International",
  image: {
    src: "/images/london-img.jpg",
    alt: "alt text",
  },
  details: {
    eyebrow: "Register Now",
    city: "Paris, France",
    date: "12/19/2022",
    description: "Torquatos nostros? quos tu paulo ante cum soluta nobis est",
    buttonText: "Plan your trip",
  },
  className: "Card",
};

export const Domestic = Template.bind({});
Domestic.args = {
  destination: "Domestic",
  image: {
    src: "/images/atlanta-img.png",
    alt: "alt text",
  },
  details: {
    eyebrow: "Register Now",
    city: "Denver, CO",
    date: "12/19/2022",
    description: "Torquatos nostros? quos tu paulo ante cum soluta nobis est",
    buttonText: "cta text",
  },

  className: "Card",
};
