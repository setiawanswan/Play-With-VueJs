<template>
  <div>
    <div id="app">Number {{MixNumberOne}} - Number {{MixNumberTwo}}</div>
    <div id="member">
      <ul>
        <li 
          v-for="member in members"
          :key="member"
        >
          {{member.nama}} {{member.umur}}
        </li>
      </ul>
    </div>
    <div id="crew">
      <ul>
        <li 
          v-for="(key, crew) in crews"
          :key="crew"
        >
        {{crew}} - {{key}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      MixNumberOne: 2,
      members : [
        {nama: "Ardhim", umur: 10},
        {nama: "Kresna", umur: 11},
        {nama: "Hasyim", umur: 12}
      ],
      crews : {
        nama : "Sultan", 
        umur : 12,
        hobi : "mancing"
      }
    };
  },
  computed: {
    MixNumberTwo: function() {
      return this.MixNumberOne + 2;
    }
  }
};
</script>
