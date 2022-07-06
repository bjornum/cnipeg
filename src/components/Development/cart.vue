<template>
  <ul>
    <li v-for="(item, index) in $store.cart.items" :key="index">
      {{ item.title }}
    </li>
  </ul>
</template>