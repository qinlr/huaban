<template>
    <div class="find">
        <FindList></FindList>
    </div>
</template>
<script>
import FindList from './FindList'
export default {
    name:'Find',
    data(){
       return {
            name:'这里是find'
       }
    },
    components:{FindList}
}
</script>
<style lang="less" scoped>
@import url('../../../style/main.less');
.find{
    // background: @bg-color;
    .padding(45,0,0,0);
}
</style>




