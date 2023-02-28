const cards = document.querySelectorAll(".box-fit")
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        //only peform animation in once
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: 0.5,
})

cards.forEach(card => {
    observer.observe(card)
})

//images 
const preloadImage = src => 
  new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = resolve
    image.onerror = reject
    image.src = src
  }).then(() => {
    preloadImage('./assets/anastasiya.png')
    preloadImage('./assets/armin.png')
    preloadImage('./assets/blogbg.png')
    Promise.all(images.map(x => preloadImage(x.src)))
  })
