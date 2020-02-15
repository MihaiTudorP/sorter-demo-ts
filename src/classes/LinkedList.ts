import {Collection} from '../interfaces/Collection';
import {LinkedListNode} from './LinkedListNode';

export class LinkedList implements Collection{
    head: LinkedListNode|null = null;

    add(data: number): void{
        const node = new LinkedListNode(data);
        if (!this.head) this.head = node;
        else {
            let tail = this.head;
            while(tail.next){
                tail = tail.next;
            }
            tail.next = node;
        }
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) {
            throw new Error('The list is empty!');
        }
        return this.at(leftIndex).element > this.at(rightIndex).element;
    }

    length(): number {
        let tail = this.head;
        if (!tail) return 0;
        else{
            let nodes = 0;
            while(tail.next){
                tail = tail.next;
                nodes++;
            }
            return nodes;
        }
    }

    at(index: number): LinkedListNode{
        const INDEX_OUT_OF_BOUNDS = 'Index out of bounds!';
        if (!this.head || index >= this.length()) throw new Error(INDEX_OUT_OF_BOUNDS);
        let node: LinkedListNode|null = this.head;
        let position = 0;
        while (node){
            if (position === index){
                return node;
            }
            position++;
            node = node.next;
        }
        throw new Error(INDEX_OUT_OF_BOUNDS)
    }

    swap(leftIndex: number, rightIndex: number): void {
        const temp = this.at(leftIndex).element;
        this.at(leftIndex).element = this.at(rightIndex).element;
        this.at(rightIndex).element = temp;
    }

}