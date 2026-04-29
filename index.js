// Function 1: calculateTax
function calculateTax(amount) 
{
  return amount * 10/100;
}
//calculateTax
console.log("1. calculateTax Function:");
console.log(`   calculateTax(200) = ${calculateTax(200)}`);
console.log(`   calculateTax(250) = ${calculateTax(250)}`);
console.log();

// Function 2: convertToUpperCase
function convertToUpperCase(text) 
{
  return text.toUpperCase();
}
//convertToUpperCase
console.log("2. convertToUpperCase Function:");
console.log(`   convertToUpperCase("heidi") = "${convertToUpperCase("heidi")}"`);
console.log(`   convertToUpperCase("Module 1") = "${convertToUpperCase("Module 1")}"`);
console.log();

// Function 3: findMaximum
function findMaximum(num1, num2) 
{
  return Math.max(num1, num2);
}
//findMaximum
console.log("3. findMaximum Function:");
console.log(`   findMaximum(69, 8) = ${findMaximum(69, 8)}`);
console.log(`   findMaximum(-20, 5) = ${findMaximum(-20, 5)}`);
console.log();

// Function 4: isPalindrome
function isPalindrome(word) 
{
  const cleanWord = word.toLowerCase();
  const reversed = cleanWord.split('').reverse().join('');
  return cleanWord === reversed;
}
//isPalindrome
console.log("4. isPalindrome Function:");
console.log(`   isPalindrome("BMW X6") = ${isPalindrome("BMW X6")}`);
console.log(`   isPalindrome("Premio") = ${isPalindrome("Premio")}`);
console.log();

// Function 5: calculateDiscountedPrice
function calculateDiscountedPrice(originalPrice, discountPercentage) 
{
  const discount = (discountPercentage / 100) * originalPrice;
  return originalPrice - discount;
}
//calculateDiscountedPrice 
console.log("5. calculateDiscountedPrice Function:");
console.log(`   calculateDiscountedPrice(400, 20) = $${calculateDiscountedPrice(400, 20)}`);
console.log(`   calculateDiscountedPrice(70, 10) = $${calculateDiscountedPrice(70, 10)}`);
console.log();

// Test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };