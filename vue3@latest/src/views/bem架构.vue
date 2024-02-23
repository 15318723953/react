<template>
    <div class="zzx-box">
        <div class="zzx-menu">
            menu
        </div>
        <div class="zzx-box__right">
            <div class="zzx-header">
                header
            </div>
            <div class="zzx-content">
                content
            </div>
        </div>

    </div>
</template>

<script setup lang='ts'>

</script>
<style scoped lang='scss'>
@include b(box) {
    @include bfc;
    width: 100%;
    display: flex;

    @include b(menu) {
        background: red;
        display: flex;
        flex-direction: column;
        min-width: 200px;
        height: 100%;
    }

    @include e(right) {
        display: flex;
        flex: 1;
        flex-direction: column;

        @include b(header) {
            height: 50px;
            background: blue;
        }

        @include b(content) {
            flex: 1;
            background: #ccc;
        }
    }

}
</style>