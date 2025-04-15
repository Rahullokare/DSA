function characterCounter(string) {
  const transformString = string.toLowerCase();
  const map = new Map();
  for (let letter of transformString) {
    // console.log(letter);
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  }
  return map;
}

console.log(characterCounter("MAksjdhfjsdfkiurh"));
