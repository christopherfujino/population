// TODO: implement?
export const seed = seed => null;

const random = () => Math.random();

export const check = n => random() > n;

// return random integer between 0 and n - 1
export const get = (n) => n !== undefined
  ? Math.floor(random() * n)
  : random();

// not functional, but fast
export const getNormal = (max) => {
  let num = 0;
  const ITERATIONS = 4;

  for (let i=0; i< ITERATIONS; i++) num += random() * max;
  return Math.floor(num / ITERATIONS);
};

export default {
  check,
  get,
  getNormal
};
