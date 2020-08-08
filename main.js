var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'Vue Mastery',
        image: './assets/vmSocks-blue.jpg',
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [{
            variantId: 2234,
            variantColor: '#25955a',
            variantImage: './assets/vmSocks-green-onWhite.jpg'
        },
        {
            variantId: 2235,
            variantColor: '#344861',
            variantImage: './assets/vmSocks-blue.jpg'                   
        }
    ],
        cart: 0,        
    },
        methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage){
            this.image = variantImage;
        },
        removeToCart(){
            this.cart -= 1;
        }    
    },
    computed:{
        title() {
            return this.brand.toUpperCase() + ' ' + this.product.toUpperCase() ;
        }
    }
});