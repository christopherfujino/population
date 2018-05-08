const isUnique = population => (
  seedName => (
    typeof population[seedName] === "undefined"
  )
);

const lastCharacter = str => str[str.length - 1];

const incrementName = name => {
  const count = parseInt(lastCharacter(name), 10);
  return (isNaN(count)
    ? `${name} 2`
    : name.slice(0, name.length - 1) + (count + 1)
  );
};

const uniqueify = population => (
  seedName => (
    isUnique(population)(seedName)
      ? seedName
      : uniqueify(population)(incrementName(seedName))
  )
);

const sample = arr => arr[Math.floor(Math.random() * arr.length)];

const generateRandomName = () => {
  const prefixes = ["Mee", "Mei", "Moo"];
  const suffixes = ["", "pea", "poo", "pette", "ple"];
  return sample(prefixes) + sample(suffixes) + (Math.random() > 0.5
    ? "s"
    : ""
  );
};

const generateUniqueName = population => (
  seedName => seedName.length > 0
    ? uniqueify(population)(seedName)
    : generateUniqueName(population)(generateRandomName())
);

const populateNTimes = count => population => count === 0
  ? population
  : populateNTimes(count - 1)({
    ...population,
    [generateUniqueName(population)("")]: "Booyakalaka"
  });

const populate = count => populateNTimes(count)({});

export {
  incrementName,
  lastCharacter,
  populate,
  uniqueify
};
