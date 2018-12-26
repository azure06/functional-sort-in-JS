const mergeSort = values => {
  const subdivide = ([first, second, ...tail], accumulator = []) => {
    return first && second && tail
      ? subdivide(tail, [...accumulator, [first, second]])
      : first && second
      ? [...accumulator, [first, second]]
      : first
      ? [...accumulator, [first]]
      : [];
  };
};

const quickSort = values => {
  const split = ([pivot, ...tail]) => {
    const [left, right] = tail.reduce(
      ([left, right], value) => {
        return value < pivot
          ? [[...left, value], right]
          : [left, [value, ...right]];
      },
      [[], []],
    );
    const l = left.length >= 2 ? split(left) : [...left];
    const r = right.length >= 2 ? split(right) : [...right];

    return [...l, pivot, ...r];
  };

  return split(values);
};
