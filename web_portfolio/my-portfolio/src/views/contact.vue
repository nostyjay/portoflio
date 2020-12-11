<template>
    <div id="contact" class="contact">
        <h1>contact me:</h1>
        <div class="contactMethod">
            <h3><span>Email:</span></h3>
            <p>noah.johnson1997@outlook.com</p>
        </div>
        <div class="contactMethod">
            <h3><span>LinkedIn:</span></h3>
            <p>www.linkedin.com/in/noah-johnson-frontendev</p>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style>
  .contact{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 80%;
    width: 60%;
    margin-top: 10px;
    background-image: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.7));
    text-align: center;
    padding: 50px;
  }
  .contactMethod{
      width: 50%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
  }
  .contactMethod h3 span{
      color: rgb(0, 200, 200)
  }
</style>