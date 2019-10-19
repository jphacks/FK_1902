export default (constants, initialValue) => {
  const constantsKeys = Object.keys(constants);

  const options = constantsKeys.map(key => {
    return { label: constants[key], value: key };
  });

  initialValue && options.shift(initialValue);

  return options;
};
