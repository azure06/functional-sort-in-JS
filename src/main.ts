const mergesort = (values: number[]) => {
  const subdivide = (
    [head, ...tail]: number[],
    accumulator: number[][] = []
  ): number[][] => {
    return head !== undefined
      ? subdivide(tail, [...accumulator, [head]])
      : accumulator;
  };

  const merge = ([arr1, arr2, ...tail]: number[][]): number[][] => {
    const sort = (arr1: number[] = [], arr2: number[] = []) => {
      const [head, tail] = arr2.reduce(
        ([head, tail]: number[][], currentValue: number) => {
          const sliceArray = (arr: number[], index: number) => [
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

  const repeatMerge = (arr: number[][]): number[][] => {
    const mergedArray = merge(arr);
    return mergedArray.length > 1 ? repeatMerge(mergedArray) : mergedArray;
  };

  const [head] = repeatMerge(subdivide(values));
  return head;
};

const quicksort = (values: number[]) => {
  const sort = ([pivot, ...tail]: number[]): number[] => {
    const [left, right] = tail.reduce(
      ([left, right]: number[][], value) => {
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

/**
 * Sort an array of natural numbers values
 *
 * @param values List of natural numbers
 * @return Sorted List of natural numbers
 */
const countingsort = (values: number[]): number[] => {
  const indices = values.reduce((accumulator: number[], value: number) => {
    accumulator[value] = (accumulator[value] || 0) + 1;
    return accumulator;
  }, []);

  for (let i = 0; i < indices.length; i++) {
    indices[i] = (indices[i - 1] || 0) + (indices[i] || 0);
  }

  return values.reduce((accumulator: number[], currentValue: number) => {
    const valueIndex = indices[currentValue];
    accumulator[valueIndex] = currentValue;
    indices[currentValue] -= 1;
    return accumulator;
  }, []);
};

export default {
  mergesort,
  quicksort,
  countingsort
};
