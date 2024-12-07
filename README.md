# JavaScript Loose Typing Bug

This example demonstrates a common issue in JavaScript caused by its loose typing system. When performing arithmetic operations, the + operator behaves differently depending on the data types of the operands. If either operand is a string, the + operator performs string concatenation instead of numerical addition. This can lead to unexpected and incorrect results.

## Bug Description:
The `foo` function attempts to add a number (1) and a string ('2'). Because of loose typing, this leads to string concatenation, resulting in "12".  The `bar` function, however, correctly adds two numbers.

## Solution:
Explicit type checking or conversion before performing arithmetic operations ensures consistent behavior.  Using the `Number()` function converts strings to numbers.