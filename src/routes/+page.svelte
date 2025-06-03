<script>
    import  Newsletter  from "$lib/components/newsletter.svelte";
    import IconDescription from "$lib/components/iconDescription.svelte";
    import BoutonLink from "$lib/components/boutonLink.svelte";
    import BoiteCard from "$lib/components/boiteCard.svelte";
    import TroisCartes from "$lib/components/troisCartes.svelte";

    import vagueTop from "$lib/assets/structure/newsletterBgTop.svg";
    import vagueBottom from "$lib/assets/structure/newsletterBgBottom.svg";
    
    /* Images import */
    
    import previewBoite from "$lib/assets/home/PreviewBwhatSport.webp";
    import banner from "$lib/assets/home/Banniere.webp";
</script>

<svelte:head>
    <title>Bwhat - Votre box mensuelle bien-être et digital detox</title>
    <meta name="description" content="Bwhat, la box mensuelle bien être pour se déconnecter des écrans : activités manuelles anti-stress, recettes bien-être et habitudes de déconnexion digitale.">
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
        <img src={banner} alt="Visuel d'une boite avec un effet stylisé">
    </section>
    
    <section class="avantages">
        <IconDescription icon="france" description="Produits made in France"/>
        <IconDescription icon="camion" description="Livraison rapide et suivie"/>
        <IconDescription icon="carte-bancaire" description="Paiement sécurisé"/>
        <IconDescription icon="ecologie" description="Box eco-conçue"/>
    </section>

    <section class="boites-details">
        <h2>Deux boites, une même envie&nbsp;: prendre soin de vous</h2>
        <div class="boites">
            <BoiteCard image="BwhatSport" title="La box Sport & Bien-être" link="/boites/sport-et-bien-etre"/>
            <BoiteCard image="BwhatDecouverte" title="La box Activités Manuelles et&nbsp;Découverte" link="/boites/activites-manuelles-et-decouverte"/>
        </div>
    </section>

    <section class="description">
        <h2>Bwhat c’est une pause simple, douce, nécessaire dans un quotidien souvent trop connecté.</h2>
        <h3>
            Nos boites mensuelles sont conçues pour vous accompagner dans <span class="bolder"> un changement progressif. </span> <br> <br>
            Parce qu’on ne quitte pas son téléphone du jour au lendemain, mais on peut commencer… <span class="bolder">boîte après boîte&nbsp;!</span>
        </h3>
    </section>

    <div class="presentation-container">
        <section class="presentation">
            <h2>Avec Bwhat, vous recevez chaque mois une boite pleine de bonnes idées pour :</h2>
            <TroisCartes/>
        </section>
    </div>
    
    <section class="vague-container">
        <img src="{vagueTop}" alt="" aria-hidden="true" class="vague top">
        <div class="notre-histoire">
            <div class="notre-histoire-img-container">
                <img src={previewBoite} alt="" class="notre-histoire-img" aria-hidden="true">
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
    </section>
    <Newsletter/>

    

</main>

<style>
    h1{
        margin-bottom: 1rem;
    }
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
        height: 40rem;
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

    .banner > div > *{
        text-shadow: 2px 2px 10px rgba(0,0,0,0.36);
    }

    .sous-titre{
        font-family: var(--sansFont);
        font-weight: bold;
        font-size: 1.5rem;
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
        font-size: 1.2rem;
        font-family: var(--sansFont);
        width: 80%;
        margin: auto;
        font-weight: normal;
    }

    .description .bolder{
        font-weight: bold;
    }

    .presentation-container{
        background-color: #F2F2F2;
        padding: 8rem 0 0 0;
    }

    .presentation{
        display: flex;
        margin: 3rem auto 3rem 10%;
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

    .notre-histoire-titres{
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem auto;
        justify-content: space-between;
    }

    .notre-histoire-titres > p{
        font-family: var(--sansFont);
        font-size: 1.2rem;
    }

    .notre-histoire-titres > div{
        width: auto;
        margin-top: 2rem;
    }

    .vague-container{
        width: 100%;
        position: relative;
        background-color: var(--lightOrangeBwhat);
    }

    .vague{
        width: 100%;
        pointer-events: none;
        background-color: var(--whiteBwhat);
    }

    .bottom{
        margin-top: -8rem;
    }

    .top{
        background-color: #F2F2F2;
        margin-top: -8rem;
    }

    @media screen and (max-width: 1024px) {
        h1{
            font-size: 3rem;
        }

        .boites{
            flex-direction: column;
        }
        
        .presentation{
            flex-direction: column;
            width: 90%;
            margin: auto;
        }

        .presentation > h2{
            text-align: center;
            width: 95%;
        }

        .boites-details h2{
            width: 90%;
        }
    }

    @media screen and (max-width: 768px) {
        .banner > div{
            width: 100%;
            padding: 2rem;
        }

        .banner-button-container{
            width: 100%;
        }

        .description{
            width: 90%;
            text-align: left;
        }

        .description h2{
            text-align: center;
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
    }
</style>