export default {
  "arrayShallow": (first, second) => {
    if (first.length !== second.length) return false;
    return first.reduce((isEqual, el, i) => isEqual && el === second[i], true);
  },
  "objectShallow": (first, second) => {
    this.arrayShallow(Object.values(first), Object.values(second));
  }
};
