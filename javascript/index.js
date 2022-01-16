import { somar } from "./functions"

const $teclado = document.querySelector('#teclado')
const $actions = document.querySelector('#actions')
const $visor = document.querySelector('.visor')

function insertTeclas(e) {
    const tecla = e.target.id
    $visor.innerHTML += tecla

    console.log(tecla)
}

function getAction(e) {
    console.log('[getAction]: ' ,e.target)

    somar( 1, 2, 3 )
}

$teclado.addEventListener( 'click', insertTeclas )

$actions.addEventListener( 'click', getAction )

console.log(`[index.js]: comecando...`)