<script>
    import banner from "$lib/assets/a-propos/banniere.webp";
    import vagueTop from "$lib/assets/structure/newsletterBgTop.svg";
    import faqImage from "$lib/assets/a-propos/faq.webp";
    import photoGroupe from "$lib/assets/a-propos/photoDeGroupe.webp"
    
    import IconAPropos from "$lib/components/iconAPropos.svelte";
    import MembreCard from "$lib/components/membreCard.svelte";
    import Faq from "$lib/components/faq.svelte";

</script>
    <svelte:head>
        <title>La mission Bwhat : bien-être, anti-stress & digital detox</title>
        <meta name="description" content="Découvrez l’histoire de Bwhat : l’entreprise française qui conçoit des box mensuelles bien-être et anti-stress pour favoriser la déconnexion digitale.">
    </svelte:head>

    <main>
        <section class="banner" style="background-image: url({banner});">
            <h1>À propos de Bwhat</h1>
            <div class="banner-card">
                <h2>Reprendre du temps pour soi : <br> Sans pression, sans écran.</h2>
                <p>
                    On s’est tous dit un jour : <br> “Je passe trop de temps sur mon téléphone.” Mais entre le boulot, les notifications, les messages, les applis qui captent notre attention… <strong>difficile de décrocher.</strong><br> <br>

                    Nous sommes une petite équipe d’étudiants, amis dans la vie, et tous confrontés à la même chose : cette sensation de fatigue numérique, cette envie de lever les yeux, sans vraiment savoir comment s’y prendre. 
                    Un jour, on a eu l’envie <strong> de faire un pas de côté. </strong> <br> 
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
                    On ne vient pas du monde du bien-être, ni du marketing.
                    <br> On vient du réel. 
                    <br>Des jobs d’étudiants, des agendas trop pleins, des messages lus et jamais répondus.
                    <br> On voulait juste revenir à l’essentiel, et si possible, embarquer d’autres gens avec nous.
                    <br>Alors on a créé Bwhat : un projet qui nous ressemble. 
                    <br>Pas parfait, mais porté par l’envie de faire mieux, ensemble.
                </p>
            </div>
            <img src={photoGroupe} alt="" aria-hidden="true">
        </section>
        <section class="focus">
            <h2>Ce que nous défendons, vraiment</h2>
            <div>
                <IconAPropos icon="heart" description="La douceur"/>
                <IconAPropos icon="no-phone" description="La déconnexion progressive"/>
                <IconAPropos icon="groupe" description="Le local et l'humain"/>
                <IconAPropos icon="heart2" description="L'authenticité"/>
            </div>
        </section>
        <section class="notre-equipe">
            <img src={vagueTop} alt="" aria-hidden="true" class="vague">
            <div>
                <h2>Notre histoire</h2>
                <div class="notre-equipe-carousel">
                    <MembreCard image="elodie" titre="cheffe de projet" nom="Élodie"/>
                    <MembreCard image="faik" titre="graphiste" nom="Faïk"/>
                    <MembreCard image="davina" titre="conseillère digitale" nom="Davina"/>
                    <MembreCard image="hugo" titre="développeur" nom="Hugo"/>
                    <MembreCard image="anais" titre="responsable marketing" nom="Anaïs"/>
                    <MembreCard image="yelene" titre="webdesigneuse" nom="Yélène"/>
                </div>
            </div>
        </section>
        <section class="faq no-gap" id="faq">
            <div class="faq-titres">
                <h2>Questions fréquentes</h2>
                <p>Avant de nous écrire, jetez un œil à notre FAQ : vous y trouverez sûrement ce que vous cherchez !</p>
                <img src={faqImage} alt="Un homme se questionne sur le fonctionnement de ce qui l'entoure">
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

    h1{
        text-align: center;
        background-color: #ffffffcc;
        padding: 0.5rem 2rem;
        border-radius: 10px;
    }

    .banner{
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
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        font-family: var(--sansFont);
        width: 40%;
        margin: auto;
    }

    .banner-card h2{
        text-align: center;
        color: var(--orangeBwhat);
        margin: auto;
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
        font-weight: bold;
    }

    .focus{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: center;
        align-items: center;
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
    }

    .notre-equipe{
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
    }

    .notre-equipe h2{
        text-align: center;
    }

    .notre-equipe > div{
        display: flex;
        flex-direction: column;
        gap: 4rem;
        background-color: var(--lightOrangeBwhat);
        padding-bottom: 8rem;
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
        background-color: var(--lightOrangeBwhat);
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
        font-weight: bold;
        font-size: 1.2rem;
    }

    .faq-titres img{
        width: 80%;
        margin: auto;
    }

    .maintenant{
        width: 100%;
        background-color: var(--lightOrangeBwhat);
        text-align: center;
        padding-bottom: 5rem;
    }

    .maintenant > div{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: center;
        align-items: center;
        width: 80%;
        font-weight: 700;
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
    }

    @media screen and (max-width: 768px) {


        .banner-card{
            width: 80%;
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