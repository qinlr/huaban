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
                <li class="smallimg fl">
                    <img src="../../../../static/imgs/2.jpg" alt="">
                    <div class="smallimg-bottom">
                        <p class="smallimg-title">那些漂亮[封面]</p>
                        <p class="smallimg-fans">423采集 2133粉丝</p>
                        <p class="smallimg-type">画板</p>
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
        .smallimg{
            .w(116);
            img{
                width: 100%;
            }
            .smallimg-bottom{
                background: @fl-bg-color;
                .padding(8,8,8,8);
                color:@fl-ft-color;
                .fs(16);
                p{
                    .padding(0,0,3,0);
                }
                .smallimg-title{
                    color: @h-ft-color;
                }
                .smallimg-fans{
                    color: #999;
                    .fs(12);
                }
                .smallimg-type{
                    .fs(18);
                    color: #d0d0d0;
                }
            }
        }
    }    
    .padding(10,8,10,8);
}
</style>


