// const cards = document.getElementsByClassName("box-fit")
const cards = document.querySelectorAll(".box-fit")
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting || entry.isVisible)
        //only peform animation in 
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: 1,
    rootMargin: "-100px",
})


cards.forEach(card => {
    observer.observe(card)
})



//three.js 