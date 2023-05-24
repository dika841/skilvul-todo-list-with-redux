const Button = ({ onClick, name }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#6558F5] text-white p-2 h-10 rounded font-semibold w-1/6 text-sm text-center"
    >
      {name}
    </button>
  );
};

export default Button;
