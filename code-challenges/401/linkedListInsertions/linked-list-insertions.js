'use strict';

const LinkedList = require('../../../data-structures/linkedList/linked-list.js');
const Node = require('../../../data-structures/linkedList/node.js');

class LinkedListInsertions extends LinkedList {
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    insertBefore(value, newValue) {
        if (this.head.value === value) {
            this.insert(newValue);
            return;
        }
        
        const newNode = new Node(newValue);
        let current = this.head;
        while (current.next !== null) {
            if (current.next.value === value) {
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next;
        }
    }

    insertAfter(value, newValue) {
        const newNode = new Node(newValue);
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next;
        }
    }
}

module.exports = LinkedListInsertions;