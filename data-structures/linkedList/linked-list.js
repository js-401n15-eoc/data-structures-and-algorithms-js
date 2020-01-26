'use strict';

const Node = require('./node.js');

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    includes(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) { return true; }
            current = current.next;
        }
        return false;
    }

    toString() {
        let res = '';
        let current = this.head;
        while (current !== null) {
            res += `${current.value} -> `;
            current = current.next;
        }
        return res + 'NULL';
    }
}

module.exports = LinkedList;