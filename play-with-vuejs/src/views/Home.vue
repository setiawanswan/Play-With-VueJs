<template>
  <div class="home">
    <Navbar/>
    <Header/>
    <HelloWorld/>
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
  }
};
</script>
