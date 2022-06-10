<template>
  <div id="reg">
    <Rain />
  </div>
</template>

<script>
import Rain from "../../components/Rain";
export default {
  data() {
    return {};
  },
  components: {
    Rain,
  },
};
</script>

<style>
#reg {
  width: 100%;
  height: 100%;
  background: url('../../assets/regBG.webp') center no-repeat;
  background-size: cover;
}
</style>