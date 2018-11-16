<template>
    <div class="topnav">
        <ul>
            <li class="rgbn">
                <button class="regbtn">注册</button>
                <button class="loginbtn">登录</button>
            </li>
            <li v-for="(item,index) in list" :key="index">
                {{item}} <i class="fa fa-angle-right fr"></i>    
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'TopNav',
    data(){
        return {
            list:['最新','热门','发现']
        }
    }
}
</script>
<style lang="less" scoped>
@import url('../../style/main.less');
.topnav{
    .w(375);
    background: rgba(51,51,51,.95);
    // background: @h-ft-color;
    position: fixed;
    z-index: 19;
    .top(46);
    
    ul{
        .rgbn{
            .padding(20,20,20,20);
            .h(85);
            button{
                display: inline-block;
                .h(36);
                .lh(36);
                .fs(16);
            }
            .regbtn{
                .w(190);
                background: #E53E49;
                text-align: center;
                // box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 1px 0 rgba(255,255,255,.3);
                // text-shadow: 0 -1px 0 rgba(0,0,0,.1);
                color: #fff;
                .margin(0,10,0,0);
                border: 1px solid #C90000;
            }
            .loginbtn{
                .w(110);
                border:1px solid #D9D9D9;
                color: @h-ft-color;
                .margin(0,0,0,7);
            }
        }
        //li
        li{
            border-bottom:1px solid #3B3B3B; 
            // border-shadow:0 1px 1px #363636 inset; 
            .padding(0,20,0,20);
            .h(45);
            .lh(45);
                .fs(16);
                color: @a-ft-color;
                i{
                    .lh(45);
                }
        }
    }
}
</style>


