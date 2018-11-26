<template>
<div class="login-wrap">
    <el-form label-position="top" label-width="80px" class="login-form">
        <h2>用户登录</h2>
        <el-form-item label="用户名">
            <el-input v-model="formdata.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="formdata.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-button type="primary" class="login-button" @click.prevent="getuserList()">登录</el-button>

    </el-form>
</div>
</template>

<script>
export default {
    data() {
        return {
            formdata: {
                username: "",
                password: ""
            }
        };
    },
    methods: {
        //发送登录请求
        getuserList() {
            this.$http.post("login", this.formdata).then(res => {
                // console.log(res);
                //如果登录成功,提示登录成功,并跳转到首页
                const {
                    meta: {
                        status,
                        msg
                    },
                    data
                } = res.data
                if (status === 200) {
                    this.$router.push({
                        name: 'home'
                    })
                    this.$message.success(msg);
                } else {
                    // this.$message.error(msg);
                }
                //如果登录失败提示错误信息

            });
        }
    }
};
</script>

<style>
.login-wrap {
    background-color: #324152;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-wrap .login-form {
    background-color: #fff;
    width: 400px;
    padding: 30px;
    border-radius: 6px;
}

.login-wrap .login-form .login-button {
    width: 100%;
}
</style>
