// /data/products.js

const tags = ["AI Pick", "Trending", "Premium", "Best Seller"];

function getRandomTag() {
    return tags[Math.floor(Math.random() * tags.length)];
}

module.exports = [
    {
        productId: "1",
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
        rating: { rate: 3.9, count: 120 },
        tag: getRandomTag()
    },
    {
        productId: "2",
        name: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. ...",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
        rating: { rate: 4.1, count: 259 },
        tag: getRandomTag()
    },
    {
        productId: "3",
        name: "Mens Cotton Jacket",
        price: 55.99,
        description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions...",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
        rating: { rate: 4.7, count: 500 },
        tag: getRandomTag()
    },
    {
        productId: "4",
        name: "Mens Casual Slim Fit",
        price: 15.99,
        description: "The color could be slightly different between on the screen and in practice...",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
        rating: { rate: 2.1, count: 430 },
        tag: getRandomTag()
    },
    {
        productId: "5",
        name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl...",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
        rating: { rate: 4.6, count: 400 },
        tag: getRandomTag()
    },
    {
        productId: "6",
        name: "Solid Gold Petite Micropave",
        price: 168,
        description: "Satisfaction Guaranteed. Return or exchange any order within 30 days...",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
        rating: { rate: 3.9, count: 70 },
        tag: getRandomTag()
    },
    {
        productId: "7",
        name: "White Gold Plated Princess",
        price: 9.99,
        description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her...",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
        rating: { rate: 3, count: 400 },
        tag: getRandomTag()
    },
    {
        productId: "8",
        name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        description: "Rose Gold Plated Double Flared Tunnel Plug Earrings...",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
        rating: { rate: 1.9, count: 100 },
        tag: getRandomTag()
    },
    {
        productId: "9",
        name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
        price: 64,
        description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
        rating: { rate: 3.3, count: 203 },
        tag: getRandomTag()
    },
    {
        productId: "10",
        name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        description: "Easy upgrade for faster boot up, shutdown, application load and response...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png",
        rating: { rate: 2.9, count: 470 },
        tag: getRandomTag()
    },
    {
        productId: "11",
        name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109,
        description: "3D NAND flash are applied to deliver high transfer speeds...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
        rating: { rate: 4.8, count: 319 },
        tag: getRandomTag()
    },
    {
        productId: "12",
        name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 114,
        description: "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png",
        rating: { rate: 4.8, count: 400 },
        tag: getRandomTag()
    },
    {
        productId: "13",
        name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599,
        description: "21. 5 inches Full HD (1920 x 1080) widescreen IPS display...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png",
        rating: { rate: 2.9, count: 250 },
        tag: getRandomTag()
    },
    {
        productId: "14",
        name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
        price: 999.99,
        description: "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png",
        rating: { rate: 2.2, count: 140 },
        tag: getRandomTag()
    },
    {
        productId: "15",
        name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        description: "Note:The Jackets is US standard size, Please choose size as your usual wear...",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png",
        rating: { rate: 2.6, count: 235 },
        tag: getRandomTag()
    }
];
