class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const ReverseList = (list1) => {
    // Base cases: if one list is empty, return the other list
    if(list1 == null) return null

    if(list1.next == null) return list1
    let NodeNext = list1.next
    let NewNode = ReverseList(NodeNext)
    NodeNext.next = list1
    list1.next = null

    return NewNode
};

// Helper function to create a linked list from an array
const arrayToLinkedList = (arr) => {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
};
const printLinkedList = (head) => {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.value);
        current = current.next;
    }
    console.log(result.join(" -> "));
};

let list1 = arrayToLinkedList([1, 3, 5, 7]);
let list2 = arrayToLinkedList([2, 4, 6, 8]);

let mergedList = mergeSortedLists(list1, list2);
printLinkedList(mergedList)
