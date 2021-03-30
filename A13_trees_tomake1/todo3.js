// To make 1
"use strict";

// Let's build a basic binary search tree. These challenges begin with the following reference definitions:

class BTNode {
    constructor(value) {
        this.val = value;
        this.count = 1;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // BST: Add
    // Creates an add(val) method on the BST object to add a new value to the tree. 
    // This involves creating a BTNode with this value and connecting it to the appropriate place in 
    // the tree. Unless otherwise specified, BSHs can contain duplicate values.

    // BST: contains
    // Creates a contains(val) method in BST that returns whether the tree contains a particular value. 
    // Take advantage of the BST structure to make this a much faster operation than SList.contains() would be.

    // BST: min
    // Creates a min() method in the BST class that returns the smallest value found in BST.

    // BST: max
    // Creates a BST max() method that returns the largest value contained in the binary search tree.

    // BST: size
    // Writes a size() method that returns the number of nodes (values) contained in the tree.

    // BST: it's empty
    // Creates an isEmpty() method to return if the BST is empty (if it does not contain values).
}

