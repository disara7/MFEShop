<template>
  <div style="padding:20px">
    <h2>📦 Order Microfrontend</h2>
    <OrderList />
  </div>
</template>

<script>
import OrderList from "./components/OrderList.vue";
export default { components: { OrderList } };
</script>
