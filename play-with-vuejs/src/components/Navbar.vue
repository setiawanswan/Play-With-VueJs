<template>
  <div>
    <nav>
      <ul>
        <li>
          <a href>Home</a>
        </li>
        <li>
          <a href>Blog</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    $(window).on('scroll', function() {
      if ($(window).scrollTop()) {
        $('nav').addClass('black')
      } else {
        $('nav').removeClass('black')
      }
    })
  }
}
</script>

<style>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 10px 100px;
  box-sizing: border-box;
  transition: 0.5s;
}
nav.black {
  background-color: #FDFEFE;
  height: 80px;
}

nav ul {
  float: right;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  list-style: none;
}

nav ul li a {
  line-height: 60px;
  color: #F1C40F;
  padding: 0px 20px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  font-family: Roboto;
  font-size: 18px;
}
</style>
