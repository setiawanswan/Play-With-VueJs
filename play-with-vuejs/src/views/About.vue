<template>
<div>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    <HelloWorld />
  </div>
</div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: "home",
  components:{
     HelloWorld,
  },
  data(){
    return{

    }
  }
}
</script>
