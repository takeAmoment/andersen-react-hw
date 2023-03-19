const Button = ({ buttonType, classname, disabled, text, onClick }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={buttonType} className={classname} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
