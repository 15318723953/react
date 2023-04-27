<template>
  <div class="sys-info">
    <el-dropdown
      v-if="$store.state.navMenu"
      trigger="hover"
      @command="handleCommand"
    >
      <div
        class="el-dropdown-link btn send time-send small-hand"
        id="custom-sebd-btn"
        :class="{ active: customActive }"
        v-if="user"
      >
        <pan-thumb
          :image="user.picture ? user.picture : image"
          style="width: 34px; height: 34px"
        />
        <span class="top50">
          {{ user.userName }}
        </span>
      </div>

      <el-dropdown-menu v-if="user" slot="dropdown">
        <el-dropdown-item command="a"> 管理中心 </el-dropdown-item>
        <el-dropdown-item command="c"> 用户中心 </el-dropdown-item>
        <el-dropdown-item command="b" @click="out">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div v-if="!$route.meta.loginOn && !$store.state.navMenu && navShow">
      <!-- <el-tooltip effect="dark" :content="operateName" placement="bottom-end"> -->
      <el-button type="text" class="logout-btn-l-p" @click="logOut()"
        >{{ operateName }}
      </el-button>
      <!-- </el-tooltip> -->
      <span class="logout-btn-s">
        <span class="loginout-text"> |</span>
        <el-button type="text" class="logout-btn-l" @click="loginOnText()">
          注册
        </el-button>
      </span>
    </div>
  </div>
</template>
<script>
import PanThumb from "@/components/PanThumb";
import user from "@/assets/images/user-pic.jpg";
import { decodeBase64 } from "@/dist/js/ele-validate";
export default {
  name: "UserMenu",
  components: {
    PanThumb,
  },
  data() {
    return {
      image: user,
      vmembername: "15310980398",
      show: true,
      loginOn: false,
      userRole: "1",
      operateName: "登录",
      tips: "点我登录",
      userRoleOptions: [],
      commandOne: {},
      commandTwo: {},
      customActive: "",
      user: "",
      channelId: "",
    };
  },
  watch: {
    "$store.state.navMenu"(to, from) {
      //重新获取数据
      this.queryInfo();
    },
  },
  created() {},
  computed: {
    // channelId() {
    //   return this.$route.query.channelId;
    // },
    navShow() {
      this.channelId = this.$route.query.channelId;
      if (String(+this.channelId) == "NaN") {
        this.channelId = decodeBase64(this.$route.query.channelId);
      }
      return !(this.channelId == 100430 && this.$route.name == "home");
    },
  },
  methods: {
    loginOnText() {
      console.log(this.channelId);
      this.$router.push({
        name: "register",
        query: {
          channelId: this.channelId,
        },
      });
    },

    logOut() {
      if (this.operateName == "登录") {
        if (this.$route.name != "home") {
          this.$router.push({
            name: "home",
          });
        } else {
          this.$store.commit("login", true);
        }
        console.log(this.$store.state.loginShow);
      } else {
        this.$confirm("是否确认退出登录?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true,
        })
          .then(() => {
            this.Logout().then((res) => {
              sessionStorage.removeItem("malUser");
              this.$router.push("/partner/login");
            });
          })
          .catch(() => {});
      }
    },
    out() {
      let channelId = this.$ls.get("channelId");
      this.$confirm("是否确认退出登录?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then((res) => {
          this.$ls.remove("token");
          this.$ls.remove("userId");
          this.$ls.remove("userInfo");
          this.$ls.remove("channelId");
          this.$ls.remove("outUser");
          this.$ls.remove("customerNo");
          if (channelId == 100430) {
            this.$router.push({
              name: "index",
              query: {
                channelId: "d01ETndBVE0=",
              },
            });
          } else {
            this.$router.push({
              name: "index",
            });
          }
          console.log(res);

          location.reload();
        })
        .catch(() => {});
    },
    handleCommand(index) {
      if (index == "b") {
        this.out();
      } else if (index == "a") {
        this.$router.push({
          name: "1-2",
        });
      } else if (index == "c") {
        this.$router.push({
          name: "2-1",
        });
      }
    },
    changeUser(item) {},
    queryInfo() {
      this.$user({
        url: "/v1/user/queryInfo",
        method: "post",
      }).then((res) => {
        if (res.status == 200) {
          this.user = res.data;
          // this.operateName = res.data.user;
        }
      });
    },
  },
  async mounted() {
    if (this.$store.state.navMenu) {
      await this.queryInfo();
    } else {
    }
  },
};
</script>
<style lang="scss" scoped>
.sys-info {
  color: #333;
  font-size: 16px;
  line-height: 80px;
  float: right;
  text-align: right;
  margin-right: 24px;

  .iconfont {
    font-size: 22px;
    vertical-align: middle;
  }

  .logout-btn-l-p {
    font-size: 16px;
    vertical-align: middle;
    color: #333;
    margin-top: 12px;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 25px;
    background: url(../../assets/images/p.png) no-repeat left 8px;
  }
  .loginout-text {
    position: relative;
    top: 6px;
    left: -5px;
  }
  .logout-btn-l {
    font-size: 16px;
    vertical-align: middle;
    color: #333;
    margin-top: 12px;
    margin-left: 10px;
    margin-right: 10px;

    &:hover {
      color: red;
    }
  }

  .dropdown-link {
    cursor: pointer;
    padding: 0 8px;

    .dropdown-avatar {
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
  }
}

.user_title_img {
  float: left;
  margin-left: 10px;
  width: 80px;
}

.user_title_p {
  float: right;
  margin-right: 10px;
}

.el-dropdown {
  display: inline-block;
  position: relative;
  color: #333;
}

.user_title_p h3 a {
  color: #000;
}

.user_title_p h3 a:hover {
  color: #fc262c;
}

.user_title_p p a {
  color: #000;
}

.user_title_p p a:hover {
  color: #fc262c;
}

.dropdown-list {
  width: 210px;
}

.logout-btn-s {
  margin-left: 10px;
  color: #323534;
  a {
    font-weight: 500;
    font-size: 18px;
  }
  a:hover {
    text-decoration: none;
  }
  .el-link.el-link--default {
    margin-top: 13px;
  }
  /deep/ .el-link.el-link--default:hover {
    text-decoration: none;
    color: #fc262c;
  }
}
.top50 {
  position: relative;
  top: -10px;
  left: 15px;
}
.person_name {
  font-size: 18px;
  position: relative;
  top: 8px;
}
</style>