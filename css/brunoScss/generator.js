const generator = (callback, nb, className, startingCount = 1) => {
    let main = ""
    for (let i = 0; i < nb; i++) {
        main += callback(startingCount + i, className);
    }
    return main
}

document.querySelectorAll('article[data-c]').forEach(ele => {
    ele.insertAdjacentHTML("afterend", generator(article, ele.dataset.n, ele.dataset.c))
    ele.remove()
})