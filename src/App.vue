<template>
  <div id="app">
    <router-view v-if="hashType" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hashType: true,
    };
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  methods: {
    reload() {
      this.hashType = false;
      this.$nextTick(() => {
        this.hashType = true;
      });
    },
  },
};
</script>

<style lang="scss">
  @import './assets/main.css';
  @import './assets/main.scss';
  #app {
    width:100%;
    height:100%;
    animation: layout 1s ease-in-out;
  }
  @keyframes layout{
    from {
      opacity: 0.6;
    }
    to {
      opacity: 1;
    }
  }
</style>
