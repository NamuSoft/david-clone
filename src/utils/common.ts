export function divideArray<T>(arr: T[]): [T[], T[]] {
  // Calculate the middle index
  const middleIndex = Math.ceil(arr.length / 2);

  // Divide the array into two halves
  const firstHalf: T[] = arr.slice(0, middleIndex);
  const secondHalf: T[] = arr.slice(middleIndex);

  return [firstHalf, secondHalf];
}


export function fomartTitle(string: string): string {
  if (typeof string !== "string") return "";

  // Replace underscores with spaces
  const stringWithSpaces = string.replace(/_/g, " ");

  // Capitalize the first letter of each word
  return stringWithSpaces.replace(/\b\w/g, (char) => char.toUpperCase());
}
