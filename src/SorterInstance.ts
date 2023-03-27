import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

interface Sortable {
  length: number;
  isGreater(leftIndex: number, rightIndex: number): boolean;
  swapIndexes(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  abstract length: number;
  abstract isGreater(leftIndex: number, rightIndex: number): boolean;
  abstract swapIndexes(leftIndex: number, rightIndex: number): void;
  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.isGreater(j, j + 1)) {
          this.swapIndexes(j, j + 1);
        }
      }
    }
  }
}
