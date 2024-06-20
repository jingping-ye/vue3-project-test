<script lang="ts" setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router';

const route = useRoute();
const router = useRouter();

const params = computed(() => route.params)

function addHash() {
  router.replace({ hash: "#top" })
}

// 请求用户接口
onMounted(() => {
  // getUserList()
});

async function getUserList() {
  const params = {
    limit: 10,
    page: 1,
  }
  const result = await fetch("/user/list");
  console.log(result.json());
}

watch(() => route.params.id, (newId, oldId) => {
  // 2, 1
  console.info(newId, oldId)
});

// 初次进入不会触发；刷新页面不会触发
onBeforeRouteUpdate(async (to, from) => {
  console.log(to);
  console.log(JSON.stringify(to));
  console.log(from);
  // 对路由变化做出响应
  // userData.value = await fetchUser(to.params.id);
})

const props = defineProps({
  a: Number,
  b: Number,
});

console.log(props)

</script>
<template>
  用户详情
  <p>props id: {{ id }}</p>
  <p>params:{{ params }}</p>
  <p>hash: {{ $route.hash }}</p>
  <el-button @click="addHash">add hash</el-button>
</template>