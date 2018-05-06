const validateCount = count => count >= 1 && Math.floor(count) === count;

const generateUniqueName = existingHash => seedName => seedName.length > 0 ?  : generateUniqueName(generateRandomName())

const populate = count => {
  if (!validateCount(count)) return {};
  const population = {};
  for (let i = 0; i < count; i++) {
    population[i] = "Person";
  }
  return population;
};

export default populate;
