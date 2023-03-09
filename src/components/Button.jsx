const Button = ({ className, text, icon }) => {
  return (
    <button className={className}>
      <span style={{ fontSize: "1.5rem", marginRight: "20px" }}>{icon}</span>
      <span style={{ marginRight: "30px" }}>{text}</span>
    </button>
  );
};

export default Button;
