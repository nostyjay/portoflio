<template>
  <div id="app" class="background">
    <div id="nav">
      <router-link class="links" to="/">Home</router-link>
      <router-link class="links" to="/about">About</router-link>
      <router-link class="links" to="/myWork">My Work</router-link>
      <router-link class="links" to="/contact">Contact</router-link>
    </div>
    <Footer/>
    <router-view/>
  </div>
</template>

<script>
import Footer from '../src/components/footer.vue'
export default {
  name: 'app',
  components:{
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&family=Xanh+Mono&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

html, body, #app{
    height: 100%;
}

h1,h2,h3,h4,h5,h6,p{
    margin-bottom: 16px;
}
    #nav{
        position: absolute;
        display: flex;
        top: 0;
        width: 30%;
        justify-content: space-around;
        height: 40px;
        line-height: 40px;
        background-color: black;
        opacity: 0.7;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    #nav  .links{
        font-family: "Poppins", sans-serif;
        text-decoration: none;
        color: white;
     }
</style>
