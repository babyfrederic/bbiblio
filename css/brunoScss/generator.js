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

/*
<script>

    const article = (n, className ="") => `
            <article class="reglement__article ${className}">
                <h3 class="article__titre">Article ${n}</h3>
                <p class="reglement__article__regle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos error quis commodi excepturi, iusto sunt asperiores nesciunt voluptatum eius, quod nulla praesentium delectus neque odit distinctio. Rem dolorem unde facere?</p>
            </article>`


</script>
<script src="../css/brunoScss/generator.js"></script>
*/

/* <script>
    const article = (n, className) => `
        <input type = "checkbox" id="${className.substr(11)}${n}" class="${className}${n}">
        <article class="oeuvre__article ${className}">
            <header class="oeuvre__header">
                <button class="oeuvre__header__button">
                    <h3 class="oeuvre__titre">marine${n} ${className}e</h3>
                </button>
            </header>
            <main class="oeuvre__main">
                <button>
                    <picture class="oeuvre__cover">
                        <img src="../image/sl${n - 1}.jpg" alt="cover">
                    </picture>
                    <p class="oeuvre__desc">
                        ${className.substr(11)}${n} article DESCRIPTION ipsum dolor, sit amet consectetur
                        adipisicing elit. Non unde quos aspernatur ex
                        quasi tempora, voluptas voluptate explicabo repudiandae necessitatibus.
                    </p>
                </button>
            </main>
            <footer class="oeuvre__footer">
                <button class="pdf_loading button--primary">
                    <label for="${className.substr(11)}${n}">
                        <i class="fa fa-heart" aria-hidden="true"></i>
                    </label>
                </button>
                <button class="pdf_loading button--primary jury">Telecharger</button>
                <section class="jury jury__note">
                    <button class="pdf_loading button--primary">Noter</button>

                </section>
            </footer>
        </article>`


</script>
<script src="../css/brunoScss/generator.js"></script>
 */