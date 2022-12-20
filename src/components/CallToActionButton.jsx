export const CallToActionButton = ({ children, onClick, ...rest }) => {
  return (
    <button onClick={onClick} type="button" {...rest}>
      {children}
    </button>
  );
};
