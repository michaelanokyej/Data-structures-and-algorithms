// 1. Counting Sheep 
const countingSheep = (num) => {
  if(num === 0){
    console.log("All sheep jumped over the fence");
    return;
  }

  console.log("Another sheep jumps over the fence");
  countingSheep(num -1);
}

// 2. Power Calculator 
const powerCalculator = (base, exponent) => {
  if(exponent < 1){
    console.log("exponent should be >= 0")
    return 1;
  }
  exponent--;
  return base * powerCalculator(base, exponent);

}

// 3. Reverse String 

const reverseString = (str) => {
  // str.length === 0 ? "" : (const reversed = str.split(""))

  if(str.length === 0){
    return "";
  }
  // const arrStr = str.reversed().join("")
  // const arrStr = [str[0]];
  // arrStr.push(str[0])
  return reverseString(str.slice(1)) + str[0];
}