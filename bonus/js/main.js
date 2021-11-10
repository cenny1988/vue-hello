/*
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
Non c’è un layout prefissato.
partite semplici,
ma poi se volete rispolverate qualcosa di html-css per renderlo più carino.
*/

var app = new Vue({
    el: '#myapp',
    data: {
        message: 'Vue.js Learning',
        imgFold: 'Questa è una img locale',
        img: 'image.jpg',
        imgRandom: 'Questa è una img Random',
        imgR: 'https://source.unsplash.com/user/erondu/600x300',
        upCase: 'to-upper-case'
    }
})