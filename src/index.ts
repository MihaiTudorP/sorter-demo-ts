import {Sorter} from './classes/Sorter';
import {NumbersCollection} from './classes/NumbersCollection';
import {CharacterCollection} from './classes/CharacterCollection';
import {LinkedList} from './classes/LinkedList';

const numbers = new NumbersCollection([20, 10, 3, -5, 7]);
let sorter = new Sorter(numbers);
sorter.sort();
console.log(sorter.collection);
const string = new CharacterCollection('The quick brown fox');
sorter = new Sorter(string);
sorter.sort();
console.log(sorter.collection);
const numberList = new LinkedList();
numberList.add(3);
numberList.add(20);
numberList.add(-5);
numberList.add(-3);
numberList.add(7);
sorter = new Sorter(numberList);
sorter.sort();
if (sorter.collection instanceof LinkedList){
    let node = sorter.collection.head;
    while(node){
        console.log(node.element);
        node = node.next;
    }
}