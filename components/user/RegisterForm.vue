<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item" prop="username">
      <el-input placeholder="用户名手机" v-model="form.username"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="captcha">
      <el-input placeholder="验证码" v-model="form.captcha">
        <template slot="append">
          <el-button @click="handleSendCaptcha">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="nickname">
      <el-input placeholder="你的名字" v-model="form.nickname"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="password">
      <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
    </el-form-item>

    <el-form-item class="form-item" prop="checkpassword">
      <el-input placeholder="确认密码" type="password" v-model="form.checkpassword"></el-input>
    </el-form-item>

    <el-button class="submit" type="primary" @click="handleRegSubmit">注册</el-button>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据
      form: {
      username:'',  //手机号码
      nickname:'',
      captcha:'',
      password:'',
      checkpassword:'',
      },
      // 表单规则
      rules: {
      username:[
         { required: true, message: '请输入手机号码', trigger: 'blur' },
      ],
      nickname:[
         { required: true, message: '请输入用户名', trigger: 'blur' },
      ],
      captcha:[
         { required: true, message: '请输入验证码', trigger: 'blur' },
      ],
      password:[
         { required: true, message: '请输入密码', trigger: 'blur' },
      ],
      checkpassword:[
         { required: true, message: '请输入确认密码', trigger: 'blur' },
      ],
      }
    };
  },
  methods: {
    // 发送验证码
    handleSendCaptcha() {},

    // 注册
    handleRegSubmit() {
      console.log(this.form);
    }
  }
};
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>