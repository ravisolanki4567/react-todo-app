const Button = ({ children, btnClasses, type, onClick }) => {
  let className = `btn kg-button ${btnClasses}`;
  let btnType = type ? type : "button";

  return (
    <button type={btnType} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
