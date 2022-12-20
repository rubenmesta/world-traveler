import React from "react";

import { render, screen } from "@testing-library/react";

import { Card } from "./Card";
import * as styles from "./card.scss";

describe("Card", () => {
  it("should get content from json file", () => {
    render(
      <Card
        src="/images/london-img.jpg"
        alt="London England Street"
        destination="International"
        class="first"
        city="London, England"
        date="April 15, 2020"
        description="blas"
      >
        <></>
      </Card>
    );

    // eslint-disable-next-line testing-library/no-node-access
    // const div = screen.getByText("International").parentElement;
    // const computedStyle = window.getComputedStyle(div);

    // const { container } = render(<Card />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    // const badge = container.getElementsByClassName("Card_badge__accentColor");

    // console.log("computed style", badge);
    // const color = "rgb(247, 181, 0)";
    // expect(badge.background).toBe(`background: ${color}`);

    // const element = screen.getByText("International");
    // console.log("element", element);
    // const styles = getComputedStyle(element);
    // console.log("styles", styles);

    // expect(styles.backgroundColor).toBe("rgb(247, 181, 0)");
  });

  //   it("should render yellow badge accent color", () => {
  //     const { container } = render(
  //       <Card
  //         src="/images/london-img.jpg"
  //         alt="London England Street"
  //         destination="International"
  //         class="first"
  //         city="London, England"
  //         date="April 15, 2020"
  //         description="blas"
  //       />
  //     );
  //     // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  //     const badge = container.getElementsByClassName("Card_badge__accentColor");

  //     console.log("computed style", badge);
  //     const color = "rgb(247, 181, 0)";
  //     expect(badge.background).toBe(`background: ${color}`);
  //   });
});
