<template>
  <div>
    <div id="app">
      <ul>
        <li 
          v-for="member in members"
          :key="member.id"
        >
        {{member.name}} 
        </li>
      </ul>

      <h2>Filter</h2>

      <ul>
        <li 
          v-for="member in members"
          :key="member.id"
        >
        {{member.name.toUpperCase()}} 
        </li>
      </ul>
    </div>
    <div id="submit">
      <input type="text" v-on:keyup.13="cekidot">
      <button v-on:click="boom('pesan berdarah')"> Click Me !</button>
      <a href="" v-on:click.prevent="cekidot">Link</a> 
      <!-- with prevent remove original character so with prevent the link not refresh -->
      <a  v-bind:href='url_youtube'>Launch to google</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members : [
        {name : 'Jhon' , age: 10},
        {name : 'Simon', age: 21},
        {name: 'tatoo' , age: 22}
      ],
      url_youtube : 'https://www.youtube.com/'
    };
  },
  methods : {
    boom : function(text){
      console.log('Boom')
      alert('Boom' + text)
    },
    cekidot : function(){
      console.log('cekidot terpanggil')
    }
  }
};
</script>
