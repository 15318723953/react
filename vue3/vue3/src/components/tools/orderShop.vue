<template>
  <div class="sys-info-l">
    <span @click="toIndex" v-if="outUserId" class="myOrder_bq">
      {{ indexText }}
    </span>
    <span class="shoppingcar-icon-top" @click="customerUrl">帮助中心</span>
    <span class="customer_top" @click="toBjca">关于BJCA</span>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "orderShop",
  data() {
    return {
      indexText: "首页",
      outUserId: true,
    };
  },
  created() {
    if (this.$ls.get("userInfo")) {
      if (this.$ls.get("userInfo").outUserId) {
        this.outUserId = false;
      }
    }
  },
  methods: {
    toIndex() {
      this.$router.push({
        name: "home",
      });
    },
    customerUrl() {
      window.open("https://help.bjca.cn/index.html", "_blank");
    },
    toBjca() {
      window.open("https://www.bjca.cn/", "_blank");
    },
  },
};
</script>
<style lang="scss" scoped>
.sys-info-l {
  color: #333;
  font-size: 18px;
  line-height: 50px;
  float: left;
  text-align: left;
  margin-top: 2px;
  margin-left: 60px;
  padding-bottom: 10px;
  span {
    cursor: pointer;
  }
  .shoppingcar-icon-top {
    width: 130px;
    height: 20px;
    padding-left: 25px;
    margin-right: 20px;
  }

  .myOrder_bq {
    margin-right: 30px;
  }

  .el-dropdown {
    color: #333;
  }

  .shoppingCar-list {
    color: #333;
  }

  .customer_top {
    color: #333;
    margin: 0 0px 0 20px;
  }

  .shoppingCar-icon {
    color: #ff0033;
    font-weight: bold;
    font-size: 16px;
    margin: 3px 10px 0 10px;
  }

  .iconfont {
    font-size: 22px;
    vertical-align: middle;
  }

  .logout-btn {
    font-size: 18px;
    vertical-align: middle;
    color: #333;
    margin-left: 10px;

    &:hover {
      color: red;
    }
  }

  .dropdown-link {
    cursor: pointer;
    padding: 0 8px;

    &:hover {
      color: #ff0033;
    }

    .dropdown-avatar {
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
  }

  .item_quit {
    font-size: 12px;
  }

  /* .user-role-select {
          width: 150px;

          /deep/ .el-input__inner {
            background: $white;
            border-color: $menuBg;
            color: $grey;
          }
        } */
}

.dropdown-list {
  width: 150px;
}
</style>