<template>
  <div>
    <div>
      <div>
        <div id="apps">{{aboutme}}</div>
      </div>
      <div>
        <div class="about-me">
          <p>Hello!</p>
          <p>My name is Setiawan I'm a 21 years old Web Developer based in Bandung. I describe myself as a developer who loves coding, open source, and the web platform. Currently I'm working at a company called Chatbiz, as a Frontend Web Developer.</p>
          <p>In my spare time I like to create and contribute to open source projects. That helps me to learn a lots of new stuff, grow as a developer and support other open source projects. I love travelling and discovering new places.</p>
        </div>
      </div>
      <div class="my-skils">
        <img class="my-skils-image" src="../assets/skils.png" alt />
      </div>
    </div>
    <div>
      <div class="my-portofolio"> 
        <b-container>
          <b-row>
            <b-col md=6>
              <h1>asd</h1>
            </b-col>
            <b-col md=6>
              <h1>asd</h1>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutme: 'This is Me'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#apps {
  font-family: sans-serif;
  font-size: 28px;
  padding: 50px 50px;
}

.about-me {
  font-size: 20px;
  font-family: sans-serif;
  text-align: left;
  padding-right: 15%;
  padding-left: 15%;
}

.my-skils {
  padding-right: 15%;
  padding-left: 15%;
}

.my-skils-image {
  width: 100%;
}
</style>
