const $teclas = document.querySelector('#teclas')
const $visor = document.querySelector('.visor')

function insertTeclas(e) {
    const tecla = e.target.id
    console.log(tecla)


}

$teclas.addEventListener( 'click', insertTeclas )