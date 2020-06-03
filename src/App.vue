<template>
  <div id="app">
    <header>
      <template v-if="isAuthenticated">
        <router-link class="header-item" to="/">掲示板</router-link>
        <span @click="logout" class="header-item">ログアウト</span>
      </template>
      <template v-if="!isAuthenticated">
        <router-link class="header-item" to="/login">ログイン</router-link>
        <router-link class="header-item" to="/register">登録</router-link>
      </template>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthenticated() {
      return this.$store.getters.idToken !== null;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>
.header-item {
  padding: 10px;
  cursor: pointer;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
