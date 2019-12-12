console.log('Hello World !')

let title= document.querySelector('h1')
console.log(title)

console.log(title.innerHTML)

title.innerHTML = 'Ceci est le titre modifié'

title.setAttribute('data-info','Test')

title.classList.add('red')

title.classList.toggle('isVisible')

title.addEventListener(
  'click',
  function(){
    title.classList.toggle('isVisible')
  }
)


// Math.random() => genere un nombre aléatoire entre 0 et 1, 1 nnon compris

// Math.floor() => arrondir à l'entier inférieur.

/*
let foo = 'abc'
let a = foo.charAt(0) => a
*/

/*
  Générer des couleurs aléatoires
*/
let paragraphs = document.querySelectorAll("p")

for(let i=0; i< paragraphs.length;i++)
{
  let color = generateColor()
  paragraphs[i].style.backgroundColor=color

  paragraphs[i].addEventListener(
    'click',
    function(){
      let color = generateColor()
      paragraphs[i].style.backgroundColor=color
    }
  )

}


function generateColor()
{
  let color='#'
  const hexa='0123456789ABCDEF'

  for(let j=0; j<6;j++)
  {
    let rand = Math.floor(Math.random()*hexa.length)
    color += hexa.charAt(rand)
  }
  return color;
}
/*
    Créer une image dans le DOM

*/

const logo = document.createElement("img")
logo.setAttribute("src","images/logo.png")
logo.setAttribute("alt","Logo de mon site")
const header = document.querySelector("article")
header.appendChild(logo)
