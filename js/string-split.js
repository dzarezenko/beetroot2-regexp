let str = "text1|text2;text3,text4:text5";
let result = str.split(/[\|;,:]/);

console.log(result);
console.log(result.join("|"));
