export function divideArray<T>(arr: T[]): [T[], T[]] {
  // Calculate the middle index
  const middleIndex = Math.ceil(arr.length / 2);

  // Divide the array into two halves
  const firstHalf: T[] = arr.slice(0, middleIndex);
  const secondHalf: T[] = arr.slice(middleIndex);

  return [firstHalf, secondHalf];
}
