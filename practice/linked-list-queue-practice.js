// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        // if(this.head){
        //     let length = 1;
        //     let current = this.head;
        //     while(current.next){
        //         current = current.next;
        //         length++;
        //     }
        //     return length;
        // }
       //The above is in O(n), to implement this in O(1) I need to add a this.length property

       return this.length;
       //This is O(1) and it was achieved by adding a length property that updates with addToTail
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        if(!this.head){
            return undefined;
        } else {
            let current = this.head;
            let sum = current.value;
            while(current.next){
                current = current.next;
                sum += current.value;
            }
            return sum;
        }


        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }

    averageValue() {
        // Returns the average value of all the nodes
        if(this.length === 0){
            return undefined;
        } else {
            let current = this.head;
            let sum = current.value;
            while(current.next){
                current = current.next;
                sum += current.value;
            }
            return sum / this.length;
        }

        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        if(this.length < n){
            console.log("HIT")
            return undefined;
        } else {
            let current = this.head;
            for(let i = 0; i < n; i++){
                current = current.next;
            }
            return current;
        }

        // Write your hypothesis on the time complexity of this method here
        //O(n) because it depends on input n
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        let middleNode;
        if(this.length % 2 !== 0){
            middleNode = Math.floor(this.length / 2)
        } else {
            middleNode = (this.length / 2) - 1;
        }

        let current = this.head;
        for(let i = 1; i <= middleNode; i++){
            current = current.next;
        }

        return current;

        // Write your hypothesis on the time complexity of this method here
        //O(n), this does not vary in my implementation of single/doubly linked,
        //but would depend on presence of a length property
    }


    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
            // Does the time complexity change? How about space complexity?
        let reversedList = new SinglyLinkedList();
        const newHead = new SinglyLinkedNode(this.head.value)
        reversedList.head = newHead;
        reversedList.length += 1;

        let curr = this.head;
        // console.log("INITIAL: ", reversedList)
        while(curr.next){
            //move fwd one
            curr = curr.next;

            const newNode = new SinglyLinkedNode(curr.value);

            //Basically adding to head
            //Reassigning head to the new node and new nodes next the previous head;
            newNode.next = reversedList.head;
            reversedList.head = newNode;
            reversedList.length++;
            // console.log("IN LOOP: ", reversedList)
        }
        // Your code here
        return reversedList;
        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let prev = null;
        let next = null;
        let current = this.head;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        // Write your hypothesis on the time complexity of this method here
    }

}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Your code here
        let counterCurr = this.head;
        let length = 1;
        while(counterCurr.next){
            counterCurr = counterCurr.next;
            length++;
        }
        // console.log("LENGTH: ", length)

        let middleNode;
        if(length % 2 !== 0){
            middleNode = Math.floor(length / 2)
        } else {
            middleNode = (length / 2) - 1;
        }

        let current = this.head;
        for(let i = 1; i <= middleNode; i++){
            current = current.next;
        }

        return current;
        // Write your hypothesis on the time complexity of this method here
        //This is O(n), though less efficient than the previous because length was calculated within the function
    }

    reverse() {
        // Returns a new reversed version of the linked list

        let reversedList = new SinglyLinkedList();
        const newHead = new SinglyLinkedNode(this.head.value)
        reversedList.head = newHead;
        reversedList.length += 1;

        let curr = this.head;
        while(curr.next){
            curr = curr.next;

            const newNode = new SinglyLinkedNode(curr.value);

            newNode.next = reversedList.head;
            reversedList.head = newNode;
            reversedList.length++;
        }
        return reversedList;

        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        let prev = null;
        let next = null;
        let current = this.head;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;

        // Write your hypothesis on the time complexity of this method here
        //O(n)
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
