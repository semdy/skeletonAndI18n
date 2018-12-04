<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
 
    <h3>{{$t("message.hello")}}</h3>

    <a @click="change('en')">英文</a>

    <a @click="change('zh')">中文</a>
    
  </div>
</template>

<script>
import { setup } from "./../locales/index.js";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted (){
    let h = this.$i18n.t("message.hello") ;
    let hh = i18n.t("message.hello")
    console.log(h,hh);
  },
  methods:{
    change (language){
      setup(language)
    }
  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  margin: 0 20px;
  cursor: pointer;
}
</style>
