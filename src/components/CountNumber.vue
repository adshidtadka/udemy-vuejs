<template>
  <div>
    <h2>{{ title | upperCase | lowerCase }}</h2>
    <p>{{ subTitle | lowerCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script charset="utf-8">
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],
  created() {
    console.log("created in component");
  }
};
</script>
