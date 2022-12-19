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
  src: "/images/london-img.jpg",
  eyebrow: "International",
  city: "Paris, France",
  date: "12/19/2022",
  description: "Torquatos nostros? quos tu paulo ante cum soluta nobis est",
  className: "Card",
  width: 500,
};

export const Domestic = Template.bind({});
Domestic.args = {
  destination: "Domestic",
  src: "/images/atlanta-img.png",
  eyebrow: "Domestic",
  city: "Denver, CO",
  date: "12/19/2022",
  description: "Torquatos nostros? quos tu paulo ante cum soluta nobis est",
  className: "Card",
};
