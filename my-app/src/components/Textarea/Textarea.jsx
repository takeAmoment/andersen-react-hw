export const Textarea = ({ item, handleChange, value }) => {
  return (
    <textarea
      rows={7}
      placeholder={item.placeholder}
      name={item.name}
      id={item.id}
      onChange={handleChange}
      value={value}
    />
  );
};
