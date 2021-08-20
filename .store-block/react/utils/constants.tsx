// import bannerImg from '../assets/banner_gremio.jpg'
// import camisetaImg from "../assets/camiseta_gremio.jpg"

// GET /cadastros GET /cadastros/{id} PUT /cadastros DELETE /cadastros
export const AWS_API =
	"https://wmq5x946lg.execute-api.us-east-2.amazonaws.com/cadastros"

export const itemsCarousel = [
    {
        alt: 'img',
        img: "https://cdn.shopify.com/s/files/1/0061/4429/5000/files/2_TOPO_1920x790pxFT.gif?v=1622568901",
    },
    {
        alt: 'img',
        img: "https://cdn.shopify.com/s/files/1/0061/4429/5000/files/2_TOPO_1920x790pxFT.gif?v=1622568901",
    },
]

export const itemsSelection = [
    {
        id: '0',
        value: 'futebol',
        label: 'Futebol',
        action(): void {
            console.log(this.value)
        },
    },
    {
        id: '1',
        value: 'lol',
        label: 'LoL e-sports',
        action(): void {
            console.log(this.value)
        },
    },
    {
        id: '2',
        value: 'bike',
        label: 'Bike',
        action(): void {
            console.log(this.value)
        },
    },
]

export const products = [
    {
        id: '0',
        name: 'Camiseta do Grêmio',
        imgUrl: 'https://http2.mlstatic.com/D_NQ_NP_739941-MLB46570375819_062021-V.jpg',
        stars: 5,
        price: 'R$ 200,34',
        link: '#',
    },
    {
        id: '1',
        name: 'Camiseta do Grêmio',
        imgUrl: 'https://http2.mlstatic.com/D_NQ_NP_739941-MLB46570375819_062021-V.jpg',
        stars: 4,
        price: 'R$ 195,47',
        link: '#',
    },
    {
        id: '2',
        name: 'Camiseta do Grêmio',
        imgUrl: 'https://http2.mlstatic.com/D_NQ_NP_739941-MLB46570375819_062021-V.jpg',
        stars: 3,
        price: 'R$ 99,99',
        link: '#',
    },
    {
        id: '3',
        name: 'Camiseta do Grêmio',
        imgUrl: 'https://http2.mlstatic.com/D_NQ_NP_739941-MLB46570375819_062021-V.jpg',
        stars: 3,
        price: 'R$ 99,99',
        link: '#',
    },
]

export const colors = {
    green: '#14ff00',
    white: '#fff',
    black1: '#505050',
    black2: '#303030',
    black3: '#101010',
}
