<script lang="tsx">
import { defineComponent, ref, PropType } from 'vue';
import type { MenuType } from './type';
export default defineComponent({
    name: 'InfinityMenu',
    props: {
        menuList: {
            type: Array as PropType<MenuType[]>
        }
    },
    setup(props, context) {
        const renderMenu = (data: MenuType[]) => {
            // return data.map((item) => {
            //     let icon = `a-icon-${item.icon}`;
            //     let slots = {
            //     }
            // });
        };
        return () => {
            return renderMenu(props.menuList!);
        };
    }
});
</script>
<style lang="scss" scoped></style>
