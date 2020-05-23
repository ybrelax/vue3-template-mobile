<template>
  <div>
    this is Home page !!!
  </div>
</template>
<script>
import { onBeforeMount, onMounted, onBeforeUpdate, onUnmounted, onErrorCaptured, onRenderTracked, onRenderTriggered } from "vue";
export default {
  setup() {
    console.log("setup")
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUnmounted(() => {
      console.log("onUnmounted")
    })
    onErrorCaptured(() => {
      console.log("onErrorCaptured")
    })
    onRenderTracked(() => {
      console.log("onRenderTracked");
    })
    onRenderTriggered(() => {
      console.log("onRenderTriggered")
    })
    return {}
  },
};
</script>
