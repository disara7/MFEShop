<template>
  <div>
    <h3>Orders</h3>
    <ul>
      <li v-for="order in orders" :key="order.id">
        {{ order.item }} - ${{ order.amount }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
const API_URL = "http://localhost:4002/api/orders";

export default {
  data() {
    return { orders: [] };
  },
  mounted() {
    axios.get(API_URL).then((res) => (this.orders = res.data));
  },
};
</script>
