// Function 1: calculateTax
function calculateTax(amount) 
{
  return amount * 10/100;
}

// Function 2: convertToUpperCase
function convertToUpperCase(text) 
{
  return text.toUpperCase();
}

// Function 3: findMaximum
function findMaximum(num1, num2) 
{
  return Math.max(num1, num2);
}

// Function 4: isPalindrome
function isPalindrome(word) 
{
  const cleanWord = word.toLowerCase();
  const reversed = cleanWord.split('').reverse().join('');
  return cleanWord === reversed;
}

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) 
{
  const discount = (discountPercentage / 100) * originalPrice;
  return originalPrice - discount;
}

// Example Usage
console.log("Tax:", calculateTax(100)); // 10
console.log("Uppercase:", convertToUpperCase("hello")); // HELLO
console.log("Maximum:", findMaximum(5, 10)); // 10
console.log("Is Palindrome:", isPalindrome("madam")); // true
console.log("Discounted Price:", calculateDiscountedPrice(100, 20)); // 80

// Test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };