        <script>
        export default {
            props:{
                card: Object
            }
        }
        </script>
<template lang="">
    <div class="card">
        <img :src="card.card_images[0].image_url" alt="">
        <h4>{{card.name}}</h4>
        <span >{{card.archetype}}</span>
    </div>
</template>
<style lang="scss">
.card{
    background-color: bisque;
    width: calc(100% / 5 );
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 1rem;
    img{
        width: 80%;
    }

    h4{
        font-weight: 600;
        padding: 2rem;
    }
}
    
</style>