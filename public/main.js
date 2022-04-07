console.log('JS Connected')

const button = document.querySelector('button')

const presentAlert = () => {
    alert(`I said I'm working on it...what did you expect to happen?`)
    return
}

button.addEventListener('click', presentAlert)

//this is to trigger the rollbar error
const get = () => {
    axios.get('/api/functions')
    .then(res => console.log(res.data))
}

button.addEventListener('click', get)