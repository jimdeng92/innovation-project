<template>
  <el-container style="height: 100vh;background-color: #F0F2F5">
    <!-- 头部 -->
    <el-header style="text-align: right; font-size: 12px">
     <div class="logo-title">
        <h2 style="color: #1890ff">大学生创新创业管理系统</h2>
     </div>
      <el-button type="text" size="middle" style="color:grey" @click="loginOut"> <i class="el-icon-switch-button" style="color:#fdb933"></i> 退出</el-button>
    </el-header>

    <el-container>
      <!-- 侧边栏菜单 -->
      <el-aside width="201px" style="background-color: #fff">
        <el-menu router :default-active="activePath" unique-opened>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-document"></i>项目管理
            </template>
            <el-menu-item-group>
              <el-menu-item
                :index="$route.path"
                v-if="$route.path==='/project/create'||$route.path.indexOf('/project/edit')!==-1"
              >{{AddOrEdit}}</el-menu-item>
              <el-menu-item index="/project/list">项目列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <!-- 用户管理 -->
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-user"></i>用户管理
            </template>
            <!--用户管理二级菜单 -->
            <el-menu-item-group>
              <el-menu-item index="/admin_user/list">用户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容主体区域 -->
      <el-main style="background-color: #F0F2F5">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {
    }
  },
  computed: {
    activePath() {
      return this.$route.path
    },
    AddOrEdit() {
      if (this.$route.path.indexOf('/hero') !== -1) {
        if (this.$route.path === '/hero/create') {
          return '添加英雄'
        } else if (this.$route.path.indexOf('/hero/edit') !== -1) {
          return '编辑英雄'
        }
      } else {
        if (this.$route.path === '/article/create') {
          return '添加项目'
        } else if (this.$route.path.indexOf('/article/edit') !== -1) {
          return '编辑项目'
        }
      }

    }
  },
  methods: {
    // 退出登陆
    loginOut() {
      this.$confirm('是否退出当前账户?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          window.localStorage.clear()
          this.$router.push('/login')
        })

    }
  }
}
</script>

<style scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  color: #eee;
}
.logo-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
