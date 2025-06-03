<script lang="ts">
    import type { PageData } from './$types';
    import { page } from '$app/state';

    import BoutonSubmit from "$lib/components/boutonSubmit.svelte";
</script>

<svelte:head>
    <title>Addresses - Bwhat</title>
</svelte:head>

<main>
    <form class="infos-compte" method="POST">
        
        <h1>
            Ajouter une adresse
        </h1>

        <div>
            <label for="firstname">
                Adresse :
            </label>
            <input type="text" name="adresse" id="adresse" value="" placeholder="221bis Rue du Boulanger" required>
        </div>
        <div>
            <label for="postal_code">
                Code Postal :
            </label>
            <input type="number" name="postal_code" id="postal_code" value="" placeholder="75005" required>
        </div>
        <div>
            <label for="city">
                Ville :
            </label>
            <input type="text" name="city" id="city" value="" placeholder="Paris" required>
        </div>
        <div>
            <label for="country">
                Pays : 
            </label>
            <input type="country" name="country" id="country" value="" placeholder="France" required>
        </div>
        <div>
            <label for="phone">
                Numéro de téléphone :
            </label>
            <input type="phone" name="phone" id="phone" value="" placeholder="06 12 34 56 78" required>
        </div>
        <div>
            <label for="complement">
                Informations complémentaires :
            </label>
            <input type="complement" name="complement" id="complement" value="" placeholder="Appartement 4">
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
        width: 70%;
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
            width: 100%;
        }
    }

</style>