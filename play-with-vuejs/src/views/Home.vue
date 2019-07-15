<template>
  <div id="app">
    Number {{MixNumberOne}} - Number {{MixNumberTwo}}
  </div>
</template>

<script>

export default {
  data(){
    return{
      MixNumberOne : 2,
    }
  },
  computed: {
    MixNumberTwo : function(){
      return this.MixNumberOne + 2
    }
  }
};
</script>
