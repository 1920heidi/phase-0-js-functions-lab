## Task 
You are working as a junior developer at a company that builds tools for managing personal budgets. Your task is to create a set of basic functions to perform common calculations related to budgeting. This lab will help you practice defining and using functions in JavaScript. 


## Summary of index.js
This is app can get amount after tax, covert uppercase to lower case, find the maximum value, find a palindrome word and calculate discount price.

## Functions Implemented

### 1. `calculateTax(amount)`
Implemented calculate tax of 10% on any amount.
- **Parameters:** `amount` (number) - The base amount to calculate tax for
- **Returns:** Tax value (10% of the input amount)

### 2. `convertToUpperCase(text)`
Implemented convert uppercase letters.
- **Parameters:** `text` (string) - The text to convert
- **Returns:** Uppercase version of the input string
- `convertToUpperCase("heidi")` returns `"HEIDI"`

### 3. `findMaximum(num1, num2)`
Implemented the find Max number and it returns the larger of two numbers.
- **Parameters:** `num1` (number), `num2` (number) - Two numbers to compare
- **Returns:** The larger number
- `findMaximum(8, 27)` returns `27`

### 4. `isPalindrome(word)`
Checks if a given word reads the same forwards and backwards (case-insensitive).
- **Parameters:** `word` (string) - The word to check
- **Returns:** `true` if palindrome, `false` otherwise
- `isPalindrome("heidi")` returns `true`

### 5. `calculateDiscountedPrice(originalPrice, discountPercentage)`
Implemented calculateDiscount which calculates the final price after applying a percentage discount.
- **Parameters:** `originalPrice` (number), `discountPercentage` (number)
- **Returns:** Price after discount is applied
- `calculateDiscountedPrice(200, 20)` returns `180`

## Output on Terminal

johntemba@MacBook-Air phase-0-js-functions-lab % node index.js

1. calculateTax Function:
   calculateTax(200) = 20
   calculateTax(250) = 25

2. convertToUpperCase Function:
   convertToUpperCase("heidi") = "HEIDI"
   convertToUpperCase("Module 1") = "MODULE 1"

3. findMaximum Function:
   findMaximum(69, 8) = 69
   findMaximum(-20, 5) = 5

4. isPalindrome Function:
   isPalindrome("BMW X6") = false
   isPalindrome("Premio") = false

5. calculateDiscountedPrice Function:
   calculateDiscountedPrice(400, 20) = $320
   calculateDiscountedPrice(70, 10) = $63

```
```

## Test 

Run node index.js on terminal to get output.
Do an npm install.
Then npm test to see if it passes all tests.

## Repository

Original repository: https://github.com/1920heidi/phase-0-js-functions-lab
