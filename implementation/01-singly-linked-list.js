// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list

        // Your code here
        const newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return {head: this.head, length: this.length}
        // Write your hypothesis on the time complexity of this method here
        //Add to head would be O(n) time complexity
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next !== null) {
                // console.log(curr)
                curr = curr.next;
            }
            curr.next = newNode;
        }

        this.length++;
        return {head: this.head, length: this.length}

        // Write your hypothesis on the time complexity of this method here
        //This method is O(n) given the while loop which has an O(n) complexity
    }

    removeFromHead() {
        // Storing this.head to return later
        let prevHead = this.head;

        //Guard against a linked list with no length;
        // console.log("BEFORE: ", this.head)
        if(this.head === null){
            return undefined
        } else {
            //In below case, there is a length of only one
            if(!this.head.next) {
                this.head = null;
            } else {
                //In this case, we can assume that there is a length of at least 2;
                prevHead = this.head;
                this.head = this.head.next;
            }
        }

        this.length--;
        return prevHead;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        let tail = this.head;

        if(this.head === null){
            //in this case, there are no current nodes
            return undefined
        } else {
            if (!this.head.next) {
                //in this case, there is only one node, so the head is also the tail
                this.head = null;
            } else {
                //in this case, there are two or more nodes
                let current = this.head;
                //the double next here is so that we reach exactly one node short of the end
                while(current.next.next){
                    current = current.next;
                }
                //this will set .next of the second to last ele to null, effectively
                //chopping the tail off from any reference
                tail = current.next;
                current.next = null;
            }

            this.length--;
            return tail;
        }

        // Write your hypothesis on the time complexity of this method here
        //This is O(n) because of the while loop which varies depending on LL length
    }

    peekAtHead() {
        // Return the value of head node
        if (!this.head) {
            return undefined;
        }
        return this.head.value;
        // Your code here

        // Write your hypothesis on the time complexity of this method here
        //This is O(1) because it only accesses a value in memory
    }

    print() {
        // Print out the linked list
        if (!this.head){
            return;
        }
        let current = this.head;
        console.log(current.value)
        while(current.next){
            current = current.next;
            console.log(current.value)
        }
        // Write your hypothesis on the time complexity of this method here
        //This is O(n) because of the while loop
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
