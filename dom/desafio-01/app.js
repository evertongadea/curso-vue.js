new Vue({
    el: "#desafio",
    data: {
        nome: "Everton Gadea",
        idade: 35,
        num_aleatorio: (Math.floor(Math.random() * 2)),
        img: "https://vuejs.org/images/logo.png"
    }
})