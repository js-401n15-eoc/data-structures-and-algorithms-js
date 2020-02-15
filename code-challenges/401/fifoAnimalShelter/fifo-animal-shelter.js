'use strict';
const Queue = require('../../../data-structures/stackAndQueue/queue.js');
const Dog = require('./animal-classes/dog.js');
const Cat = require('./animal-classes/cat.js');

class AnimalShelter {
  constructor() {
    this.queue = new Queue();
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    if ((animal instanceof Dog || animal instanceof Cat)) {
      this.queue.enqueue(animal);
      this.rear = animal;
    }
  }
  
  dequeue(pref) {
    let fPref = pref.toLowerCase();
    let frontType = this.front.constructor.name.toLowerCase();

    // handles the preference not being a cat or dog, or existing front
    // animal is the same as front preference
    if (!(fPref === 'cat' || fPref === 'dog') || frontType == fPref)
    {
      console.log(`Dequeueing a ${frontType}`);
      const res = this.queue.dequeue();
      this.front = this.queue.peek();
      return res;
    }

    let oldFront = this.front;

    // handles a single animal and no match
    if (fPref != frontType && this.front == this.rear)
    {
      console.log(`There's only one animal in 
      the shelter and it's not a ${fPref}.`);
      return null;
    }

    while (frontType != fPref)
    {
        Enqueue(Dequeue());
        if (Front == oldFront)
        {
            Console.WriteLine("That animal cannot be found here.");
            return null;
        }
        frontType = Front.GetType().Name.ToLower();
    }

    console.log(`Dequeueing a ${frontType}`);
    const tmp1 = this.queue.dequeue();

    // loop to ensure the shelter is in proper order before returning
    // the desired cat or dog
    while (Front != oldFront)
        Enqueue(Dequeue());

    return tmp1;
  }
}

module.exports = AnimalShelter;