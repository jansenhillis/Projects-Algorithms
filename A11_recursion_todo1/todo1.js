"use strict";

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // Add Front
    // Write a method that accepts a value and create a new node, assign it to the list head, and 
    // return a pointer to the new head node.

    addFront(value) {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this; // chaining
    }

    // Remove Front
    // Write a method to remove the head node and return the new list head node. If the list is empty, return null.
    removeFront() {
        if (this.head) {
            this.head = this.head.next;
            return this.head;
        }
        return null;
    }

    // Front
    // Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    getFrontVal() {
        if (this.head) {
            return this.head.value;
        }
        return null;
    }

    // Contains
    // Add a method contains(value) to your SLL class, which is given a value as a parameter.  
    // Return a boolean (true/false); true, if the list possesses a node that contains the provided value.
    contains(value) {
        if (this.head) {
            var runner = this.head;
            while (runner) {
                if (runner.value === value) {
                    return true;
                }
                runner = runner.next;
            }
            return false;
        }
        return null;
    }

    // Length
    // Create a new SLL method length() that returns number of nodes in that list.
    length() {
        var count = 0;

        if (this.head) {
            var runner = this.head;
            while (runner) {
                count++;
                runner = runner.next;
            }
        }

        return count;
    }

    display() {
        if (this.head) {
            var nodeVals = "";
            var runner = this.head;
            while (runner) {
                nodeVals += runner.value + ", ";
                runner = runner.next;
            }
            nodeVals += null;
            return nodeVals;
        }
        return null;
    }

    // 
    min() {
        if (this.head) {
            var minimum = this.head.value;
            var runner = this.head.next;

            while (runner) {   
                if (minimum > runner.value) {
                    minimum = runner.value;
                }
                runner = runner.next;
            }
            return minimum;
        }
        return null;
    }
    
    max() {
        if (this.head) {
            var maximum = this.head.value;
            var runner = this.head.next;

            while (runner) {   
                if (maximum < runner.value) {
                    maximum = runner.value;
                }
                runner = runner.next;
            }
            return maximum;

        }
        return null;
    }

    avg() {
        if (this.head) {
            var total = this.head.value;
            var count = 1;
            var runner = this.head.next;

            while (runner) {
                total += runner.value;
                count++;
                runner = runner.next;
            }
            
            return total / count ;

        }
        return null;
    }
}


