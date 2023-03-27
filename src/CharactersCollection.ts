import { Sorter } from './SorterInstance';

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  isGreater(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swapIndexes(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split('');

    [characters[leftIndex], characters[rightIndex]] = [
      characters[rightIndex],
      characters[leftIndex],
    ];

    this.data = characters.join('');
  }
}
