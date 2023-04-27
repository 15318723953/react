<template>
  <transition name="showHeader">
    <div v-if="data.visible" class="header-animat">
      <div class="header-top-logo">
        <div class="w1200">
          <ul class="fl">
            <li><LogoShop></LogoShop></li>
            <!-- <li><order-shop></order-shop></li> -->
          </ul>

          <ul class="fr">
            <li>
              <!-- <user-menu-shop></user-menu-shop> -->
            </li>

          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import LogoShop from "../tools/LogoShop.vue";
// import UserMenuShop from "@/components/tools/UserMenuShop.vue";
// import orderShop from "@/components/tools/orderShop.vue";
import { onMounted, reactive } from 'vue'
const data = reactive({
  visible: true,
  oldScrollTop: 0
})
onMounted(() => {
  
})
</script>
<style lang="scss" scoped>
.header-top-logo {
  background: #fff;
}

.showHeader-enter-active {
  transition: all 0.25s ease;
}

.showHeader-leave-active {
  transition: all 0.5s ease;
}

.showHeader-enter,
.showHeader-leave-to {
  opacity: 0;
}

.header-top-w {
  width: 100%;
  background-color: #f5f5f5;
  height: 36px;
  border-bottom: 1px solid #e5e5e5;
}

.w1200 {
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
}

.header-animat {
  height: 70px;
}

.fl {
  float: left;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

.fl li {
  float: left;
  padding: 10px 0 0 20px;
  line-height: 30px;
}

.fl li a {
  color: #333;
}

.fl li a:hover {
  color: #ff344d;
}

.fl li.topPosition {
  display: none;
  width: 220px;
  position: relative;
}

.fl li.topPosition i {
  position: absolute;
}

.fl li.topPosition div {
  white-space: inherit;
}

.fl li span.name {
  cursor: pointer;
}

.fl li span {
  padding-right: 10px;
  padding-left: 4px;
}

.login_name_top {
  display: none;
  color: #515151;
}

.fl li .login_name_top em {
  float: inherit;
  padding-left: 3px;
}

.login_name_top i {
  margin-right: 3px;
  color: #f43418;
  max-width: 100px;
  overflow: hidden;
  float: left;
  height: 36px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.fl li span em {
  float: left;
}

.fr {
  float: right;
}

.fr li {
  padding: 10px 20px 5px 25px;
  line-height: 26px;
  position: relative;
  cursor: pointer;
  float: left;
}

.shopping-button {
  float: right;
  width: 135px;
  height: 36px;
}

.item {
  margin-top: 10px;
  margin-right: 40px;
}

.fColor {
  font-size: 16px;
  color: #fa0002;
}

.icon-shopping-dw {
  margin-top: 10px;

}

.sys-info {
  color: #ffffff;
  font-size: 14px;
  line-height: 32px;
  float: right;
  text-align: right;
  margin-right: 24px;
  margin-top: 5px;
}</style>