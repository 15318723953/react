<template>
    <div class="zzx-card">
        <header>
            <div>标题</div>
            <div>复标签</div>
        </header>
        <section>
            内容
        </section>
    </div>
</template>

<script setup lang='ts'>

</script>
<style scoped lang='scss'>
$border: #ccc;

@include b(card) {
    border: 1px solid $border;
    width: 400px;

    header {
        display: flex;
        justify-content: space-between;
        padding: 5px;
        border-bottom: 1px solid $border;
    }
    section{
        min-height: 300px;
        padding: 5px;
    }
}
</style>