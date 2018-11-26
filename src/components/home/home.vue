<template>
<el-container class="container">
    <!-- 头部 -->
    <el-header class="header">
        <el-row>
            <el-row>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <img src="../../assets/img/logo.png" alt="该图片不能显示">
                    </div>
                </el-col>
                <el-col :span="19" class="middle">
                    <h2>电商后台管理系统</h2>
                </el-col>
                <el-col :span="1">
                    <a href="#" class="loginout" @click.prevent="loginout()">退出</a>
                </el-col>
            </el-row>
        </el-row>
    </el-header>

    <!-- 侧边栏 -->
    <el-container>
        <el-aside width="200px" class="aside">
            <el-menu 
            :router="true"
            :unique-opened="true" default-active="2" class="el-menu-vertical-demo">
                <el-submenu index="1" >
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item index="user">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>用户列表</span>
                        </template>
                    </el-menu-item>

                </el-submenu>
            </el-menu>
            <el-menu default-active="2" class="el-menu-vertical-demo">
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>权限管理</span>
                    </template>
                    <el-menu-item index="1-1"> <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>角色列表</span>
                        </template></el-menu-item>
                    <el-menu-item index="1-1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>权限列表</span>
                        </template>
                    </el-menu-item>
                </el-submenu>

            </el-menu>
            <el-menu default-active="2" class="el-menu-vertical-demo">
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>商品管理</span>
                    </template>
                    <el-menu-item index="1-1"> <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>商品列表</span>
                        </template></el-menu-item>
                    <el-menu-item index="1-1"> <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>分类参数</span>
                        </template></el-menu-item>
                    <el-menu-item index="1-1"> <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>商品分类</span>
                        </template></el-menu-item>

                </el-submenu>
            </el-menu>
            <el-menu default-active="4" class="el-menu-vertical-demo">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>订单管理</span>
                    </template>
                    <el-menu-item index="1-1"> <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>订单列表</span>
                        </template></el-menu-item>

                </el-submenu>
            </el-menu>
            <el-menu default-active="2" class="el-menu-vertical-demo">
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>数据统计</span>
                    </template>
                    <el-menu-item index="1-1"> <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>数据列表</span>
                        </template></el-menu-item>

                </el-submenu>
            </el-menu>

        </el-aside>

        <!-- 主体 -->
        <el-main class="main">
            <router-view></router-view>
        </el-main>

    </el-container>

</el-container>
</template>

<script>
export default {
  beforeCreate() {
    //获取token
    const token=localStorage.getItem('token');
    //如果不存在,回到login
    if(!token){
      this.$router.push({name:'login'})
    }
  },
  methods:{
    loginout(){
      //1.提示
      this.$message.success('退出成功')
      //清除localstorage
      localStorage.clear();
      //跳到登录界面
      this.$router.push({name:'login'})
    }
  }
};
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
    height: 100%;
}

.main {
    background-color: #e9eef3;
    height: 100%;
}

.header .middle {
    text-align: center;
    color: #fff;
    line-height: 60px;
}

.header .loginout {
    line-height: 60px;
    color: #666;
    display: block;
    font-size: 18px;
}


</style>
