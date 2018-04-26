<template> 
 <div> 
  <div style="padding:10px 0;"> 
   <a-player :music="songList" :showlrc="3" :narrow="false" theme="#b7daff" mode="circulation" v-if="flag" listmaxheight='96px' ref="player"></a-player> 
  </div> 
    
 </div> 
</template> 
  
<script> 
import VueAplayer from 'vue-aplayer'
  
export default { 
 components: { 
  //别忘了引入组件 
  'a-player': VueAplayer 
 }, 
 data () { 
  return { 
   flag:false, 
   musicList:'', 
   songList:[]
  } 
 }, 
 async mounted () { 
  //异步加载，先加载出player再使用 
  await this.init(); 
  let aplayer = this.$refs.player.control; 
  aplayer.play(); 
 }, 
 methods:{ 
  async init () { 
   //这边是引入了axios然后使用的get请求的一个音乐列表接口 
   //这边url随大家更改了 
   let url = ''; 
   //以下就是这边对请求的一个处理，看接口了 
      
      // var object1={};
      // var object2={};
      // var object3={};
      // object1.title = '朋友'; 
      // object1.author = 'shulan'; 
      // object1.url = 'http://www.170mv.com/kw/other.web.ra01.sycdn.kuwo.cn/resource/n2/128/44/10/530204968.mp3'; 
      // object1.pic = ''; 
      // object1.lrc = ''; 
      // object2.title = '意外'; 
      // object2.author = 'shulan'; 
      // object2.url = 'http://up.mcyt.net/md5/53/MzYwMjM5OA_Qq4329912.mp3'; 
      // object2.pic = ''; 
      // object2.lrc = ''; 
      // object3.title = '勉为其难'; 
      // object3.author = 'shulan'; 
      // object3.url = 'http://sc1.111ttt.com/2016/5/10/29/203292206532.mp3'; 
      // object3.pic = ''; 
      // object3.lrc = ''; 
      // this.arr.push(object1);
      // this.arr.push(object2);
      // this.arr.push(object3);

      /*arr[0].obj.title = '朋友'; 
      arr[0].obj.author = 'shulan'; 
      arr[0].obj.url = 'http://www.170mv.com/kw/other.web.ra01.sycdn.kuwo.cn/resource/n2/128/44/10/530204968.mp3'; 
      arr[0].obj.pic = ''; 
      arr[0].obj.lrc = ''; 


      arr[1].obj.title = '意外'; 
      arr[1].obj.author = 'shulan'; 
      arr[1].obj.url = 'http://up.mcyt.net/md5/53/MzYwMjM5OA_Qq4329912.mp3'; 
      arr[1].obj.pic = ''; 
      arr[1].obj.lrc = ''; 



      arr[2].obj.title = '勉为其难'; 
      arr[2].obj.author = 'shulan'; 
      arr[2].obj.url = 'http://sc1.111ttt.com/2016/5/10/29/203292206532.mp3'; 
      arr[2].obj.pic = ''; 
      arr[2].obj.lrc = ''; */

      let obj={}; 
      //url=>歌曲地址 title=>头部 author=>歌手 pic=>写真图片 lrc=>歌词 
      //其中url必须有，其他的都是非必须 
       obj.title = '勉为其难'; 
       obj.author = 'shulan'; 
       obj.url = 'http://sc1.111ttt.com/2016/5/10/29/203292206532.mp3'; 
       obj.pic = ''; 
       obj.lrc = '';

       let obj2={}; 
      //url=>歌曲地址 title=>头部 author=>歌手 pic=>写真图片 lrc=>歌词 
      //其中url必须有，其他的都是非必须 
       obj2.title = '朋友'; 
       obj2.author = 'shulan'; 
       obj2.url = 'http://www.170mv.com/kw/other.web.ra01.sycdn.kuwo.cn/resource/n2/128/44/10/530204968.mp3'; 
       obj2.pic = ''; 
       obj2.lrc = '';  
       this.songList.push(obj);  
       this.songList.push(obj2);  
      //把数据一个个push到songList数组中，在a-player标签中使用 :music="songList" 就OK了 
      

    //因为是异步请求，所以一开始播放器中是没有歌曲的，所有给了个v-if不然会插件默认会先生成播放器，导致报错(这个很重要) 
    this.flag = true; 
  } 
 } 
} 
</script> 
  
<style scoped> 
</style>column-width: 