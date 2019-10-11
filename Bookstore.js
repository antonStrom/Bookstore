const app = new Vue({
    el: '#app',
    data: {
        bookData: [],
        search: ""
    },
    created() {
        this.getData("https://api.myjson.com/bins/zyv02")
    },
    methods: {
        getData: async function (url) {
            this.bookData = await fetch(url, {
                    method: "GET",
                    headers: new Headers({})
                })
                .then(response => response.json())
                .then(data => data.books)
        },
    },
    computed: {
        filteredBooks() {
            return this.bookData.filter((books) => {
                return books.title.toLowerCase().match(this.search)
            })
        }
    }
});