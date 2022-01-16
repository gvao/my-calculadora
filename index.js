const $teclas = document.querySelector('#teclas')

function insertTeclas(e) {
    console.log(e.target)
}

$teclas.addEventListener( 'click', insertTeclas )