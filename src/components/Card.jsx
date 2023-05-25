const Card = ({ label, children, checked, onChange, className, value }) => {
  return (
    <div className="border-2 border-gray-300 px-3 h-16 w-full flex items-center justify-between">
      <div className="flex gap-x-3">
        <input
          className="w-6 h-6 accent-gray-500 cursor-pointer"
          type="checkbox"
          name="check"
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <h2 className={className}>{label}</h2>
      </div>
      <div className="flex gap-x-3">{children}</div>
    </div>
  );
};

export default Card;
