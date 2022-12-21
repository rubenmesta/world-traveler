import "./card.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import { CallToActionButton } from "../CallToActionButton";

export const Card = ({ destination, image, details, className }) => {
  const destinationColor = destination === "Domestic" ? "#32C5FF" : "#F7B500";
  const badgeText = destination === "Domestic" ? "Domestic" : "International";

  const { eyebrow, city, date, description, buttonText } = details;
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
    alert(`You're going to ${city}!`);
  };

  return (
    <div className={["card", className].join(" ")}>
      <div className="card_badge">
        <span
          style={{ background: destinationColor }}
          className="card_badge--accentColor"
        ></span>
        <span>{badgeText}</span>
      </div>
      <div className="card_imageContainer">
        <div className="card_image">
          {image && (
            <img
              alt={image.alt}
              src={image.src}
              role="presentation"
              aria-hidden="true"
            />
          )}
        </div>
      </div>
      <div className="card_details">
        <div className="card_headers">
          {city && <h2 className="card_city">{city} </h2>}
          {eyebrow && (
            <span className="card_eyebrow" aria-hidden="false">
              {eyebrow}
            </span>
          )}
        </div>
        {date && <span className="card_date">{date} </span>}
        {description && <p className="card_description">{description}</p>}
        {buttonText && (
          <CallToActionButton
            onClick={handleClick}
            className="card_button"
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {buttonText}
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
