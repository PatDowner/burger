document.getElementById('addBurger').addEventListener('click', event => {
  event.preventDefault()

  axios.post('/api/burgers', {
    name: document.getElementById('burgerName').value,
    devoured: false
  })
    .then(({ data }) => {
      let burgerElem = document.createElement('li')
      burgerElem.className = 'list-group-item'
      burgerElem.id = data.id
      burgerElem.innerHTML = `
       <div class="d-flex w-100 justify-content-between">
         <h5 class="mb-1">${document.getElementById('burgerName').value}</h5>
         <button 
          data-name="${document.getElementById('burgerName').value}"
          class="devoured btn btn-success">Devour It!</button>
       </div>
      `
      document.getElementById('notDevoured').append(burgerElem)

      document.getElementById('burgerName').value = ''
    })
    .catch(err => console.error(err))
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('devoured')) {
    axios.put(`/api/burgers/${event.target.parentNode.parentNode.id}`, {
      devoured: true
    })
      .then(() => {
        let burgerElem = document.createElement('li')
        burgerElem.className = 'list-group-item'
        burgerElem.id = event.target.parentNode.parentNode.id
        burgerElem.innerHTML = `
       <div class="d-flex w-100 justify-content-between">
         <h5 class="mb-1">${event.target.dataset.name}</h5>
<button class="btn btn-danger remove"><i aria-hidden="true" class="fas fa-trash-alt" title="delete"></i><span class="sr-only">delete</span></button>
       </div>
      `
        document.getElementById('devoured').append(burgerElem)
        event.target.parentNode.parentNode.remove()
      })
      .catch(err => console.error(err))
  } else if (event.target.classList.contains('remove')) {
    axios.delete(`/api/burgers/${event.target.parentNode.parentNode.id}`)
      .then(() => {
        event.target.parentNode.parentNode.remove()
      })
      .catch(err => console.error(err))
  }
})