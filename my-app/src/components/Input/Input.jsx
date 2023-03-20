export const Input = ({ item, handleChange, value }) => {
  return (
    <input
      type={item.inputType}
      placeholder={item.placeholder}
      name={item.name}
      onChange={handleChange}
      value={value}
    />
  );
};
