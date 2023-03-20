const useIndices = (page, amountPerPage, formData) => {
  const firstIndex = page * amountPerPage;
  let lastIndex = firstIndex + (amountPerPage - 1);
  if (lastIndex >= formData.length) {
    lastIndex = formData.length - 1;
  }
  return { firstIndex, lastIndex };
};

export default useIndices;
