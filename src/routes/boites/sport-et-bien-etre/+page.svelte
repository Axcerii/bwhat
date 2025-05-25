<script lang="ts">
import BoutonSubmit from "$lib/components/boutonSubmit.svelte";
import ProduitCategorie from "$lib/components/produitCategorie.svelte";
import Preview from "$lib/assets/nos-produits/box-sport-bien-etre-preview.webp";
import Pattern from "$lib/assets/nos-produits/pattern-sport.webp";
import Newsletter from "$lib/components/newsletter.svelte";
import Ankorstore from "$lib/assets/nos-produits/ankorstore.webp";
import vagueBottom from "$lib/assets/structure/newsletterBgBottom.svg";

let bgProduits = "background-image: url('"+Pattern+"')";

let price = 39;
let selectedIndex = 0;

const abonnements = [
    { duration: "3 mois", price: 39 },
    { duration: "6 mois", price: 37 },
    { duration: "12 mois", price: 35 }
];

function updatePrice(index: number) {
    selectedIndex = index;
    price = abonnements[index].price;
}

</script>

<main>
    <section class="abonnement">
        <img src={Preview} alt="Boite de la boite découverte avec des exemples de produits. Des huiles essentielles, des crèmes, de la confiture artisanale et des pelotes de laines.">
        <div class="abonnement-infos">
            <h1>Box sport & bien-être</h1>
            <h2>Conçue pour les esprits saturés, elle invite à ralentir, à se recentrer et à retrouver une forme de sérénité.</h2>
            <h2 class="price">{price}€</h2>

            <div class="abonnement-selection">
                <h3>Sélectionnez un abonnement</h3>
                <div>
                    {#each abonnements as abonnement, i}
                        <button
                            class:selected={i === selectedIndex}
                            on:click={() => updatePrice(i)}
                        >
                            {abonnement.duration}
                        </button>
                    {/each}
                </div>
            </div>

            <form action="">
                <input type="hidden" name="Abonnement" value="3mois">
                <BoutonSubmit text="S'abonner" color="var(--blackBwhat)"/>
            </form>
            <hr />
            <p>
                Notre box ne se contente pas de divertir : elle apporte du bien-être, incite à adopter de nouvelles habitudes positives et encourage un meilleur équilibre entre digital et réalité. <br>
                Loin d’un simple « produit », c’est un outil pour améliorer son quotidien !
            </p>
        </div>
    </section>
    <section class="produits" style={bgProduits}>
            <h2>À retrouver dans la boîte</h2>
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
    </section>

    <section class="fournisseur">
        <div>
            <div class="ankorstore">
                <h2>Notre engagement envers les petits artisans</h2>
                <img src={Ankorstore} alt="Logo de Ankorstore">
            </div>
            <p>
                Chez Bwhat, on croit aux synergies positives. <br>
                C’est pourquoi nous avons choisi de nous engager aux côtés d’Ankstore, une plateforme qui valorise le savoir-faire local, les créateurs indépendants et les produits engagés.Concrètement ? Certaines surprises que vous recevez dans votre boite mensuelle sont sélectionnées directement auprès d’artisans et de petites marques présentes sur Ankstore.
                <br> <br>
                Un partenariat qui a du sens : pour consommer autrement et encourager l’économie locale.
            </p>
        </div>
    </section>
    <div class="vague">
        <img src={vagueBottom} alt="" aria-hidden="true" class="lightBlueBwhatSvg">
    </div>

    <Newsletter />
</main>

<style>

    main{
        display: flex;
        flex-direction: column;
        gap: 6rem;
        margin-top: 4rem;
    }

    .abonnement{
        display: flex;
        gap: 2rem;
        width: 90%;
        margin: auto;
        justify-content: center;
        align-items: center;
    }

    .abonnement > img{
        width: 40%;
        object-fit: cover;

    }

    .abonnement-infos{
        width: 60%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        font-family: var(--sansFont);
    }

    .abonnement-infos > h1{
        font-family: var(--serifFont);
        text-transform: uppercase;
    }

    .abonnement-infos> p{
        font-size: 1.2rem;
        padding: 1rem 0;
        font-weight: 500;
    }

    hr{
        color: var(--orangeBwhat);
        background-color: var(--orangeBwhat);
    }

    .abonnement-selection{
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .abonnement-selection > h3{
        font-weight: bold;
    }

    .price{
        font-weight: normal;
    }

    .abonnement-selection > div{
        display: flex;
        gap: 2rem;
    }

    .abonnement-selection button{
        background-color: var(--lightBlueBwhat);
        padding: 2rem 1rem;
        border-radius: 25px;
        box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.36);
        transition: all ease-in-out 0.3s;
        width: 30rem;
        max-width: 20%;
        font-size: 2rem;
    }

    .abonnement-selection button:hover{
        background-color: var(--blueBwhat);
    }

    .abonnement form{
        width: 50%;
    }

    .selected{
        outline: var(--blueBwhat) solid 6px;
    }

    .produits{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 2rem;
        padding: 2rem;
        justify-content: center;
        align-items: center;
    }

    .produits-contenu{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 40%;
        justify-content: center;
    }

    
    .fournisseur{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        margin:-6.1rem auto 0 auto;
        background-color: var(--lightBlueBwhat);
        padding: 4rem 0 0 0;
        
    }

    .fournisseur h2{
        text-align: left;
        font-family: var(--serifFont);
        font-weight: bold;
    }
    .fournisseur > div{
        width: 70%;
        margin: auto;
    }
    .ankorstore{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .ankorstore > img{
        max-width: 30%;
    }

    .fournisseur p{
        font-size: 1.5rem;
        font-weight: 500;
        font-family: var(--sansFont);
    }

    .vague{
        width: 100%;
        margin-top: -6.1rem;
    }

    @media screen and (max-width: 1024px) {
        main{
            margin-top: 0;
        }
        .abonnement{
            flex-direction: column;
            width: 100%;
        }

        .abonnement > img{
            width: 100%;
            height: 18rem;
        }

        .abonnement h1{
            font-size: 2.5rem;
        }

        .abonnement h2{
            font-size: 1.5rem;
        }

        .abonnement-infos{
            width: 90%;
        }

        .abonnement-selection > div{
            gap: 0.5rem;
            width: 100%;
            max-width: 100%;
        }
        .abonnement-selection button{
            font-size: 1.2rem;
            max-width: 30%;
            border-radius: 10px;
            padding: 1rem;
        }

        .abonnement form{
            width: 70%;
        }

        .produits-contenu{
            width: 100%;
        }

        .fournisseur > div{
            width: 90%;
        }

        .fournisseur h2{
            margin-bottom: 2rem;
        }
    }
</style>