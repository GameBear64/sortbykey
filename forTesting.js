function sortByKey(string, key) {
    let cashe = {}, result = ""

    string.split("").forEach(element => {
        cashe[element] ? cashe[element] ++ : cashe[element] = 1
    });

    key.split("").forEach(element => {
        if (!cashe[element]) return;
        for (let i = 0; i < cashe[element]; i++) {
            result += element
        }
    });
    return result
} 

//here is something i did for fun just to flex on you with a 1 line solution
sortByKey2 = (string, key) => string.split("").sort((a, b) => {return key.indexOf(a) > key.indexOf(b) ? 1 : key.indexOf(b) > key.indexOf(a) ? -1 : 0}).filter(word => key.includes(word)).join('')

let s = "ababababababababababababggababbabbabababbababbazzzzzzzmmgb"
let t = "baz"

console.log(sortByKey(s, t))
console.log(sortByKey2(s, t))