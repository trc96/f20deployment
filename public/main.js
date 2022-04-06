console.log('JS Connected')

const div = document.querySelector('div')

const presentAlert = () => {
    alert(`I said I'm working on it...what did you expect to happen?`)
    return
}

div.addEventListener('submit', presentAlert)