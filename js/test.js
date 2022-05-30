// const up = document.getElementsByClassName("up");
const down = document.querySelectorAll('.down');
const up = document.querySelectorAll('.up')

down.forEach(d => {
  d.addEventListener('click', () => {
    d.classList.toggle('exit')
    up.forEach(c => {
        c.classList.toggle('active')
    })
  })
})


