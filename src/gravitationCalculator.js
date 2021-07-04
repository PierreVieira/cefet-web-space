let constEl = document.querySelector('#constante')
let mass1El = document.querySelector('#massa1')
let mass2El = document.querySelector('#massa2')
let distanceEl = document.querySelector('#distancia')
let resultEl = document.querySelector('#resultado')

function _valid(value) {
    return value > 0;
}

function _validAttributes(m1, m2, d) {
    return _valid(m1) && _valid(m2) && _valid(d)
}

function _showInvalidAttributes(m1, m2, d) {
    let invalidAttributesMessage = ''
    if (!_valid(m1)) {
        invalidAttributesMessage += 'O valor da massa 1 deve ser maior que 0\n'
    }
    if (!_valid(m2)) {
        invalidAttributesMessage += 'O valor da massa 2 deve ser maior que 0\n'
    }
    if (!_valid(d)) {
        invalidAttributesMessage += 'O valor da distância entre os corpos deve ser maior que 0'
    }
    alert(invalidAttributesMessage)
}

function _setResult(g, m1, m2, d) {
    let forceGravitation = (g * m1 * m2) / (d ** 2)
    resultEl.value = forceGravitation.toFixed(2)
}

function forceGravitationResult() {
    let g = Number(constEl.getAttribute('value'))
    let m1 = Number(mass1El.value)
    let m2 = Number(mass2El.value)
    let d = Number(distanceEl.value)
    if (!_validAttributes(m1, m2, d)) {
        _showInvalidAttributes(m1, m2, d)
    } else {
        _setResult(g, m1, m2, d);
    }
}