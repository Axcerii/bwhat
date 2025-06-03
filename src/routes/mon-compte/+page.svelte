<script lang="ts">
    import type { PageData } from './$types';
	import BoutonLink from '$lib/components/boutonLink.svelte';
    import vagueBottom from '$lib/assets/structure/newsletterBgBottom.svg';

    export let data: PageData;

    const user = data.user;
    const addresses = data.addresses;
    const abonnements = data.subscriptions;
</script>

<svelte:head>
    <title>Mon compte - Bwhat</title>
    <meta name="description" content="Gérez vos informations, votre abonnement et vos préférences beauté depuis votre espace client.">
</svelte:head>

<main>
    <section class="infos-unique">
        <section class="infos-compte">
            <h1>  
                {#if user.name}
                Bienvenue {user.name}&nbsp;!
                {:else}
                Bienvenue !
                {/if}
            </h1>
            
            <h3>Informations personnelles</h3>
            
            <div>
                <label for="firstname">
                    Prénom :
                </label>
                <input type="text" name="firstname" id="firstname" value="{user.name}" placeholder="Votre prénom" readonly>
                <a href="/editer-profil">modifier</a>
            </div>
            <div>
                <label for="lastname">
                    Nom :
                </label>
                <input type="text" name="lastname" id="lastname" value="{user.surname}" placeholder="Votre nom" readonly>
                <a href="/editer-profil">modifier</a>
            </div>
            <div>
                <label for="email">
                    E-mail : 
                </label>
                <input type="email" name="email" id="email" value="{user.email}" readonly>
                <a href="/editer-profil">modifier</a>
            </div>
            <p style="display: none">Voulez-vous changer de mot de passe ? C'est ici : <a href="/editer-profil">changer mon mot de passe</a></p>
        </section>
        <div class="vague-container" aria-hidden="true">
            <img src={vagueBottom} alt="" aria-hidden="true" class="vague">
        </div>
    </section>

    <section class="infos-commandes">
        <section class="adresses">
            <h2>Vos adresses</h2>
            <BoutonLink text="+ Ajouter une adresse" link="/editer-profil/ajouter-une-adresse" color="var(--blackBwhat)"/>
            <div class="card-container">
                {#each addresses as address}
                <div class="adresse-block">
                    <p>{address.street}</p>
                    <p>{address.postalCode}, {address.city}</p>
                    <p>{address.country}</p>
                    <p>{address.phone}</p>
                    <p>{address.complement}</p>
                </div>
                {/each}
            </div>
        </section>

        <section class="abonnement">
            <h2>Vos abonnements</h2>
            <BoutonLink text="+ Avoir un abonnement" link="/nos-produits" color="var(--blackBwhat)"/>
            <div class="card-container">
                {#each abonnements as abonnement}
                <div class="abonnement-block">                    
                    <img src="{abonnement.box.imageUrl}" alt="{abonnement.box.name}">
                    <h3>{abonnement.box.name}</h3>
                    <p><strong>
                        Identifiant&nbsp;:
                    </strong> {abonnement.id}</p>
                    
                    <p><strong>
                        Prix&nbsp;:
                    </strong> {abonnement.price}€</p>
                    
                    <p>
                        <strong>
                            Date d'achat&nbsp;:
                        </strong>
                        {new Date(abonnement.createdAt).toLocaleDateString('fr-FR')}</p>
                <p>
                    <strong>
                        Adresse de livraison&nbsp;:
                    </strong>
                    {abonnement.address.street}, {abonnement.address.city}</p>
                    <p><strong>
                        Numéro de téléphone&nbsp;:
                    </strong>{abonnement.address.phone}</p>
                </div>
                {/each}
            </div>
        </section>
    </section>
</main>
            
<style>
    
    main{
        font-family: var(--sansFont);
    }

    .infos-unique{
        background-color: var(--lightOrangeBwhat);
    }

    .infos-commandes{
        background-color: #F2F2F2;
    }

    h1, h2, h3{
        margin-bottom: 1rem;
    }

    h3{
        font-size: 2rem;
    }

    .infos-compte{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 5rem 0;
        width: 80%;
        margin: auto;
    }

    .infos-compte > div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .infos-compte > div > label{
        display: none;
    }

    .infos-compte a{
        margin: auto;
        text-decoration: underline;
        font-size: 1.2rem;
        font-weight: bold;
        transition: all ease-in-out 0.2s;
        text-transform: capitalize;
    }

    .infos-compte > p{
        font-size: 1.2rem;
        font-weight: bold;
        transition: all ease-in-out 0.2s;
    }

    


    .infos-compte a:hover{
        color: var(--whiteBwhat);
        cursor: pointer;
    }

    .infos-compte > div > input{
        border: none;
        padding: 1rem;
        border-radius: 1rem;
        width: 80%;
        font-size: 1.2rem;
    }

    .adresses{
        padding: 2rem;
        width: 80%;
        margin: auto;
    }

    .card-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .adresse-block{
        padding: 1rem;
        border: var(--orangeBwhat) 4px solid;
        border-radius: 1rem;
        font-size: 1.2rem;
        margin: 2rem 0;
        width: 25rem;
        background-color: var(--whiteBwhat);

        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .abonnement{
        padding: 2rem;
        width: 80%;
        margin: auto;
    }

    .abonnement-block{
        padding: 1rem;
        border: var(--orangeBwhat) 4px solid;
        background-color: var(--whiteBwhat);

        border-radius: 1rem;
        font-size: 1.2rem;
        margin: 2rem 0;
        width: 25rem;
    }

    .abonnement-block > img{
        width: 100%;
    }

    .vague-container{
        width: 100%;
        margin-top: -5rem;
        height: 10rem;
        background-color: #F2F2F2;
    }

        @media screen and (max-width: 1024px) {
        .infos-compte{
            width: 95%;
        }

        .infos-compte > div > input{
            width: 100%;
        }

        .adresses{
            width: 95%;
        }

        .abonnement{
            width: 95%;
        }
    }


</style>