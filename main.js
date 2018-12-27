const mergesort = values => {
  const subdivide = ([head, ...tail], accumulator = []) => {
    return head && tail
      ? subdivide(tail, [...accumulator, [head]])
      : head
      ? [...accumulator, [head]]
      : accumulator;
  };

  const merge = ([arr1, arr2, ...tail]) => {
    const sort = (arr1 = [], arr2 = []) => {
      const [head, tail] = arr2.reduce(
        ([head, tail], currentValue) => {
          const sliceArray = (arr, index) => [
            arr.slice(0, index),
            arr.slice(index)
          ];
          const index = tail.findIndex(tailVal => currentValue < tailVal);
          const [left, right] =
            index !== -1 ? sliceArray(tail, index) : [tail, []];
          return [[...head, ...left, currentValue], right];
        },
        [[], arr1]
      );
      return [...head, ...tail];
    };

    return tail.length > 0
      ? [sort(arr1, arr2), ...merge(tail)]
      : [sort(arr1, arr2)];
  };

  const repeat = arr => {
    const mergedArray = merge(arr);
    return mergedArray.length > 1 ? repeat(mergedArray) : mergedArray;
  };

  const [head] = repeat(subdivide(values));
  return head;
};

const quicksort = values => {
  const sort = ([pivot, ...tail]) => {
    const [left, right] = tail.reduce(
      ([left, right], value) => {
        return value < pivot
          ? [[...left, value], right]
          : [left, [value, ...right]];
      },
      [[], []]
    );
    const l = left.length >= 2 ? sort(left) : [...left];
    const r = right.length >= 2 ? sort(right) : [...right];

    return [...l, pivot, ...r];
  };

  return sort(values);
};

// export default {
//   mergeSort: mergesort,
//   quickSort: quicksort
// };
