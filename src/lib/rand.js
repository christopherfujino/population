// TODO: implement?
const seed = seed => false;

const random = () => Math.random();

const get = (int) => {
  return int !== undefined
    ? Math.floor(random() * int)
    : random();
};

// not functional, but fast
const getNormal = (max) => {
  let num = 0;
  const ITERATIONS = 4;

  for (let i=0; i< ITERATIONS; i++) num += random() * max;
  return Math.floor(num / ITERATIONS);
}

export default {get, getNormal, seed};
