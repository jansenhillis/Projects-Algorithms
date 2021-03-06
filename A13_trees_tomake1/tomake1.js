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
    add(val) {
        var node = new BTNode(val);

        if (this.root) {
            var runner = this.root;
            
            while (runner) {
                if (node.val < runner.val) {
                    console.log(val + " < " + this.root.val)

                    if (runner.left) {
                        runner = runner.left;
                    } else {
                        runner.left = node;
                        runner = null;
                    }
                } else if (node.val > runner.val) {
                    console.log(val + " > " + this.root.val)

                    if (runner.right) {
                        runner = runner.right;
                    } else {
                        runner.right = node;
                        runner = null;
                    }

                } else {
                    this.root.count++;
                    runner = null;
                }
            }
        } else {
            // No root defined. Create one
            this.root = node;
        }
    
        return this; 
    }


    // BST: contains
    // Creates a contains(val) method in BST that returns whether the tree contains a particular value. 
    // Take advantage of the BST structure to make this a much faster operation than SList.contains() would be.
    contains(val) {
        var found = false;
        if (this.root) {
            var runner = this.root;
            
            while (runner) {
                if (val < runner.val) {
                    if (runner.left) {
                        runner = runner.left;
                    } else {
                        runner = null;
                    }
                } else if (val > runner.val) {
                    if (runner.right) {
                        runner = runner.right;
                    } else {
                        runner = null;
                    }
                } else if (val === runner.val) {
                    found = true;
                    runner = null;
                } else { // invalid input that cannot be auto converted by JS
                    runner = null;
                }
            }
        } 

        return found;
    }

    // BST: min
    // Creates a min() method in the BST class that returns the smallest value found in BST.
    min() {
        if (this.root) {
            var runner = this.root;
            var minValue = this.root.val;
            while (runner) {
                if (runner.left) {
                    minValue = runner.left.val;
                    runner = runner.left;
                } else {
                    runner = null;
                }

            }
            return minValue;
        }

        return null;
    }

    // BST: max
    // Creates a BST max() method that returns the largest value contained in the binary search tree.
    max() {
        if (this.root) {
            var runner = this.root;
            var maxValue = this.root.val;
            while (runner) {
                if (runner.right) {
                    maxValue = runner.right.val;
                    runner = runner.right;
                } else {
                    runner = null;
                }

            }
            return maxValue;
        }

        return null;
    }

    // BST: size
    // Writes a size() method that returns the number of nodes (values) contained in the tree.
    size() {
        var stack = [];
        var nodeCount = 0;

        if (this.root) {
            stack.push(this.root);
        
            while (stack.length > 0) {
                var node = stack.pop();
                nodeCount++;
                
                if (node.left) {
                    stack.push(node.left);
                }

                if (node.right) {
                    stack.push(node.right);
                }
            }
        }

        return nodeCount;
    }

    // BST: it's empty
    // Creates an isEmpty() method to return if the BST is empty (if it does not contain values).
    isEmpty() {
        var empty = true;
        if (this.size()) {
            empty = false;
        }
        return empty;
    }
}

