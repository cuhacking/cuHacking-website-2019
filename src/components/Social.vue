<template lang="pug">
.social
  a(v-for="social in socials" :href="social.link", target="_blank", :title="social.name")
    b-icon(:icon="social.icon" pack="fab" type="is-white")

</template>

<script>
import SocialData from "../assets/socials.json";

export default {
  name: "Social",
  data() {
    return {
      socials: SocialData
    };
  }
};
</script>

<style scoped lang='stylus'>

.social
  text-align: center;
  position: fixed;
  top: 38%;
  left: -4px;
  display: flex;
  padding: 10px;
  background: #222;
  flex-direction: column;
  margin-top: 0;
  z-index: 70000;

</style>
