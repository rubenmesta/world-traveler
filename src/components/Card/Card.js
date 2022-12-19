import "./card.scss";

export const Card = ({
  destination,
  src,
  alt,
  className,
  eyebrow,
  city,
  date,
  description,
  flip = false,
}) => {
  // const [buttonText,setButtonText] = useState('Save');

  const destinationColor = destination === "Domestic" ? "#32C5FF" : "#F7B500";
  const badgeText = destination === "Domestic" ? "Domestic" : "International";

  return (
    <div className={["Card", className].join(" ")}>
      <div
        className="Card_badge"
        // style={{
        //   left: flip ? "auto" : 0,
        //   right: flip ? 0 : null,
        // }}
      >
        <span
          style={{
            background: destinationColor,
            // left: flip ? "auto" : -5,
            // right: flip ? -5 : null,
          }}
          className="Card_badge__accentColor"
        ></span>
        <span>{badgeText}</span>
      </div>
      <div className="Card_imageContainer">
        <div
          role="img"
          aria-label={alt}
          title={alt}
          className="Card_imageContainer__image"
          style={{
            background: `url(${src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* <img alt={alt} src={src} /> */}
        </div>
      </div>
      <div className="Card_details">
        <h3 className="Card_details__eyebrow">{eyebrow}</h3>
        <h2 className="Card_details__city">{city} </h2>
        <span className="Card_details__date">{date} </span>
        <p className="Card_details__description">{description}</p>
        {/* <button
          className="Card_details__button"
          style={{ background: destinationColor }}
        >
          Learn More
        </button> */}
      </div>
    </div>
  );
};
