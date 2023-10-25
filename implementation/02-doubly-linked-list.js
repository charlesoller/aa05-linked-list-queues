// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if(this.length === 0){
            //If the LL was previous empty
            this.head = newNode;
            this.tail = newNode;
        } else {
            //Has length of at least 1;
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
        //This is O(1) because there are only assignments
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const newNode = new DoublyLinkedNode(val);

        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        // Your code here

        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    removeFromHead() {
        // Remove node at head
        let prevHead = this.head;
        if(this.length === 0){
            return undefined;
        } else {
            if(this.length === 1){
                this.head = null;
                this.tail = null;
            } else {
                this.head.next.prev = null;
                this.head = this.head.next;
            }
        }

        this.length--;
        return prevHead.value;
        // Your code here

        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    removeFromTail() {
        // Remove node at tail
        const prevTail = this.tail;
        if(this.length === 0){
            return undefined;
        } else {
            if (this.length === 1){
                this.head = null;
                this.tail = null;
            } else {
                this.tail.prev.next = null;
                this.tail = this.tail.prev;
            }
        }

        this.length--;
        return prevTail.value;
        // Your code here

        // Write your hypothesis on the time complexity of this method here
        //This would be O(1) because we are only assigning and doing logic gates
    }

    peekAtHead() {
        // Return value of head node
        if(this.head){
            return this.head.value;
        }
        // Your code here

        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    peekAtTail() {
        // Return value of tail node
        if(this.tail){
            return this.tail.value;
        }
        // Your code here

        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
