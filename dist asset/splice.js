new Vue({
    el: '#app',
    data: {
        images: ['images/Weekly-feature-intensive-eye-690x120.jpg', 'images/Weekly-features-Skinceuticals-Phloretin-CF-690x120.jpg'],
        currentNumber: 0,
        timer: null,        
        products: [
            {amount:'100.00', image:'images/Skin-Renewal-Gift-Voucher-300x300.png', title:'Skin-Renewal-Gift-Voucher', type:'Gift Vouchers', name:'Skin Renewal Gift Voucher', added:false},
            {amount:'130.00', image:'images/Lamelle-Clarity-Active-Control-300x300.jpg', title:'Lamelle-Clarity-Active-Control', type:'Cream', name:'Clarity Active Control', added:false},
            {amount:'175.00', image:'images/Alpha-Lipoic-Acid-300x300.jpg', title:'Alpha-Lipoic-Acid', type:'Oral Supplement', name:'Alpha Lipoic Acid', added:false},
            {amount:'175.00', image:'images/Apple-Cider-Vinegar-300x300.jpg', title:'Apple-Cider-Vinegar', type:'Oral Supplement', name:'Apple Cider Vinegar', added:false}
        ],
        cartTotal: 0
    },

    mounted() {
        // Banner slider
        this.startRotation();
    },

    methods: {
        // Banner slider
        startRotation() {
            this.timer = setInterval(this.next, 3000);
        },

        next() {
            this.currentNumber += 1;
        },
        
        // Add to Cart button clicked
        addCartClicked(product) {
            this.cartTotal++;
            product.added = true;
        },
        
        // Remove from Cart button clicked
        removeCartClicked(product) {
            this.cartTotal--;
            product.added = false;
        }
    },
    
    computed: {
        // Banner slider
    	currentImage() {
            return this.images[Math.abs(this.currentNumber) % this.images.length];
        }
    }    
});
