<template>  
  <div>
     
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <span>{{product.title}}</span>
        <v-btn @click="$store.cart.add(product)">Add to Cart</v-btn>
      </li>
    </ul>

    <h2>
      Cart ({{ $store.cart.items.length }} items)
    </h2>
    <Cart></Cart>
  </div>
</template>

<script>
import Cart from "@/components/Development/cart.vue"
export default {
  components: {
    Cart
  },
  data(){
    return {
      products: [
        { title: "Toillete papereee" },
        { title: "Toillete dos" },
        { title: "Toillete tres" },
        { title: "Toillete quatro" },
      ]
    }
  }
}
</script>