```javascript
/* =========================================
   APL — JAVASCRIPT
========================================= */


/* =========================================
   MENU MOBILE
========================================= */

const menuButton = document.getElementById("menuButton");
const nav = document.querySelector(".nav");


menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

});


/* Fechar menu depois de clicar */

const navLinks = document.querySelectorAll(".nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* =========================================
   PESQUISA DE LIVROS
========================================= */

const searchInput =
    document.getElementById("bookSearch");

const bookCards =
    document.querySelectorAll(".book-card");


searchInput.addEventListener("input", () => {

    const search =
        searchInput.value
        .toLowerCase()
        .trim();


    bookCards.forEach(book => {

        const title =
            book.dataset.title.toLowerCase();


        if (title.includes(search)) {

            book.style.display = "";

        } else {

            book.style.display = "none";

        }

    });

});


/* =========================================
   FILTROS DA BIBLIOTECA
========================================= */

const filters =
    document.querySelectorAll(".filter");


filters.forEach(filter => {

    filter.addEventListener("click", () => {


        /* Remove estado ativo */

        filters.forEach(button => {

            button.classList.remove("active");

        });


        /* Ativa botão clicado */

        filter.classList.add("active");


        const category =
            filter.dataset.category;


        bookCards.forEach(book => {


            if (
                category === "todos" ||
                book.dataset.category === category
            ) {

                book.style.display = "";

            } else {

                book.style.display = "none";

            }

        });


        /* Limpa pesquisa */

        searchInput.value = "";

    });

});
```
