import _ from "lodash";

let characters = [
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  ["@", "_", "-", "!", "#", "$", "%", "&"],
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
];

let sporadic = arr => arr[_.random(0, arr.length - 1)];

function produce() {
  let code = "";
  for (let i = 0; i < characters.length; i++) {
    code += sporadic(characters[i])
  }
  return code;
}

export default function safecode(len, systematic = false) {

  let code = "";
  let numOfLoops = Math.floor(len / 4);
  let residue = _.round(len % 4, 1);

  for (let i = 0; i < numOfLoops; i++) {
    code += produce();
  }

  if (residue > 0) {
    code += produce().slice(0, residue);
  }

  return systematic ? code : _.shuffle(code.split("")).join("");
}

/**
 * @todo
 * @impliment
 * --previous
 * --copy to clipboard
 */