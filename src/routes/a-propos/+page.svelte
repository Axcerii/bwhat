<script>
    import banner from "$lib/assets/a-propos/BanniereApropos.webp";
    import vagueBottom from "$lib/assets/structure/newsletterBgBottom.svg";
    //import faqImage from "$lib/assets/a-propos/faq.webp";
    import photoGroupe from "$lib/assets/a-propos/photoDeGroupe.webp"
    import BoutonLink from "$lib/components/boutonLink.svelte";

    import IconAPropos from "$lib/components/iconAPropos.svelte";
    import MembreCard from "$lib/components/membreCard.svelte";
    import Faq from "$lib/components/faq.svelte";

    import Newsletter from "$lib/components/newsletter.svelte";

</script>
    <svelte:head>
        <title>La mission Bwhat : bien-être, anti-stress & digital detox</title>
        <meta name="description" content="Découvrez l’histoire de Bwhat : l’entreprise française qui conçoit des box mensuelles bien-être et anti-stress pour favoriser la déconnexion digitale.">
    </svelte:head>

    <main>
        <section class="banner">
            <div>
                <h1>Découvrez notre histoire</h1>
                <p class="sous-titre">Notre projet, notre équipe, nos valeurs</p>
                <div class="banner-button-container">
                    <BoutonLink text="En savoir plus" link="/a-propos"/>
                </div>
            </div>
            <img src={banner} alt="Visuel d'une boite avec un effet stylisé">
        </section>

        <section class="banner-text no-gap" style="background-color:var(--pinkBwhat);">
            <div class="banner-card">
                <h1>À propos de Bwhat</h1>
                <h2>Reprendre du temps pour soi : <br> Sans pression, sans écran.</h2>
                <p>
                    On s’est tous dit un jour : <br> “Je passe trop de temps sur mon téléphone.” <br> <br> Mais entre le boulot, les notifications, les messages, les applis qui captent notre attention… <strong>difficile de décrocher.</strong><br> <br>
                    Nous sommes une petite équipe d’étudiants, amis dans la vie, et tous confrontés à la même chose : cette sensation de fatigue numérique, cette envie de lever les yeux, sans vraiment savoir comment s’y prendre. 
                    <br> <br>Un jour, on a eu l’envie <strong> de faire un pas de côté. </strong> <br> 
                    Pas pour “vivre mieux” comme dans les pubs, juste pour vivre un peu plus “pour de vrai”.
                    <br><br>
                    Alors, on s’est posé une question toute simple : <br><br>
                    <strong>Et si on aidait les autres à faire ce pas, eux aussi ? </strong>
                </p>
            </div>
        </section>
        <section class="problematique">
            <div>
                <h2>Un projet simple, mais sincère</h2>
                <p>
                 <br>   On voulait revenir à l’essentiel, et si possible, embarquer d’autres gens avec nous. <br>

                 <br>   Alors on a créé <strong>Bwhat</strong> : un projet qui nous ressemble. 

                 <br>   Pas parfait, mais porté par l’envie de faire mieux, ensemble.
                </p>
            </div>
            <img src={photoGroupe} alt="" aria-hidden="true">
        </section>
        <section class="notre-equipe">
            <div>
                <div class="notre-equipe-carousel">
                    <MembreCard image="elodie" titre="Cheffe de projet" nom="Élodie"/>
                    <MembreCard image="faik" titre="Directeur artistique" nom="Faïk"/>
                    <MembreCard image="davina" titre="Chargée webmarketing" nom="Davina"/>
                    <MembreCard image="hugo" titre="Développeur" nom="Hugo"/>
                    <MembreCard image="anais" titre="Chargée de communication" nom="Anaïs"/>
                    <MembreCard image="yelene" titre="Webdesigneuse" nom="Yélène"/>
                </div>
            </div>
            <img src={vagueBottom} alt="" aria-hidden="true" class="vague">
        </section>
        <section class="focus no-gap">
            <h2>Ce que nous défendons, vraiment</h2>
            <div>
                <IconAPropos icon="heart" description="La douceur"/>
                <IconAPropos icon="no-phone" description="La déconnexion progressive"/>
                <IconAPropos icon="groupe" description="Le local et l'humain"/>
                <IconAPropos icon="heart2" description="L'authenticité"/>
            </div>
        </section>
        <section class="faq no-gap" id="faq">
            <div class="faq-titres">
                <h2>Questions fréquentes</h2>
                <p>Avant de nous écrire, jetez un œil à notre FAQ : vous y trouverez sûrement ce que vous cherchez !</p>
            </div>
            <Faq/>
        </section>
        <section class="maintenant no-gap">
            <div>
                <h2>Et maintenant ?</h2>
                <p>
                    Aujourd’hui, Bwhat, c’est une belle aventure qui ne fait que commencer.<br><br> On espère que nos boites vous feront autant de bien qu’elles nous en font à créer.
                    <br>Merci d’être là. 
                    <br>Merci de vous offrir ce temps.
                    <br><br> 
                    <strong>
                        Bienvenue dans la communauté Bwhat.
                    </strong>
                </p>
            </div>
        </section>
        <Newsletter/>
    </main>

