<template>
<div id="about">
  <div v-if="done">
    {{mybiodata}}
  </div>
  <div v-else>
    maaf donenya salah
  </div>
  <!-- v-if -->
  <div v-show="!done">
    {{ mybiodata }} 
  </div> 
  <!-- v-show hanya tampil sekali saja jika dia false maka CSS nya akan display none-->
</div>
</template>

<script>
export default {
  data(){
    return{
      nama : "Setiawan",
      umur : 100,
      biodata : '',
      done: true
    }
  },
  computed: {
    mybiodata : {
      get : function(){
        return this.nama + " umurnya " + this.umur
        },
      set : function(params) {
        let credential = params.split(' ')
        this.nama = credential[0]
        this.umur = credential[1]
        }
      }
    }
  }
</script>
