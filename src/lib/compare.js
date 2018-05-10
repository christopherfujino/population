export default {
  "arrayShallow": (first, second) => {
    if (first.length !== second.length) return false;
    return first.reduce((isEqual, el, i) => isEqual && el === second[i], true);
  },
  "objectShallow": function objectShallow (first, second) {
    return this.arrayShallow(Object.values(first), Object.values(second)) &&
      this.arrayShallow(Object.keys(first), Object.keys(second));
  }
};
