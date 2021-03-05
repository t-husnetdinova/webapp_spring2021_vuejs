// create vue app
const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null
        }
    },
    methods: {
        searchGoogleBooks() {
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + txtSearch.value + "&startIndex=0&maxResults=20")
            .then(response => response.json())
            .then(json => { 
                this.result = json;
                var list = `<div class="row col-sm-5">found ${json.totalItems} books</div> 
                <div class="row">`
                for(let i = 0; i < json.items.length; i++) {
                    console.log(json.items[i].volumeInfo.title)
                    var bookInfo = json.items[i].volumeInfo;
                    var template = `<ul class="col-sm-12 col-md-6 col-xl-4:>`;
                    template += `<a class="list-group-item list-group-item-action active" href=${json.items[i].selfLink}">${bookInfo.title}</a>`
                    template += `<li class="list-group-item">${bookInfo.authors}</li>`
                    template += `<li class="list-group-item">${bookInfo.publisher}, ${bookInfo.publishedDate}</li>`
                    template += `</ul>`
                    list += template;
                }
                list += `</div>`
                this.result = list
            })       
        }
    }
})