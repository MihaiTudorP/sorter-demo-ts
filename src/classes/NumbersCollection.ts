import {Collection} from '../interfaces/Collection';

export class NumbersCollection implements Collection {
    constructor(public data: number[]) {
    }

    length(): number {
        return this.data.length;
    }

    swap(leftIndex: number, rightIndex: number) {
        const temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }
}