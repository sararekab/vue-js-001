new Vue({
    el: '#roxo-app',
    data: {
        title: 'Hello Vue'
    },
    methods: {
        changeTitle: function(event) {
            console.log("ssss", event.target.value)
            this.title = event.target.value
        }
    }
})