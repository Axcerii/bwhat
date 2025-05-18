 <script>
    import boiteSport from "$lib/assets/produits/sport.webp";
    import boiteDecouverte from "$lib/assets/produits/decouverte.webp";

    import BoutonLink from "$lib/components/boutonLink.svelte";
    import ProduitCategorie from "$lib/components/produitCategorie.svelte";
 </script>

 <svelte:head>
     <title>Produits - Bwhat</title>
 </svelte:head>

 <main>
    <section class="banner" style="background-image: url('https://picsum.photos/1920/1080')">

    </section>
    <section class="produits">
        <h1>Nos produits</h1>
        <h2>À vous de les choisir !</h2>
        <div>
            <h2>Box sport & bien être</h2>
            <h3>Elle contient :</h3>
            <p>Pour celles et ceux qui souhaitent éveiller leur <strong>curiosité</strong> et s’offrir une dose de nouveauté chaque mois.</p>
            <div class="produits-contenu-container">
                <div class="produits-card">
                    <img src={boiteSport} alt="Aperçu de la boite sport & découverte">
                    <div class="produits-card-button">
                        <BoutonLink color="var(--blackBwhat)" text="Accéder à cette boîte" link="/boites/sport-et-bien-etre"/>
                    </div>
                </div>
                <div class="produits-contenu">
                    <ProduitCategorie 
                        imageProduct="placetoddler"
                        imageCategorie="categorie"
                        titre="Une recette cartonnée + 1 échantillon"
                        alt="Elite Toddler"
                        productX="-1rem"
                        productY="-1rem"
                    />
                    <ProduitCategorie 
                        imageProduct="placetoddler"
                        imageCategorie="categorie"
                        titre="Un équipement d'entraînement"
                        alt="Elite Toddler"
                        productX="-2rem"
                    />
                    <ProduitCategorie 
                        imageProduct="placetoddler"
                        imageCategorie="categorie"
                        titre="Un accessoire de sport"
                        alt="Elite Toddler"
                        productX="-1.5rem"
                        productY="-1rem"
                    />
                    <ProduitCategorie 
                        imageProduct="placetoddler"
                        imageCategorie="categorie"
                        titre="Un produit bien-être"
                        alt="Elite Toddler"
                        productX="4rem"
                    />
                    <ProduitCategorie 
                        imageProduct="placetoddler"
                        imageCategorie="categorie"
                        titre="Un abonnement à la salle de sport"
                        alt="Elite Toddler"
                        productY="-1rem"
                    />
                </div>
            </div>
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

    .banner{
        width: 100%;
        height: 32.5rem;
        position: relative;
        background-size: cover;
        background-position: center;
    }

    .produits{
        display: flex;
        flex-direction: column;
        background-color: var(--blueBwhat);
        padding: 4rem 0;
    }

    .produits h1{
        text-align: center;
    }

    .produits > h2{
        text-align: left;
        position: relative;
        width: auto;
        max-width: 100%;
        z-index: 1;
        margin-left: 2rem;
    }
    .produits-card{
        display: flex;
        flex-direction: column;
        width: 40rem;
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

    .produits > div > h2{
        text-align: right;
        margin-right: 2rem;
        font-family: var(--sansFont);
        text-transform: uppercase;
    }

    .produits > div > p{
        width: 30rem;
        font-size: 2rem;
        position: absolute;
        top: 30%;
        left: 10%;
        z-index: 2;
    }


    
    .produits-contenu-container{
        width: 100%;
        display: flex;
        gap: 6rem;
        position: relative;
        flex-wrap: wrap;
        justify-content: end;}


    .produits-contenu{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 40rem;
    }

    .produits > div > h3{
        text-align: right;
        font-size: 3rem;
        margin-right: 2rem;
    }

 </style>