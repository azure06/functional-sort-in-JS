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
  const sort = ([pivot, ...tail]) => {
    const [left, right] = tail.reduce(
      ([left, right], value) => {
        return value < pivot
          ? [[...left, value], right]
          : [left, [value, ...right]];
      },
      [[], []],
    );
    const l = left.length >= 2 ? sort(left) : [...left];
    const r = right.length >= 2 ? sort(right) : [...right];

    return [...l, pivot, ...r];
  };

  return sort(values);
};

export default {
  mergeSort,
  quickSort,
};
