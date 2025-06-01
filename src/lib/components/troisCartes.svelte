<script>
    import card1 from "$lib/assets/home/HommeCuisine.webp";
    import card2 from "$lib/assets/home/FemmeMeditation.webp";
    import card3 from "$lib/assets/home/TroisPersonnesPoteries.webp";
</script>

<div class="cartesCanvas">
    <div class="carte carte1">
        <img src={card1} alt="Une famille s'amuse en faisant une bataille d'oreiller">
        <p class="text text1">Vous reconnecter à vous-même</p>
    </div>
    <div class="carte carte2">
        <p class="text text2">Découvrir, créer, respirer autrement</p>
        <img src={card2} alt="Un couple rigole sur un tapis de yoga">
    </div>
    <div class="carte carte3">
        <img src={card3} alt="Des nageurs dans un océan célèbrent une victoire">
        <p class="text text3">Sortir de la routine numérique</p>
    </div>
</div>

<style>

.cartesCanvas{
    position: relative;
    width: 70%;
    height: 35rem;
}

.carte{
    position: absolute;
    display: flex;
    flex-direction: column;
}

.carte > img{
    box-shadow: 5px 5px 20px 2px rgba(0,0,0,0.36);
    border-radius: 15px;
    height: 25rem;
    width: 17rem;
    object-fit: cover;
}

.carte1 > img{
    transform:  rotate(-15deg);
}

.carte3 > img{
    transform: rotate(15deg);
}

.text{
    color: var(--orangeBwhat);
    font-size: 1rem;
    width: 80%;
    z-index: 11;
    font-weight: bold;
}

.text1, .text3{
    position: absolute;
    bottom: -5rem;
}

.text1{
    left: -10%;
}

.text3{
    left: 10%;
    text-align: right;
}

.text2{
    position: absolute;
    top: -5rem;
    text-align: center;
    width: 100%;
}

.carte1{
    top: 50%;
    left: 30%;
    z-index: 9;
    transform: translate(-50%, -50%);
}

.carte2{
    top: 45%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
}

.carte3{
    top: 50%;
    left: 70%;
    z-index: 9;
    transform: translate(-50%, -50%);
}

@media screen and (max-width: 768px) {
    .cartesCanvas{
        width: 90%;
    }

    .carte > img{
        height: 15rem;
        width: 9rem;
    }

    .text{
        width: 105%;
    }

    .carte1{
        top: 50%;
        left: 20%;
    }

    .carte2{
        top: 48%;
    }

    .carte3{
        top: 50%;
        left: 80%;
    }
}

</style>