const buttonsEl = document.querySelectorAll('.botao-expandir-retrair')
buttonsEl.forEach(buttonEl => {
    buttonEl.addEventListener('click', evt => {
        const currentTargetButton = evt.currentTarget
        const parentParagraph = currentTargetButton.parentNode
        parentParagraph.classList.toggle('expandido')
    })
})