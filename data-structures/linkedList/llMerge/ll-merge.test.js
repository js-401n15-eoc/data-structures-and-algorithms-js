'use strict';
const { LinkedList, Node } = require('../linked-list.js');
const mergeLists = require('./ll-merge.js');

describe('mergeLists', () => {
    let ll1 = new LinkedList();
    let ll2 = new LinkedList();

    beforeEach(() => {
        ll1 = new LinkedList();
        ll1 = new LinkedList();
    });

    it('can merge 2 linked lists with values in both', () => {        
        ll1.insert(5);
        ll1.insert(3);
        ll1.insert(1);

        ll2.insert(6);
        ll2.insert(4);
        ll2.insert(2);

        const mergeRes = mergeLists(ll1, ll2);

        expect(mergeRes.head.value).toEqual(1);
        expect(mergeRes.head.next.value).toEqual(2);
        expect(mergeRes.head.next.next.value).toEqual(3);
        expect(mergeRes.head.next.next.next.value).toEqual(4);
        expect(mergeRes.head.next.next.next.next.value).toEqual(5);
        expect(mergeRes.head.next.next.next.next.next.value).toEqual(6);
    });
});