const createMaskForPhone = (value) => {
  const val = value.replace(/\D/g, '');
  const nums = val.split('');
  const format = `${nums[0] ? nums[0] : ''}${nums[1] ? `-${nums[1]}` : ''}${
    nums[2] ? nums[2] : ''
  }${nums[3] ? nums[3] : ''}${nums[4] ? nums[4] : ''}${nums[5] ? `-${nums[5]}` : ''}${
    nums[6] ? nums[6] : ''
  }${nums[7] ? `-${nums[7]}` : ''}${nums[8] ? nums[8] : ''}`;
  return format;
};
export default createMaskForPhone;
