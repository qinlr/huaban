<template>
    <div class="findlist">
        <div class="findtop"></div>
        <div class="findbottom">
            <div class="title">为您推荐</div>
            <ul>
                 <!-- <li v-for="(item,index) in list" :key="index" :class="index%2?'smallimg fl':'bigimg fl'">
                    <img :src="`http://hbimg.b0.upaiyun.com/${item.cover.key}`" alt="">
                    <div class="bottom">
                        <p class="smallimg-title">{{item.title}}</p>
                        <p class="smallimg-fans">{{item.pin_count}}采集 {{item.follow_count}}粉丝</p>
                        <p class="smallimg-type">画板</p>
                    </div>
                </li> -->
                <li class="bigimg fl">
                    <img src="http://hbimg.b0.upaiyun.com/ecdbc3230d30b6c49d1f7ce391d63e271aad990c7083-yuD8Cr" alt="">
                    <div class="bigimg-bottom">
                        <p class="fl type">画板</p>
                        <div class="fl info">
                            <p class="info-title">吃货福利</p>
                            <p class="info-bottom">423采集 2133粉丝</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'FindList',
    data(){
        return {
            name:'这里是findlist',
            list:[],
            liclass:'bigimg fl'
        }
    },
    methods:{
        // getclass(index){
        //     if(index%2){
        //         this.liclass='bigimg fl'
        //     }else{
        //         this.liclass='smallimg fl'
        //     }
        // },
        getlist(){
            //http://huaban.com/all/?max=2124271960&limit=20&wfl=1
            //https://www.duitang.com/napi/blog/list/by_category/?start=0&include_fields=sender%2Calbum%2Clike_count%2Cmsg&limit=24&cate_key=5017d172705cbe10c0000007&path=&_=1542288113268
            this.$axios.get('/api/',{params:{limit:12,page:2}})
            .then((res)=>{
                console.log(111);
                this.list=res.recommends;
                console.log(this.list)
            })
            .catch((err)=>{
                console.log(222);
                console.log(err);
            })
        }
    },
    created(){
        this.getlist();
    }
}
</script>
<style lang="less" scoped>
@import url('../../../style/main.less');
.findlist{
    .findbottom{  
        ul{
            li{
                .margin(0,2,0,2)
            }
        }
        .title{
            width: 100%;
            text-align: center;
            .h(30);
            .lh(30);
            .fs(14);
        }
        .bigimg{
            .w(235);
            .h(235);
            position: relative;
            color: #fff;
            border: 1px solid red;
            img{
                width: 100%;
                height: 100%;
            }
            .bigimg-bottom{
                .fs(18);
                .padding(0,0,10,0);
                position: absolute;
                bottom: 0;
                left: 0;
                .type{
                    .padding(0,10,0,10);
                    .w(37);
                    transform: rotate(-180deg);
                    border-left: 1px solid #fff;
                }
                .info{
                    .padding(0,0,0,10);
                    .info-title{
                        font-weight: 500;
                    }
                    .info-bottom{
                        .fs(14);
                    }
                }
            }
        }
    }    
    .padding(10,8,10,8);
}
</style>


