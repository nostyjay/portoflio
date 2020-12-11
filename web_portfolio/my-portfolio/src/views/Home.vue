<template>
    
    <div id="home" class="background">
        <div class="homeInfo">
            <h1>Hello, I'm <span>Noah Johnson</span><br> and I'm a Front-End Web Developer!</h1>
            <p>Specializing in JavaScript and its associated frameworks, I am dedicated to developing functional and beautiful websites and mobile applications for your business.</p>
        </div>
    </div>
</template>

<script>

export default {
}
</script>

<style>
    .background{
        width: 100%;
        height: 100%;
        background-image: url(../assets/developer.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
        color: white;
    }
    .homeInfo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-image: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.7));
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        width: 50%;
        height: 25%;
        margin: 0 auto;
    }
    .homeInfo h1 span{
      color: rgb(0, 200, 200)
    }
    .homeInfo h1, h2, p{
        margin-left: 30px;
    }

    .contactSmall{
      width: 60%;
      display:flex;
      margin: 0 auto;
      justify-content: space-between;
    }
</style>