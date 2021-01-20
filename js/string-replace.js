let str = "askjhaskhd-asjdkhaksdj-sajkdhaskd sakjdhaksjd askjdh-askjdh";
let str1 = str.replace(/[a-z]+(-[a-z]+)*/gi, "d");

console.log(str);
console.log(str1);
