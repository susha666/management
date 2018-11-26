<template>
<el-container class="container">
    <!-- 头部 -->
    <el-header class="header">
        <el-row>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                  <img src="../../assets/img/logo.png" alt="">
                </div>
            </el-col>
            <el-col :span="19">
                <div class="grid-content bg-purple-light">
                  电商后台管理系统
                </div>
            </el-col>
            <el-col :span="1">
                <div class="grid-content bg-purple">
                  <a href="#">登录</a>
                </div>
            </el-col>
        </el-row>
    </el-header>

    <!-- 侧边栏 -->
    <el-container>
        <el-aside width="200px" class="aside">Aside</el-aside>
        <!-- 主体 -->
        <el-main class="main">Main</el-main>

    </el-container>

</el-container>
</template>

<script>
export default {};
</script>

<style>
.container {
    height: 100%;
}

.header {
    background-color: #b3c0d1;
}

.aside {
    background-color: #d3dce6;
}

.main {
    background-color: #e9eef3;
    height: 100%;
}
</style>
