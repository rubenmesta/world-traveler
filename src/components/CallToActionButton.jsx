import "./Card/card.scss";
import { Icon } from "./Icon";
export const CallToActionButton = ({
  children,
  onClick,
  className,
  ariaLabel,
  ...rest
}) => {
  return (
    <button onClick={onClick} type="button" className={className} {...rest}>
      {children}
      <Icon ariaLabel={ariaLabel} />
    </button>
  );
};
