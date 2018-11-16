<template>
<div class="home">
    <div class="right fr" @click="change">
            <i :class="icon"></i>
        </div>
        <div class="search">
            <div class="logo">
                <img src="../../../../static/imgs/logo@2x.png" alt="">
            </div>
            <div class="slogan">
                <img src="../../../../static/imgs/info_dis_slogan.png" alt="">
            </div>
            <div class="input">
                <input type="text">
                <i class="fa fa-search"></i>
            </div>
            <div class="Slide">
                <i class="fa fa-angle-up"></i>
                向上滑动页面
            </div>
        </div>
    <div class="bg">
    </div>
     <nav v-show="navShow">
        <TopNav></TopNav>
    </nav>
</div>
</template>
<script>
import TopNav from '../../common/TopNav';
export default {
    name:'Home',
    data(){
        return {
            navShow:false,
            icon:'fa fa-bars'
        }
    },
    components:{TopNav},
    methods:{
        change(){
            this.navShow=!this.navShow
            if(this.navShow){
                this.icon='fa fa-times'
            }else{
                this.icon='fa fa-bars'
            }
        }
    },
    created(){
    }
}
</script>
<style lang="less" scoped>
@import url('../../../style/main.less');
.home{
    position: relative;
    .bg{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 12;
        background-image:url('../../../../static/imgs/bg.png') ;
        background-size:100% ;
    }
    .right{
        .w(44);
        .h(44);
        .lh(44);
        text-align: center;
        .fs(24);
        color: #fff;
        position: relative;
        z-index: 20;
    }
    
}
.search{
    .w(375);
    .h(500);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 13;
    .logo{
        .w(130);
        .h(40);
        margin: 0 auto;
        img{
            width: 100%;
        }
    }
    .slogan{
        text-align: center;
        .padding(20,0,20,0);
    }
    .input{
        .w(300);
        .h(40);
        margin: 0 auto;
        position: relative;
        i{
            .fs(22);
            color: #ccc;
            position: absolute;
            .right(10);
            .top(18);
        }
        input{
            .w(300);
            .h(40);
            .bdradius(5);
        }
    }
    .Slide{
        .fs(18);
        text-align: center;
        position: absolute;
        .bottom(40);
        left: 50%;
        transform: translateX(-50%);
        color: #fff;
        i{
            display: block;
            .fs(40);
        }
    }
}
nav{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 14;
        background: rgba(51,51,51,.95);
    }
</style>


