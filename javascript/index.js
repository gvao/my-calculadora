const $teclas = document.querySelector('#teclas')
const $visor = document.querySelector('.visor')

function insertTeclas(e) {
    const tecla = e.target.id
    console.log(tecla)

    $visor.innerHTML += tecla
    console.log($visor)
}

$teclas.addEventListener( 'click', insertTeclas )