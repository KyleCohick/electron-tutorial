const information = document.getElementById('info')
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const func = async () => {
  const response = await window.versions.ping()
  const responseElement = document.getElementById('response')
  console.log(response) // prints out 'pong'
  responseElement.innerText = response
}

func()