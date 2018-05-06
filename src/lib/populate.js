const validateCount = count => count >= 1 && Math.floor(count) === count;

const isUnique = existingHash => (
  seedName => (
    typeof existingHash[seedName] === "undefined"
  )
);

const lastCharacter = str => str[str.length - 1];

const incrementName = name => {
  const count = parseInt(lastCharacter(name), 10);
  return (isNaN(count)
    ? `${name} 1`
    : name.slice(0, name.length - 1) + (count + 1)
  );
};

const uniqueify = existingHash => (
  seedName => (
    isUnique(existingHash)(seedName)
      ? seedName
      : uniqueify(existingHash)(incrementName(seedName))
  )
);

const sample = arr => arr[Math.floor(Math.random() * arr.length)];

const generateRandomName = () => {
  const prefixes = ["Mee", "Moo"];
  const suffixes = ["", "pea", "poo", "pette", "ple"];
  return sample(prefixes) + sample(suffixes) + (Math.random() > 0.5
    ? "s"
    : ""
  );
};

const generateUniqueName = existingHash => (
  seedName => (seedName || "") && seedName.length > 0
    ? uniqueify(existingHash)(seedName)
    : generateUniqueName(existingHash)(generateRandomName())
);

const populate = count => {
  if (!validateCount(count)) return {};
  const population = {};
  let existingHash = {};
  for (let i = 0; i < count; i++) {
    const name = generateUniqueName(existingHash)();
    existingHash = {
      ...existingHash,
      [name]: true
    };
    population[name] = "boo!";
  }
  return population;
};

export {
  incrementName,
  lastCharacter,
  populate,
  uniqueify
};
