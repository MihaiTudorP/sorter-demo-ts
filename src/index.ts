import {NumbersCollection} from './classes/NumbersCollection';
import {CharacterCollection} from './classes/CharacterCollection';
import {LinkedList} from './classes/LinkedList';

const numbers = new NumbersCollection([20, 10, 3, -5, 7]);
numbers.sort();
console.log(numbers.data);
const string = new CharacterCollection('The quick brown fox');
string.sort();
console.log(string.data);
const numberList = new LinkedList();
numberList.add(3);
numberList.add(20);
numberList.add(-5);
numberList.add(-3);
numberList.add(7);
numberList.sort();
let node = numberList.head;
while (node) {
    console.log(node.element);
    node = node.next;
}