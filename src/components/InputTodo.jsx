const InputTodo = ({ name, value, onChange, children }) => {
  return (
    <div className="flex w-full items-center justify-center gap-x-3">
      <input
        name={name}
        value={value}
        onChange={onChange}
        type="text"
        placeholder="What to do"
        className="  h-10 border-2 border-gray-400 rounded p-2 md:p-3 w-5/6 "
      />
      {children}
    </div>
  );
};

export default InputTodo;
