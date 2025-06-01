function findFirstNonRepeatingCharacter(string) {
  const transformString = string.toLowerCase();
  const map = new Map();
  for (let letter of transformString) {
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  }
  for (const [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
}

console.log(findFirstNonRepeatingCharacter("RRRAAhul"));
// h
