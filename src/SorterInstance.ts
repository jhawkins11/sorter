import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

interface Sortable {
  length: number;
  isGreater(leftIndex: number, rightIndex: number): boolean;
  swapIndexes(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(
    public collection: NumbersCollection | CharactersCollection | LinkedList
  ) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.isGreater(j, j + 1)) {
          this.collection.swapIndexes(j, j + 1);
        }
      }
    }
  }
}
