<script>
    import  Newsletter  from "$lib/components/newsletter.svelte";
    import IconDescription from "$lib/components/iconDescription.svelte";
    import BoutonLink from "$lib/components/boutonLink.svelte";
    import BoiteCard from "$lib/components/boiteCard.svelte";
    import TroisCartes from "$lib/components/troisCartes.svelte";

    import bwhatSport from "$lib/assets/bwhat-sport-et-bien-etre.webp";
    import vagueTop from "$lib/assets/structure/newsletterBgTop.svg";
    import vagueBottom from "$lib/assets/structure/newsletterBgBottom.svg";
</script>

<svelte:head>
    <title>Bwhat ! Restez connectés à l'essentiel !</title>
</svelte:head>
<main>
    <section class="banner">
        <div>
            <h1>Vivez plus, scrollez moins, grâce à Bwhat</h1>
            <p class="sous-titre">Retrouvez goût au plaisir de la déconnexion</p>
            <div class="banner-button-container">
                <BoutonLink text="En savoir plus" link="/a-propos"/>
            </div>
        </div>
        <img src="https://picsum.photos/1920/1080" alt="Visuel d'une boite avec un effet stylisé">
    </section>
    
    <section class="avantages">
        <IconDescription icon="france" description="Produits made in France"/>
        <IconDescription icon="camion" description="Livraison rapide et suivie"/>
        <IconDescription icon="carte-bancaire" description="Paiement sécurisé"/>
        <IconDescription icon="ecologie" description="Box eco-conçue"/>
    </section>

    <section class="boites-details">
        <h2>Deux boites, une même envie : prendre soin de vous</h2>
        <div class="boites">
            <BoiteCard image="sport" title="La box Sport & Bien-être" link="/boites/sport-et-bien-etre"/>
            <BoiteCard image="decouverte" title="La box Découverte" link="/boites/decouverte"/>
        </div>
    </section>

    <section class="description">
        <h2>Bwhat c’est une pause simple, douce, nécessaire dans un quotidien souvent trop connecté.</h2>
        <h3>
            Nos boites mensuelles sont conçues pour vous accompagner dans <span class="bolder"> un changement progressif. </span> <br>
            Parce qu’on ne quitte pas son téléphone du jour au lendemain, mais on peut commencer… <span class="bolder">boîte après boîte&nbsp;!</span>
        </h3>
    </section>

    <section class="presentation">
        <h2>Avec Bwhat, vous recevez chaque mois une boite pleine de bonnes idées pour :</h2>
        <TroisCartes/>
    </section>

    
    <section class="vague-container">
        <img src="{vagueTop}" alt="" aria-hidden="true" class="vague">
        <div class="notre-histoire">
            <div class="notre-histoire-img-container">
                <img src="https://picsum.photos/1000/1000" alt="" class="notre-histoire-img" aria-hidden="true">
                <img src={bwhatSport} alt="" class="histoire-boite-png" aria-hidden="true"> 
            </div>
            <div class="notre-histoire-titres">
                <h2>Vous croyez que décrocher des écrans est impossible ?</h2>
                <p>
                    Nous vous prouvons le contraire avec Bwhat !
                    Nos box vous offre une véritable parenthèse, pour vous reconnecter à des activités réelles et enrichissantes.
                </p>
                <div>
                    <BoutonLink text="Découvrez notre histoire" color="var(--blackBwhat)" link="/a-propos"/>
                </div>
            </div>
        </div>
        <Newsletter/>
    </section>
    <img src="{vagueBottom}" alt="" aria-hidden="true" class="vague bottom">

    

</main>

<style>
    main{
        display: flex;
        flex-direction: column;
        gap: 8rem;
    }

    .avantages{
        width: 100%;
        display: flex;
        gap: 1rem;
        margin: auto;
        justify-content: center;
        flex-wrap: wrap;
    }

    .banner{
        width: 100%;
        height: 37.5rem;
        position: relative;
    }

    .banner img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .banner > div{
        display: flex;
        flex-direction: column;
        padding: 5rem 0 5rem 5rem;
        width: 30rem;
        gap: 1rem;
    }

    .sous-titre{
        font-family: var(--sansFont);
    }

    .banner-button-container{
        width: 60%;
        margin-top: 2rem;
    }

    .boites-details{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 80%;
        margin: auto;
    }

    .boites-details h2{
        text-align: center;
        margin: auto;
        width: 60%;
    }

    .boites{
        display: flex;
        gap: 2rem;
    }

    .description{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        text-align: center;
        width: 60%;
        margin: auto;
    }

    .description h3{
        font-size: 2rem;
        font-family: var(--sansFont);
        font-weight: 600;
        width: 80%;
        margin: auto;
    }

    .description .bolder{
        font-weight: bold;
    }

    .presentation{
        display: flex;
        margin: 3rem auto 3rem 20%;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        width: 80%;
    }

    .presentation h2{
        text-align: left;
        width: 30%;
        margin: auto;
        color: var(--orangeBwhat);
    }

    .notre-histoire{
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        margin-bottom: 8rem;
    }

    .notre-histoire-img-container{
        width: 40%;
        position: relative;
    }

    .notre-histoire-img{
        width: 100%;
        height: 25rem;
        border-radius: 25px;
        object-fit: cover;
    }

    .histoire-boite-png{
        position: absolute;
        bottom: -50%;
        left: -30%;
        width: 30rem;
    }

    .notre-histoire-titres{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem auto;
        justify-content: space-between;
    }

    .notre-histoire-titres > div{
        width: auto;
        margin-top: 2rem;
    }

    .vague-container{
        width: 100%;
        position: relative;
        background-color: var(--orangeBwhat);
    }

    .vague{
        width: 100%;
        pointer-events: none;
        background-color: var(--pinkBwhat);
    }

    .bottom{
        margin-top: -8rem;
    }

    @media screen and (max-width: 768px) {
        .banner > div{
            width: 100%;
            padding: 2rem;
        }

        .banner-button-container{
            width: 100%;
        }

        .boites{
            flex-direction: column;
        }

        .description{
            width: 90%;
            text-align: left;
        }

        .description h2{
            text-align: center;
        }

        .presentation{
            flex-direction: column;
            width: 90%;
            margin: auto;
        }

        .presentation > h2{
            text-align: center;
            width: 100%;
        }

        .notre-histoire{
            flex-direction: column;
        }

        .notre-histoire-img-container{
            width: 100%;
        }

        .notre-histoire-titres{
            width: 100%;
            padding: 2rem;
        }

        .histoire-boite-png{
            display: none;
        }
    }
</style>