 <script>
    import BoutonLink from "$lib/components/boutonLink.svelte";
    import ProduitCategorie from "$lib/components/produitCategorie.svelte";

    import banner from "$lib/assets/nos-produits/banniere-produits.webp";    
    let bannerUrl = "background-image: url('"+banner+"')";

    import boiteDecouverte from "$lib/assets/nos-produits/box-decouverte.webp";
    import boiteSport from "$lib/assets/nos-produits/box-sport-bien-etre.webp"

    import Newsletter from "$lib/components/newsletter.svelte";
 </script>

 <svelte:head>
     <title>Nos produits anti-stress et déconnexion - Bwhat</title>
     <meta name="description" content="Découvrez nos différents produits. Une box contenant des produits idéal pour éveiller la créativité et une autre contenant des produits pour les curieux, elle vous pousse à sortir de votre zone de confort en explorant des univers inconnus.">

     <style>
        html{
            overflow-x: hidden;
        }
     </style>
 </svelte:head>

 <main>
    <section class="banner" style={bannerUrl}>
        <div class="banner-titres">
            <h1 style="display: none">Nos produits</h1>
            <h2>À vous de les choisir !</h2>
            <h3>Retrouvez goût au plaisir de la déconnexion</h3>
        </div>
    </section>

    <section class="produits sportEtBienEtre">
        <div>
            <div class="produits-contenu-container">
                <div class="produits-card">
                    <h2>Box sport & bien être</h2>
                    <img src={boiteSport} alt="Aperçu de la boite sport & découverte">
                    <p>Pour celles et ceux qui veulent bouger, respirer, <strong>se reconnecter à leur corps.</strong></p>
                    <div class="produits-card-button">
                        <BoutonLink color="var(--blackBwhat)" text="Accéder à cette boîte" link="/boites/sport-et-bien-etre"/>
                    </div>
                </div>
                <div class="produits-contenu">
                    <ProduitCategorie 
                        imageProduct="echantillonPeanutButter"
                        titre="Une recette cartonnée + 1 échantillon"
                        alt="Pot de Beurre de Cacahuète"
                        bgColor="var(--blueBwhat)"
                    />
                    <ProduitCategorie 
                        imageProduct="echantillonServiette"
                        titre="Un équipement d'entraînement"
                        alt="Serviette de Sport"
                        bgColor="var(--blueBwhat)"
                    />
                    <ProduitCategorie 
                        imageProduct="echantillonCordeASauter"
                        titre="Un accessoire de sport"
                        alt="Corde à sauter"
                        bgColor="var(--blueBwhat)"
                    />
                    <ProduitCategorie 
                        imageProduct="echantillonRouleauDePeau"
                        titre="Un produit bien-être"
                        alt="Rouleau pour la peau"
                        bgColor="var(--blueBwhat)"
                    />
                </div>
            </div>
        </div>
        <!-- Bwhat découverte -->
        <div id="decouverte">
            <div class="produits-contenu-container secondeBoite">
                <div class="produits-card">
                    <h2>Box activités manuelles et découverte</h2>
                    <img src={boiteDecouverte} alt="Aperçu de la boite activités manuelles et découverte">
                    <p>
                    Pour celles et ceux qui souhaitent éveiller leur <strong>curiosité</strong> et s’offrir une dose de nouveauté chaque mois.</p>
                    <div class="produits-card-button">
                        <BoutonLink color="var(--blackBwhat)" text="Accéder à cette boîte" link="/boites/activites-manuelles-et-decouverte"/>
                    </div>
                </div>
                <div class="produits-contenu">
                    <ProduitCategorie 
                        imageProduct="echantillonConfiture"
                        titre="Une recette cartonnée + 1 échantillon"
                        alt="Pot de confiture de fruits"
                        pColor="var(--whiteBwhat)"
                        bgColor="var(--orangeBwhat)"
                    />
                    <ProduitCategorie 
                        imageProduct="echantillonArgile"
                        titre="Une activité manuelle"
                        alt="Bloc d'argile pour la sculture"
                        pColor="var(--whiteBwhat)"
                        bgColor="var(--orangeBwhat)"
                    />
                    <ProduitCategorie 
                        imageProduct="echantillonThe"
                        titre="Un produit bien être"
                        alt="Sachet de Thé Artisanal"
                        pColor="var(--whiteBwhat)"
                        bgColor="var(--orangeBwhat)"
                    />
                    <ProduitCategorie 
                        imageProduct="echantillonMoutarde"
                        titre="Un produit artisanal"
                        alt="Pot de moutarde artisanale"
                        pColor="var(--whiteBwhat)"
                        bgColor="var(--orangeBwhat)"
                    />
                    <ProduitCategorie 
                        imageProduct="echantillonCasseTete"
                        titre="Un jeu ou un casse tête"
                        alt="Casse-tête en bois"
                        pColor="var(--whiteBwhat)"
                        bgColor="var(--orangeBwhat)"
                    />
                </div>
            </div>
        </div>
    </section>

    <section class="offres">
        <div class="offres-titres">
            <h2>Nos offres d'abonnements</h2>
            <p>Chez Bwhat, on vous encourage à avancer à votre rythme. C’est pourquoi nous proposons <strong>trois formules d’abonnement.</strong></p>
        </div>
        <div class="offres-prix">
            <div>
                <h3>3 mois <br> 39€/mois</h3>
            </div>
            <div>
                <div class="populaire">Populaire</div>
                <h3>6 mois <br> 37€/mois</h3>
            </div>
            <div>
                <h3>12 mois <br> 35€/mois</h3>
            </div>
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
        overflow-x: none;
    }

    .banner{
        width: 100%;
        height: 40rem;
        position: relative;
        background-size: cover;
        background-position: center;
        display: flex;
        flex-direction: column;
        padding: 2rem;
    }

    .banner h3{
        font-family: var(--sansFont);
        font-weight: bold;
        font-size: 1.2rem;
    }

    .banner-titres{
        width: 30%;
        margin: auto 2rem;
        text-align: left;
    }

    .banner > *{
        text-shadow: 2px 2px 10px rgba(0,0,0,0.36);
    }

    .produits{
        display: flex;
        flex-direction: column;
        padding: 4rem 0;
        gap: 6rem;
    }

    .produits-card{
        display: flex;
        flex-direction: column;
        width: 50%;
        position: relative;
        gap: 2rem;
    }

    .produits-card-button{
        width: auto;
    }

    .produits-card img{
        width: 100%;
        border-radius: 25px;
        height: 30rem;
        object-fit: cover;
    }

    .produits > div{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: relative;
    }

    .produits-card > h2{
        text-transform: uppercase;
    }

    .produits-card > p{
        font-size: 2rem;
        top: 30%;
        left: 10%;
        z-index: 2;
        font-family: var(--sansFont);
    }

    .produits-contenu-container{
        width: 90%;
        margin: auto;
        display: flex;
        gap: 6rem;
        position: relative;
        flex-wrap: wrap;
    }


    .produits-contenu{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 40%;
        justify-content: center;
    }

    .offres{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 6rem 0;
        background-color: #f2f2f2;
        gap: 4rem;
    }

    .offres-titres{
        width: 60%;
        margin: auto;
        text-align: center;
        
    }

    .offres-titres> p{
        font-family: var(--sansFont);
        margin-top: 1rem;
    }

    .offres-prix{
        display: flex;
        flex-direction: row;
        width: 70%;
        margin: auto;
        justify-content: space-between;
    }

    .offres-prix > div{
        width: 18rem;
        height: 18rem;
        background-color: var(--blackBwhat);
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--whiteBwhat);
        font-family: var(--sansFont);
        text-align: center;
        font-size: 1.5rem;
        position: relative;
        gap: 2rem;
    }


    .populaire{
        background-color: var(--lightOrangeBwhat);
        text-transform: uppercase;
        width: 90%;
        border-radius: 5px;
        color: black;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, 0);
        padding: 0.5rem 0;
    }


    @media screen and (max-width: 1024px){
        .offres-prix > div{
            width: 10rem;
            height: 10rem;
            font-size: 1rem;
        }

        .banner-titres{
            width: 50%;
        }

        .produits{
            gap: 2rem;
        }

        .produits > div{
            width: 100%;
        }
        .produits-card{
            width: 90%;
            margin: auto;
        }

        .produits-card img{
            width: 100%;
        }

        .produits-contenu{
            width: 100%;
            margin: auto;
        }

        .produits-card > p{
            position: static;
            width: 90%;
            margin: auto;
        }
    }

    @media screen and (max-width: 768px){
        .offres-prix{
            width: 90%;
        }

        .offres-prix > div{
            width: 6.5rem;
            height: 6.5rem;
            font-size: 1rem;
        }

        .populaire{
            top: -15%;
        }
    }
 </style>