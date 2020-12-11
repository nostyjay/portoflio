<template>
    <footer>
        <div class="footerContent">
            <p><span>email:</span> noah.johnson1997@outlook.com</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style>
    footer{
        width: 100%;
        display: flex;
        justify-content: center;
        height: 40px;
        line-height: 40px;
        background-image: linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.7));
        position: absolute;
        bottom: 0;
        left: 0;
    }
    .footerContent{
        width: 40%;
        display: flex;
        justify-content: space-around;
    }
    .footerContent span{
        color: rgb(0, 200, 200);
    }
</style>