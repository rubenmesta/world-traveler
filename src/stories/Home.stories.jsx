import React from "react";

import { Card } from "../components/Card/Card";
import { Layout } from "../components/Layout";
import "../components/Card/card.scss";
import "../styles/App.scss";

export default {
  title: "Home",
  component: Layout,
  subcomponents: { Card },
};

export const Grid = (args) => (
  <Layout {...args}>
    <section className="wrapper" style={{ maxWidth: "100%" }}>
      <Card
        destination="International"
        src="/images/london-img.jpg"
        alt=""
        eyebrow="Register Now"
        city="Paris, France"
        date="12/19/2022"
        description="Torquatos nostros? quos tu paulo ante cum soluta nobis est"
        className="Card first"
      />
      <Card
        destination="Domestic"
        src="/images/london-img.jpg"
        alt=""
        eyebrow="Register Now"
        city="Atlanta, GA"
        date="12/19/2022"
        description="Torquatos nostros? quos tu paulo ante cum soluta nobis est"
        className="Card second"
      />
      <Card
        destination="international"
        src="/images/london-img.jpg"
        alt=""
        eyebrow="3 Spots Left!"
        city="Singapore"
        date="12/19/2022"
        description="Torquatos nostros? quos tu paulo ante cum soluta nobis est"
        className="Card third"
      />
    </section>
  </Layout>
);
