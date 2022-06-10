<template>
  <div class="rain">
    <div v-for="v in rainLists" :key="v.left" :style="v" class="rainList"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: null,
      rainLists: [],
    };
  },
  destroyed() {
    window.onresize = null;
    clearInterval(this.time);
  },
  mounted() {
    this.$nextTick(() => {
      let box = document.getElementsByClassName("rain")[0];
      let boxWidth = box.clientWidth;
      let boxHeight = box.clientHeight;
      window.onresize = function () {
        let boxWidth = box.clientWidth;
        let boxHeight = box.clientHeight;
      };
      this.time = setInterval(() => {
        let id = 1;
        let data = {
          top: 0,
          left: Math.random() * boxWidth + "px",
          opacity: Math.random(),
          id: id++,
          temp: 1,
        };
        this.rainLists.push(data);
        const times = setInterval(() => {
          if (parseInt(data.top) > boxHeight) {
            let index = this.rainLists.indexOf(data);
            this.rainLists.splice(0, index);
            clearInterval(times);
          } else {
            data.temp++;
            data.top = parseInt(data.top) + data.temp + "px";
          }
        }, 20);
      }, 50);
    });
  },
};
</script>

<style>
/* 雨水容器 */
.rain {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  /* 阻止容器选中事件 */
  pointer-events: none;
}

/* 雨水 */
.rainList {
  width: 2px;
  height: 50px;
  background: linear-gradient(
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.6)
  );
  position: absolute;
  top: 0;
  left: 0;
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
}
</style>