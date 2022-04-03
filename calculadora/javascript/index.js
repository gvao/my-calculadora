const $teclado = document.querySelector('#teclado')
const $visor = document.querySelector('.visor')

// quando usuario tecla nos digitos
function insertTeclas(e) {
    const tecla = e.target.id
    $visor.innerHTML += tecla

    console.log(`visor`, $visor)
    console.log(`typeof visor`, typeof $visor)

}
$teclado.addEventListener( 'click', insertTeclas )



console.log(`[index.js]: comecando...`)