<style>
    main{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8rem;
    }

    .no-gap{
        margin-top: -8rem;
    }

    .banner-text h1{
        text-align: center;
        background-color: #ffffffcc;
        padding: 0.5rem 2rem;
        border-radius: 10px;
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

    .banner-text{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        position: relative;
        padding: 6rem 0;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-position: center;
    }

    .banner-card{
        border-radius: 20px;
        background-color: var(--whiteBwhat);
        padding: 4rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        font-family: var(--sansFont);
        width: 60%;
        margin: auto;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.36);
    }

    .banner-card h2{
        text-align: center;
        color: var(--orangeBwhat);
        margin: auto;
        font-size: 2rem;
    }

    .banner-card p{
        font-size: 1.2rem;
    }

    .problematique{
        display: flex;
        width: 80%;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        margin: auto;
    }

    .problematique img{
        width: auto;
        height: 22rem;
        object-fit: cover;
        border-radius: 20px;
    }

    .problematique > div{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 60%;
    }
    
    .problematique p{
        font-size: 1.2rem;
        font-family: var(--sansFont);
    }

    .focus{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        text-align: center;

        background-color: #F2F2F2;
        padding: 5rem 0;
    }

    .focus > div{
        width: 100%;
        display: flex;
        gap: 1rem;
        margin: auto;
        justify-content: center;
        flex-wrap: wrap;
    }

    .vague{
        width: 100%;
        z-index: -1;
        background-color: #F2F2F2;
    }

    .notre-equipe{
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
    }

    .notre-equipe > div{
        display: flex;
        flex-direction: column;
        gap: 4rem;
        background-color: var(--lightOrangeBwhat);
        padding-top: 5rem;
    }
    .notre-equipe-carousel{
        width: 90%;
        display: flex;
        gap: 2rem;
        margin: auto;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    
    .faq{
        padding: 4rem 4rem 8rem 4rem;
        display: flex;
        gap: 2rem;
    }

    .faq-titres{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: auto;
        width: 40%;
    }

    .faq-titres h2{
        text-align: center;
    }

    .faq-titres p{
        font-family: var(--sansFont);
        font-size: 1.2rem;
        text-align: center;
    }

    .faq-titres img{
        width: 80%;
        margin: auto;
    }

    .maintenant{
        width: 100%;
        background-color: #F2F2F2;
        text-align: center;
        padding: 5rem 0;
    }

    .maintenant > div{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: auto;
    }

    .maintenant > div p{
        font-family: var(--sansFont);
        font-size: 1.2rem;
    }

    @media screen and (max-width: 1024px) {
        .problematique{
            flex-direction: column;
        }

        .problematique > div{
            width: 80%;
        }

        .problematique img{
            width: 100%;
            height: auto;
        }
    }

    @media screen and (max-width: 768px) {
        .banner-card{
            width: 90%;
            padding: 2rem;
        }

        .notre-equipe-carousel{
            flex-wrap: nowrap;
            overflow-x: scroll;
        }

        .faq{
            flex-direction: column;
            padding: 1rem 1rem 8rem 1rem;
        }

        .faq-titres{
            width: 80%;
        }
    }
    
</style>