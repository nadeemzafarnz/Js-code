const marvel_Hero=["nadeem","zafar","ali","Mohammd"]
const dc_Heros=["aaaa","bbbbb","ccddd","dddsdd"]
//marvel_Hero.push(dc_Heros)

//console.log(marvel_Hero);

//const allHeros=marvel_Hero.concat(dc_Heros)
//console.log(allHeros);

const all_Heros=[...marvel_Hero,...dc_Heros]
//console.log(all_Heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_array.flat(2)
console.log(real_another_array);

console.log(Array.isArray("nadeem"));
console.log(Array.from("nadeem"));

console.log(Array.from({name:"nadeem"}));

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));