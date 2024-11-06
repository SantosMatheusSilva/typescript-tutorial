import { Invoice } from './classes/Invoices.js'
import { Payment } from './classes/Payment.js';
import { HasFortmatter } from './Interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';


// const form = document.querySelector('form')!; // TS knows and identify all the html tags and gives all the possible sets of methods useble for them 
const form = document.querySelector('.new-item-form') as HTMLFormElement; // in this case the query is made by the class, and TS can not identify which element/tag the class belong to
                                                                          // Type Casting determines the type of Element; as => determines its type/value never gonna be null.
//console.log(form.children);      

// inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


// List templateinstance

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];

    let doc: HasFortmatter;

    if (type.value === 'invoice') {
        doc = new Invoice(...values)
    } else {
        doc = new Payment(...values)
    }
    list.render(doc, type.value, 'end')
})
 
// Generics 

const addUID  = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid}
}

//let docOne = addUID({name: 'matheus', age: 30});
//console.log(docOne.age);


// Enums -> associate indexes to an expecific thing.

enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON};

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: {Title: 'name of the wind'}
}

const docTwo: Resource<object> = {
    uid: 2,
    resourceType: ResourceType.AUTHOR,
    data: {name: 'yoshi'}
}

console.log(docOne, docTwo);

// Tuple

let arr = ['ryu', 25, true];
arr[0] = false;

let tup: [string, number, boolean] = ['Ryu', 25, true];



/* const invOne = new Invoice('mario', 'work on web site', 250);
const invTwo = new Invoice('luigi', 'work on web site', 300);

//console.log(invOne, invTwo);

let invoices : Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invOne.client = 'Yoshi';

console.log(invoices);

// testing modules updates 
console.log(invOne.client);

// Interfaces 
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
    skill: string[]
}

const me: IsPerson = {
    name: ' matheus',
    age: 30,
    speak(text): void {
        console.log(text);
    },
    spend(amount): number {
        console.log('I spent', amount);
        return amount
    },
    skill: []
}

console.log(me);

let someone: IsPerson;

const greetPerson = (person: IsPerson) =>{
    console.log('hello', person.name);
}

greetPerson(me);

let docOne: HasFortmatter; 
let docTwo: HasFortmatter;

docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'plumbing work', 200);


let docs: HasFortmatter[] = []; // Creating an array using interfaces. This array will only accpet objects that implements especifications inside the interface. In this case HAsFormatter.
docs.push(docOne);
docs.push(docTwo);

console.log(docs) */