<template>
    <div id="about" class="about">
      <title>about</title>
    <h1>About me:</h1>
    <div class="aboutContent">
      <div class="degree">
        <h3>Degree:</h3>
        <p><span>+</span> Informatics</p>
        <p><span>+</span> Media Arts & Science: Web Design and Development</p>
        <h3>Skills:</h3>
        <div class="skills">
          <div class="skills1">
            <p><span>+</span> Vue.js</p>
            <p><span>+</span> Ionic Framework</p>
            <p><span>+</span> Angular</p>
          </div>
          <div class="skills2">
            <p><span>+</span> HTML, CSS, JS</p>
            <p><span>+</span> TypeScript</p>
            <p><span>+</span> C#</p>
           </div>
        </div>
        
      </div>
      <div class="picture">
        <img style="width:250px;" src="../assets/PC201.jpg" alt="my picture">
      </div>
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style>
  .about{
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 80%;
    width: 60%;
    margin-top: 10px;
    background-image: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.7));
  }

  .about h1{
    font-family: "Poppins", sans-serif;
    margin-left: 100px;
    margin-top: 30px;
  }
  .aboutContent{
    margin-left: 50px;
    display: flex;
    justify-content: space-between;
   
  }
  .aboutContent h3{
    border-bottom: 2px solid white;
    width: 30px;
    margin-top: 30px;
  }
  .degree p span{
    color: rgb(0, 200,200);
  }
  .picture{
    margin-right: 50px;
  }
  .picture img{
    border-radius: 20px;
  }
  .skills{
    display: flex;
    width: 400px;
    justify-content: space-between;
  }
</style>
