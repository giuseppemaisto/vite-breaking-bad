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
    width: calc(100% / 5 );
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img{
        width: 80%;
    }
}
    
</style>