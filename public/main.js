console.log('JS Connected')

const presentAlert = () => {
    alert(`I said I'm working on it...what did you expect to happen?`)
}

document.querySelector('button').addEventListener('button', presentAlert)