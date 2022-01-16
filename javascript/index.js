const $teclas = document.querySelector('#teclas')
const $actions = document.querySelector('#actions')
const $visor = document.querySelector('.visor')

function insertTeclas(e) {
    const tecla = e.target.id
    $visor.innerHTML += tecla

    console.log($visor)
}

function getAction(e) {
    console.log('[getAction]: ' ,e.target)
}

$teclas.addEventListener( 'click', insertTeclas )

$actions.addEventListener( 'click', getAction )