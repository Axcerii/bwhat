<script lang="ts">
    import type { PageData } from './$types';
    import { page } from '$app/state';

    export let data: PageData;
    import BoutonSubmit from "$lib/components/boutonSubmit.svelte";

    const user = data.user;
</script>

<svelte:head>
    <title>Mon compte - Bwhat</title>
    <meta name="description" content="Gérez vos informations, votre abonnement et vos préférences beauté depuis votre espace client.">
</svelte:head>

<main>
    <form class="infos-compte" method="POST">
        
        <h1>
            Éditer votre profil
        </h1>

        <div>
            <label for="firstname">
                Prénom :
            </label>
            <input type="text" name="firstname" id="firstname" value="{user.name}" placeholder="Votre prénom">
        </div>
        <div>
            <label for="lastname">
                Nom :
            </label>
            <input type="text" name="lastname" id="lastname" value="{user.surname}" placeholder="Votre nom">
        </div>
        <div>
            <label for="email">
                E-mail : 
            </label>
            <input type="email" name="email" id="email" value="{user.email}">
        </div>
        <div>
            <label for="password">
                Mot de Passe :*
            </label>
            <input type="password" name="password" id="password" placeholder="Entrez votre mot de passe pour valider" required>
        </div>

        {#if page.form?.error}
            <div class="error">
                {page.form.error}
            </div>
        {/if}

        <div class="submit-container">
            <BoutonSubmit text="Valider" color="var(--blackBwhat)"/>
        </div>
    </form>
</main>

<style>

    main{
        background-color: var(--lightOrangeBwhat);
    }

    .error{
        color: rgb(86, 3, 3);
        background-color: rgb(255, 144, 144);
        border: 2px solid red;
        padding: 1rem;
        border-radius: 10px;
    }

    h1{
        margin-bottom: 1rem;
    }
    .infos-compte{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-family: var(--sansFont);
        padding: 5rem;
        width: 80%;
        margin: auto;
    }

    .infos-compte > div{
        display: flex;
        justify-content: space-between;
    }

    .infos-compte > div > label{
        font-size: 1.2rem;
        margin: auto 0;
        font-weight: bold;
        font-family: var(--sansFont);
    }

    .infos-compte > div > input{
        border: none;
        padding: 1rem;
        border-radius: 1rem;
        width: 80%;
        font-size: 1.2rem;
    }

    .submit-container{
        width: 20%;
    }

    @media screen and (max-width: 1024px) {
        .infos-compte{
            width: 95%;
        }

        .infos-compte > div{
            flex-direction: column;
        }

        .infos-compte > div > input{
            width: 100%;
        }

        .submit-container{
            width: 50%;
        }
    }

</style>