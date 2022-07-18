let num = [5, 8, 2, 9, 3]
num.sort()  //caso queira colocar o 1 na ordem crescente também basta colocar o num.push(1) antes do num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8) 
if (pos == -1){ // indexOf serve p/ procurar valor no array, caso ele n ache normalmente ele retorna -1
  console.log(`O valor não foi encontrado!`)
} else {
  console.log(`O valor está na posição ${pos}`)
}