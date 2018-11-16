<template>
    <div class="findlist">
        <div class="findtop">
            <div class="title">大家正在关注</div>
            <ul class="clearfix">
                <!-- style="background-image:url('item.bgimg')" -->
                <li v-for="(item,index) of followlist" :key="index">{{item.name}}</li>
            </ul>
        </div>
        <div class="findbottom">
            <div class="title">为您推荐</div>
            <ul class="clearfix">
                  <li v-for="(item,index) in list" :key="index" :class="((index+1)%4==1||(index+1)%4==0)?'bigimg':'smallimg'">
                    <img :src="`http://hbimg.b0.upaiyun.com/${item.cover.key}`" alt="">
                    <div class="img-bottom">
                        <div class="info">
                            <p class="info-title">吃货福利</p>
                            <p class="info-bottom">423采集 2133粉丝</p>
                        </div>
                        <p class="type">画板</p>
                    </div>
                </li> 
            </ul>
            <div class="more" @click="getmore">加载更多</div>
        </div>
     </div>
</template>
<script>
import Vue from 'vue';
import { Toast,InfiniteScroll,Indicator  } from 'mint-ui';
Vue.use(InfiniteScroll);
export default {
    name:'FindList',
    data(){
        return {
            followlist:[{name:'竹编',bgimg:'http://hbimg.b0.upaiyun.com/0016532c2d84c7d52b4264bba7ee0370aecce4b9829c3-1JashA_sq236bl4'},
            {name:'美食手机壁纸',bgimg:'http://hbimg.b0.upaiyun.com/fecb71251b19d000b11c36a971a95771cbfb44cd1bdae-gKwoAm_sq236bl4'},
            {name:'夜景',bgimg:'http://hbimg.b0.upaiyun.com/06e8f29eadb8edd8904ebb0e5e5a2e66618b18f618a08-QuVGbB_sq236bl4'},
            {name:'CG人设',bgimg:'http://hbimg.b0.upaiyun.com/e17678138c9c92c48339fd7be2ea03008c1e9bc93aa1c-iusGwO_sq236bl4'},
            {name:'包装设计',bgimg:'http://hbimg.b0.upaiyun.com/61ba7888d49cb049c3709a4b90eea02808bb7bfd13412-HrhqoM_sq236bl4'},
            {name:'手机菜单界面',bgimg:'http://hbimg.b0.upaiyun.com/459508e4fbbbfdf489b5879c95c07537d72913132a1c9-bLFkVN_sq236bl4'}],
            list:[],
            page:2
        }
    },
    methods:{
        getlist(){
            //http://huaban.com/all/?max=2124271960&limit=20&wfl=1
            //https://www.duitang.com/napi/blog/list/by_category/?start=0&include_fields=sender%2Calbum%2Clike_count%2Cmsg&limit=24&cate_key=5017d172705cbe10c0000007&path=&_=1542288113268
            this.$axios.get('/api/',{params:{limit:12,page:this.page}})
            .then((res)=>{
                // console.log(111);
                this.list=this.list.concat(res.recommends);
                 this.page++;
                console.log(this.list)
            })
            .catch((err)=>{
                // console.log(222);
                console.log(err);
            })
        },
        getmore(){
            this. getlist()
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
    .title{
            width: 100%;
            text-align: center;
            .h(30);
            .lh(30);
            .fs(14);
            color: @fl-ft-color;
            .margin(0,0,10,0);
        }
    .findtop{
        .padding(0,0,10,0);
        ul{
            li{
                float: left;
                .w(116);
                color: #fff;
                background-image:url('http://hbimg.b0.upaiyun.com/0016532c2d84c7d52b4264bba7ee0370aecce4b9829c3-1JashA_sq236bl4'); 
                .h(60);
                text-align: center;
                .lh(60);
                .margin(1,1,1,1);
                .fs(14);
            }
        }
    }
    .findbottom{  
        ul{
            li{
                .margin(0,2,0,2);
                float: left;
            }
        }
        
        .more{
             width: 100%;
            text-align: center;
            .h(44);
            .lh(44);
            .fs(18);
            color: @fl-ft-color;
        }
        .bigimg{
            .w(235);
            .h(235);
            position: relative;
            color: #fff;
            // border: 1px solid red;
            img{
                width: 100%;
                height: 100%;
            }
            .img-bottom{
                .fs(18);
                .padding(0,0,10,0);
                position: absolute;
                bottom: 0;
                left: 0;
                .type{
                    float: left;
                    .padding(0,10,0,10);
                    .w(37);
                    transform: rotate(-180deg);
                    border-left: 1px solid #fff;
                }
                .info{
                    float: right;
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
        .smallimg{
            .w(116);
            .h(235);
            img{
                width: 100%;
                .h(116);
            }
            .img-bottom{
                background: @fl-bg-color;
                .padding(8,8,8,8);
                color:@fl-ft-color;
                .fs(16);
                .info{
                     .info-title{
                    color: @h-ft-color;
                    }
                    .info-bottom{
                        color: #999;
                        .fs(12);
                    }
                }
                p{
                    .padding(0,0,3,0);
                }
               
                .type{
                    .fs(18);
                    color: #d0d0d0;
                }
            }
        }
    }    
    .padding(10,8,10,8);
}
</style>


