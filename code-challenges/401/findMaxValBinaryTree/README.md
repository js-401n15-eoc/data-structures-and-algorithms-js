# Find Maximum Value Binary Tree

Find the Maximum Value in a Binary Tree

## Challenge

Write an instance method called find-maximum-value. Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

Input:
![binary tree](../../../assets/binary-tree.png "binary tree")

Output: `11`

## Approach & Efficiency

### Algorithm

1. create an outer method with no input parameters
2. create helper recursive method taking in a node
3. evaluate if node exists and then return Math.max of node val and the Math.max of recursive calls to left and right nodes

### Big O:

- Time: O(n)
- Space: O(n)

## Solution

![find max val binary tree](../../../assets/find-max-val-binary-tree.jpg "find max val binary tree")
