---
title: "Sorting algorithms"
tags: ["javascript"]
published: true
date: "2019-10-10"
---

A sorting algorithm is used to rearrange a given array or list elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of element in the respective data structure.

## Bubble sort

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

## Quick sort

Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.

- Always pick first element as pivot.
- Always pick last element as pivot (implemented below)
- Pick a random element as pivot.
- Pick median as pivot.

## Merge sort

Like QuickSort, Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves.

Choosing a Sorting Algorithm
To choose a sorting algorithm for a particular problem, consider the running time, space complexity, and the expected format of the input list.

| Algorithm      | Best-case  | Worst-case | Average-case | Space complexity  |
| -------------- | ---------- | ---------- | ------------ | ----------------- |
| Merge Sort     | O(n log n) | O(n log n) | O(n log n)   | O(n)              |
| Insertion Sort | O(n)       | O(n2)      | O(n2)        | O(1)              |
| Bubble Sort    | O(n)       | O(n2)      | O(n2)        | O(1)              |
| Quicksort      | O(n log n) | O(n2)      | O(n logn)    | log n best, n avg |
| Heapsort       | O(n log n) | O(n log n) | O(n log n)   | O(1)              |
| Counting Sort  | O(k + n)   | O(k + n)   | O(k + n)     | O(k + n)          |

Table from [Brilliant](https://brilliant.org/wiki/sorting-algorithms/)

JS built-in sort method

## Resources

[Computer Science Fundamentals](https://brilliant.org/courses/computer-science-essentials/)
[Sorting algorithms Cheat Sheet](https://www.interviewcake.com/sorting-algorithm-cheat-sheet)
