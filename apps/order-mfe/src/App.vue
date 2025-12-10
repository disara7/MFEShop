<template>
  <div>
    <h1>Orders</h1>
    <ul>
      <li v-for="order in orders" :key="order.id">
        {{ order.item }} - ${{ order.amount }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      orders: [],
    };
  },
  async mounted() {
    try {
      const response = await axios.get("http://localhost:4002/api/orders");
      this.orders = response.data;
    } catch (err) {
      console.error("Failed to fetch orders:", err);
    }
  },
};
</script>
