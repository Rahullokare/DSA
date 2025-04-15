function groupWordsByLength(arr) {
  const map = new Map();
  for (let string of arr) {
    if (map.get(string.length)) {
      map.get(string.length).push(string);
    } else {
      map.set(string.length, [string]);
    }
  }
  return map;
}
console.log(groupWordsByLength(["hello", "hi", "gaurav", "My", "Rahul"]));
// output
// Map(3) {
//   5 => [ 'hello', 'Rahul' ],
//   2 => [ 'hi', 'My' ],
//   6 => [ 'gaurav' ]
// }
