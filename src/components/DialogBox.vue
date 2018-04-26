<template>
<div id="app">
<el-container>
  <el-container>
    <el-header>
        <div class="vuepq">VUEAMIDN</div>
        <div class="vuert">
          <el-dropdown>
            <span class="el-dropdown-link">
              <span>树懒</span>
              <img src="/img/shulan.pnm" class="imgpt">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>我的消息</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item @click.native="logout">退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <el-dialog title="提示" 
            :visible.sync="dialogLogoutVisible"
             width="20%"
            :before-close="handleClose">
            <span>确认退出吗？</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </el-header>
    <el-main>
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <!-- Form -->
      <el-button type="text" @click="dialogLogoutVisible = true">打开嵌套表单的 Dialog</el-button>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="音乐库" name="fourth">
          <audio src="http://up.mcyt.net/md5/53/MTQxMzEzNTg=_Qq4329912.mp3" controls="controls">
          </audio>
        </el-tab-pane>
      </el-tabs>
      <el-row class="tac">
  <el-col :span="12">
    <h5>默认颜色</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="12">
    <h5>自定义颜色</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
</div>
</template>
<style type="text/css">
  *{
    padding: 0;
    margin: 0;
  }
  .vuepq{
      width: 180px;
      float: left;
      text-align: left;
      border-right-style: solid;
      border-right-color:hsla(62,77%,76%,.3); 
      border-right-width: 0.5px;
  }
  .vuezy{
      width: 600px;
      float: left;
      text-align: center;
  }
  .vuert{
      text-align: center;
      float: right;
  }
  .el-header, .el-footer {
    background-color: #409EFF;
    color:#fff ;
    text-align: center;
    line-height: 60px;
  }
  .el-main{
    height: 1000px;
  }
  .imgpt{
    width: 40px;
    height: 40px;
    margin-top: 10px;
    border-radius:50%
  }
  .el-dropdown-link span{
    color:#fff ;
  }
</style>
<script>
  export default {
    data() {
      return {
        activeName: 'second',
        dialogFormVisible:false,
        dialogLogoutVisible:false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
        handleClick(tab, event) {
        console.log(tab, event);
        },
        logout() {
            this.$confirm('确认退出吗?', '提示', {}).then((res) => {
                this.$router.push({ path: '/login' })
            }).catch(() => {});
        },
         handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>