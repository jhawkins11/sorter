export class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  isGreater(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swapIndexes(leftIndex: number, rightIndex: number): void {
    [this.data[leftIndex], this.data[rightIndex]] = [
      this.data[rightIndex],
      this.data[leftIndex],
    ];
  }
}
