console.log('Hello World !')

let title= document.querySelector('h1')
console.log(title)

console.log(title.innerHTML)

title.innerHTML = 'Ceci est le titre modifié'

title.setAttribute('data-info','Test')

title.classList.add('red')

title.classList.toggle('isVisible')


// Math.random() => genere un nombre aléatoire entre 0 et 1, 1 nnon compris

// Math.floor() => arrondir à l'entier inférieur.

/*
let foo = 'abc'
let a = foo.charAt(0) => a
*/
