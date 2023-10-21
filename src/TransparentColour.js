function TransparentColour() {
  const buttonStyle = {
    backgroundImage:
      "linear-gradient(135deg, #a855f780 10%,#0000 0,#0000 50%,#a855f780 0,#a855f780 60%,#0000 0,#0000)",
    backgroundSize: "7.07px 7.07px",
  };
  return (
    <button
      className="w-[75px] h-[30px] rounded border-2"
      style={buttonStyle}
      disabled
    />
  );
}

export default TransparentColour;
