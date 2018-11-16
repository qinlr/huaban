<template>
   <div id="Header">
        <div class="header">
        <div class="left fl" v-show="!Show">
            <a href=""><img src="../../../static/imgs/huaban_logo.png" alt=""></a>
            <div class="left-title fr">发现</div>
        </div>
        <form class="fl">
            <a class="close"  v-show="Show" @click="Show=false"><i class="fa fa-times"></i></a>
            <input type="text" v-model="search"  v-show="Show">
            <a class="search"  v-show="true" @click="Show=!Show"><i class="fa fa-search"></i></a>

        </form>
        <div class="right fr" @click="change">
            <i :class="icon"></i>
        </div>
    </div>
    <div class="nav">
        <transition 
            enter-active-class='animated fadeInDownBig'
            leave-active-class='animated fadeOutUpBig'
        >
            <TopNav v-show="navShow"></TopNav>
        </transition>
    </div>
    
    
   </div>
</template>
<script>
import TopNav from './TopNav';
export default {
    name:'Header',
    data(){
        return {
            name:'这里是header',
            search:'',
            Show:false,
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
    }
}
</script>
<style lang="less" scoped>
@import url('../../style/main.less');
#Header{
    position: fixed;
    z-index: 10;
}
// .nav{
// position: fixed;
//     z-index: 9;
//     .top(46);
// }

.header{
    position: fixed;
    top: 0;
    z-index: 30;
    background: #fff;
    .w(375);
    .h(46);
    border-bottom: 1px solid #ccc;
    color: @h-ft-color;
    .left{
        height: 100%;
        .lh(46);
        .fs(18);
        a{
            display: inline-block;
            .padding(0,0,0,10);
            .w(35);
            height: 100%;
            // .lh(46);
            overflow: hidden;
            img{
                .h(25);
            }
        }
        .left-title{
            .padding(0,0,0,10);
        }
    }
    //from
    form{
        .padding(0,0,0,10);
        display: flex;
        align-items: center;
        .h(46);
        a{
            .fs(22);
             .h(44);
            .lh(44);
            text-align: center;
        }
        .close{
            display: inline-block;
            .w(40);
        }
        .search{
            position: absolute;
            .right(45);
            .w(44);
        }
        input{
            .h(28);
            .w(277);
            border: 1px solid #ddd;
            background: #F3F3F3;
        }
    }
    //right
    .right{
        .w(44);
        .h(44);
        .lh(44);
        text-align: center;
        .fs(22);
    }
}
</style>


