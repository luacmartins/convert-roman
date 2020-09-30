function convertToRoman(num) {
   const numArr = num.toString().split('')
   const magnitude = numArr.length
   let result = ''
   const romans = { 1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M', 5000: '' }

   numArr.forEach((num, i) => {
      const currentOrder = Math.pow(10, magnitude - 1 - i)
      if (romans[num * currentOrder]) {
         result = result.concat(romans[num * currentOrder])
      } else {
         result = result.concat(romans[5 * currentOrder].repeat(Math.floor(num / 5)))
         result = result.concat(romans[currentOrder].repeat(num % 5))
      }
   })
   return result
}