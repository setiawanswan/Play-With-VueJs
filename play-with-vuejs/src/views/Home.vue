<template>

  <div id="app">
    <!-- Expression -->
    {{name + " Ramadhan "}} 
    <!-- Ternary Operator with Boolean  -->
    {{man ? 'He is man' : 'He is gay' }}
    <!-- HTML -->
    <p>
      <span v-html="raw"></span>
    </p>
    <!-- Methode in Js -->
    {{quote.split(' ').reverse().join(' ')}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Header,
    Navbar
  },
  data(){
    return{
      quote : 'Kasur rusak',
      name : 'Hilman',
      man: true,
      raw: '<p>Mantap Jaya !!</p>'
    }
  }
};
</script>
