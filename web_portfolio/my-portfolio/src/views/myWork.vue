<template>
    <div id="about" class="about">
      <title>about</title>
    <h1>My Work:</h1>
    <div class="workContent">
      <div class="work">
        <h3>Progressive Web Applications (optimized for mobile devices):</h3>
        <p><span>+</span> <a target="blank" href="https://in-info-web4.informatics.iupui.edu/~nj16/themovieforum/">The Movie Forum</a></p>
        <p><span>+</span> <a target="blank" href="https://in-info-web4.informatics.iupui.edu/~nj16/api-practice/">The Meal App</a></p>
        <h3>Web Demo Templates</h3>
        <div class="skills">
          <div class="skills1">
            <p><span>+</span> <a target="blank" href="https://in-info-web4.informatics.iupui.edu/~nj16/junglecook/">The Jungle Cook</a></p>
          </div>
        </div>
        <h3>Experience:</h3>
        <p><span>+</span> IT Application Developer Intern, Allegion PLC</p>
        <p><span>+</span> Assistant General Manager, Taco Bell</p>
        <p><span>+</span> Logistics Associate, Amazon Logistics</p>
        <h3>Github:</h3>
          <p><span>+</span><a target="blank" href="https://github.com/nostyjay/portoflio"> nostyjay</a></p>
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
  .workContent{
    margin-left: 50px;
    display: flex;
    justify-content: space-between;
   
  }
  .workContent h3{
    border-bottom: 2px solid white;
    width: 600px;
    margin-top: 30px;
  }
  .work p a{
      color: white;
  }
  .work p span{
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