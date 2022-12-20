import "./card.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import { CallToActionButton } from "../CallToActionButton";

export const Card = ({ destination, image, details, className }) => {
  const destinationColor = destination === "Domestic" ? "#32C5FF" : "#F7B500";
  const badgeText = destination === "Domestic" ? "Domestic" : "International";
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const buttonStyle = {
    backgroundColor: isHover
      ? "var(--color_background__white)"
      : destinationColor,
    border: isHover
      ? "2px solid var(--color_font__dark)"
      : `2px solid ${destinationColor}`,
  };

  const handleClick = (e) => {
    e.preventDefault();
    alert(`You're going to ${details.city}!`);
  };

  return (
    <div className={["Card", className].join(" ")}>
      <div className="Card_badge">
        <span
          style={{ background: destinationColor }}
          className="Card_badge__accentColor"
        ></span>
        <span>{badgeText}</span>
      </div>
      <div className="Card_imageContainer">
        <div
          //   role="img"
          //   aria-labelledby={image.ariaLabelBy}
          className="Card_imageContainer__image"
          //   style={{
          //     backgroundImage: `url(${image.src})`,
          //   }}
        >
          <img alt={image.alt} src={image.src} />
        </div>
      </div>
      <div className="Card_details">
        {details.eyebrow && (
          <span className="Card_details__eyebrow">{details.eyebrow}</span>
        )}
        {details.city && (
          <h2 className="Card_details__city">{details.city} </h2>
        )}
        {details.date && (
          <span className="Card_details__date">{details.date} </span>
        )}
        {details.description && (
          <p className="Card_details__description">{details.description}</p>
        )}
        {details.buttonText && (
          <CallToActionButton
            onClick={handleClick}
            className="Card_details__button"
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {details.buttonText}
          </CallToActionButton>
        )}
      </div>
    </div>
  );
};

Card.defaultProps = {
  destination: PropTypes.string,
  image: {
    src: PropTypes.string,
    alt: PropTypes.string,
  },
  details: {
    eyebrow: PropTypes.string,
    city: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
  },
  className: PropTypes.string,
};
