<script lang="ts" setup>
import { ref, reactive } from 'vue';
import type { Ref, Reactive } from 'vue';
import type { FormRules, FormInstance } from 'element-plus';

interface LoginForm {
  username: string,
  password: string,
}
let loginForm: Reactive<LoginForm> = reactive({
  username: '',
  password: '',
});

const rules = reactive({
  username: [
    {
      required: true, message: '请输入用户名！', trigger: 'blur',
    }
  ],
  password: [
    {
      required: true, message: '请输入密码！', trigger: 'blur',
    }
  ]
})

const loginFormRef = ref<FormInstance>();


async function submitForm() {
  // fields 校验失败的项
  await loginFormRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('err submit', fields);
    }
  })
}
</script>
<template>
  <div class="login-page">
    <div class="login-form">
      <div class="login-title">登录</div>
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules" label-width="auto" size="large">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm" style="width:100%">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>
<style lang="scss">
.login-page {
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-form {
  width: 400px;
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
}

.login-title {
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
}
</style>