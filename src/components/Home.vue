<template>
    <div class='row'>
        <div id='home' class="col-sm-12 text-center">
            <div class="background">
                <h1>欢迎大家品尝pizza</h1>
                <h2>这里有你喜欢的pizza</h2>
                <button @click="goToMenu" class="btn btn-success">Let's order</button>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
    methods:{
        goToMenu(){
            this.$router.push('/menu')
        }
    }
}
</script>

<style>
    #home{
        background:url('../../src/assets/pizza.jpg');
        background-size: cover;
        height: 85vh;
        padding: 10%;
    }
    h1,h2{
        margin: 6%;
    }
    .background{
        background: #eee;
        opacity: 0.8;
        max-width: 70vw;
        margin: 0 auto;
        padding: 20px 0;
    }
    .col-sm-12{
        max-width: 97%;
        margin: 0 auto;
    }
</style>
