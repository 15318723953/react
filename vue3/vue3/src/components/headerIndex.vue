<!--  -->


<script lang="ts" setup>
import PartnerShopHeader from "../components/PartnerShopHeader/index.vue";
import { reactive, onMounted } from 'vue'
import _axios from '../axios/index'
const data = reactive({
  show: false
})
onMounted(() => {
  userAuth()
},)
const userAuth = () => {
  _axios.user({
    url: "/user/auth",
    method: "get",
  }).then((res) => {
    if (res.data == 0) {
      data.show = true;
    }
  });
}
</script>
<template>
  <div>
    <PartnerShopHeader></PartnerShopHeader>
  </div>
</template>
<style lang='scss' scoped>
* {
  color: #333;
  margin: 0px;
  padding: 0px;
}

.banner_lg_y {
  width: 100%;
  max-height: 325px;
  overflow: hidden;

  img {
    border: none;
    display: inline-block;
    max-width: 100%;
    height: auto;
    -ms-interpolation-mode: bicubic;
    _width: auto;
  }
}

#layoutHeader {
  width: 85%;
  margin: 0px auto;
  min-height: 48px;
  padding-left: 7.5%;
  padding-right: 7.5%;
  border-bottom: 1px solid #ccc;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #fff;

  .brand {
    float: left;
  }

  .nav {
    float: left;
    width: 40%;
    -js-display: flex;
    display: flex;
    margin-left: 5%;

    a {
      flex: 1;
    }
  }

  .usermessage {
    line-height: 30px;
    float: right;
    margin-right: 2%;
    width: 10%;

    .heahPortrai {
      float: left;
    }

    img {
      width: 30px;
      height: 30px;
    }
  }
}

.breadcrumb {
  padding: 20px;
  padding-left: 6.5%;
  background: #fff;
}</style>