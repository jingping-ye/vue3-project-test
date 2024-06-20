<script lang="ts" setup>
import { useRoute, useRouter, watch } from 'vue-router';
import type { LocationQueryRaw, } from 'vue-router'
import { computed } from 'vue';


const router = useRouter();
const route = useRoute();

const fullPath = computed(() => route.fullPath)
const path = computed(() => route.path);
console.log(route.fullPath);
console.log(route.path);

const search = computed({
  get() {
    return route.query ?? '无参数'
  },
  set(search: string) {
    router.replace({ query: { search } })
  }
})

function replaceRouter() {
  router.replace({ query: { a: "123", b: "456" } })
}


</script>
<template>
  登录进入后的首页
  <p>fullPath:{{ fullPath }}</p>
  <p>path:{{ path }}</p>
  <p>search:{{ search }}</p>
  <el-button @click="replaceRouter">click me</el-button>
</template>