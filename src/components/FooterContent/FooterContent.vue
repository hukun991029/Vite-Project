<script lang="ts" setup></script>
<template>
    <footer>
        <div class="footer-content">
            <p class="link-info">
                <span>Ant Design Pro</span>
                <i class="iconfont icon-github-fill"></i>
                <span>Ant Design</span>
            </p>
            <p><i class="iconfont icon-c"></i><span>2022 蚂蚁集团体验技术部出品</span></p>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
.footer-content {
    margin: 48px 0 24px;
    padding: 0 16px;
    p {
        display: flex;
        justify-content: center;
        align-items: center;
        span,
        i {
            color: rgba(0, 0, 0, 0.45);
        }
        i {
            margin: 0 40px;
        }
    }
    .link-info {
        span,
        i {
            cursor: pointer;
            &:hover {
                color: rgba(0, 0, 0, 0.85);
                transition: all 0.3s;
            }
        }
    }
    .icon-c {
        margin: 0 12px;
    }
}
</style>
