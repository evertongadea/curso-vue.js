new Vue({
    el: '#desafio',
    data: {
        valor: 'ff'
    },
    methods: {
        exibirAlerta() {
            alert("teste alerta!");
        },
        salvarValor(param1) {
            this.valor = param1.target.value
        }
    }
})