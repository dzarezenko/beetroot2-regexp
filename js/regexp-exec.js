const regex1 = RegExp('(f)(Oo*)', 'gi');
const str1 = 'table football, foosball';
let array1;

while ((array1 = regex1.exec(str1)) !== null) {
  //console.log(array1);
  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);

  let g1 = array[1];
  let g2 = array[2];
  
  let [ , g1, g2] = array;
  // expected output: "Found foo. Next starts at 9."
  // expected output: "Found foo. Next starts at 19."
}
