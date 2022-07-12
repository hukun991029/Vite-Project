<script lang="ts" setup></script>
<template>
    <div class="container">
        <TrendMarker text="营业额"> </TrendMarker>
        <TrendMarker text="销售额" type="down" downIconColor="green" :reverseColor="true" />
    </div>
</template>
<style lang="scss" scoped>
.container {
    display: flex;
}
</style>
