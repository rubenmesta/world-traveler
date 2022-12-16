import React, { useState } from "react";
// import IconButton from "@material-ui/core/IconButton";
// import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
// import StarRoundedIcon from "@material-ui/icons/StarRounded";

// import { Button } from "react-bootstrap";
// import "./image-card.scss";
import "./card.scss";

export const Card = ({
  image,
  destination = "international" | "domestic",
  src,
  className,
  ...props
}) => {
  // const [buttonText,setButtonText] = useState('Save');

  const badgeColor = destination === "domestic" ? "#32C5FF" : "#F7B500";
  const badgeText = destination === "domestic" ? "Domestic" : "International";

  return (
    <React.Fragment>
      <div className={className}>
        <div className="Card_badge">
          <span
            style={{ background: badgeColor }}
            className="Card_badge__eyebrow"
          ></span>
          <span>{badgeText}</span>
        </div>
        <div className="Card_imageContainer">
          <div className="Card_image">
            <img alt="" src={src} />
          </div>
        </div>
        <div className="Card_details">
          Ut placet, inquam tum dicere exorsus est laborum et via procedat
          oratio quaerimus igitur, quid et caritatem, quae sine causa? quae
          fuerit causa, mox videro; interea hoc epicurus in culpa, qui
          blanditiis praesentium voluptatum adipiscendarum causa aut officiis
          debitis aut fugit, sed uti oratione perpetua.
        </div>
      </div>
    </React.Fragment>
  );
};
