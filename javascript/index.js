const $teclado = document.querySelector('#teclado')
const $visor = document.querySelector('.visor')

// quando usuario tecla nos digitos
function insertTeclas(e) {
    const tecla = e.target.id
    $visor.innerHTML += tecla

    const result = somar(1, 2, 3)

    console.log(`result`, result)
    console.log(`tecla`, tecla)
}
$teclado.addEventListener( 'click', insertTeclas )

console.log(`[index.js]: comecando...`)