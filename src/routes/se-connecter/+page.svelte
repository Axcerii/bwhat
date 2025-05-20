<script>
    import InstagramPost from "$lib/components/instagramPost.svelte";
    import BoutonSubmit from "$lib/components/boutonSubmit.svelte";
    import vagueTop from "$lib/assets/structure/newsletterBgTop.svg";
</script>

<svelte:head>
    <title>Se connecter à l'espace client - Bwhat</title>
    <meta name="description" content="Accédez à votre espace client pour suivre votre abonnement et vos commandes.">
</svelte:head>

<section class="formulaire">
    <h1>Votre moment déconnexion</h1>

    <form action="">
        <h2>Connectez-vous !</h2>
        <h3>Connectez-vous pour accéder à votre espace client</h3>
        <label for="email">E-mail :</label>
        <input type="email" name="email" placeholder="Votre e-mail">
        <label for="password">Mot de Passe :</label>
        <input type="password" name="password" placeholder="Mot de Passe">

        <div class="submit-container">
            <BoutonSubmit text="Se connecter" color="var(--orangeBwhat)"/>
        </div>
        <p class="indication">Vous n'êtes pas encore inscrit ? <a href="/connexion">Inscrivez-vous !</a></p>
    </form>
</section>

<div class="vague-container">
    <img src={vagueTop} alt="" class="vague" aria-hidden="true">
</div>

<InstagramPost style="background-color: var(--orangeBwhat); margin-top: -1rem;"/>

<style>
    .formulaire{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 4rem 0;
    }

    form{
        width: 50%;
        background-color: var(--whiteBwhat);
        border-radius: 25px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
        margin: auto;
    }

    h1{
        text-align: center;
    }

    h2{
        font-family: var(--sansFont);
        color: var(--orangeBwhat);
        text-align: center;
        font-size: 2rem;
    }

    h3{
        font-family: var(--sansFont);
        text-align: center;
    }

    input{
        width: 100%;
        border-radius: 10px;
        border: solid var(--orangeBwhat) 2px;
        padding: 1rem;
        font-family: var(--serifFont);
    }

    input::placeholder{
        color: #757575;
    }

    .submit-container{
        width: 50%;
        margin: 2rem auto;
    }

    .indication{
        text-align: center;
    }

    .indication a{
        color: var(--orangeBwhat);
        font-weight: bold;
    }

    .indication a:hover{
        text-decoration: underline;
    }

    .vague-container{
        width: 100%;
        margin-top: -2px;
        overflow: hidden;
        z-index: -1;
        pointer-events: none;
    }

    .vague{
        width: 100%;
    }

    @media screen and (max-width: 1024px) {
        form{
            width: 70%;
        }
    }

    @media screen and (max-width: 768px) {
        form{
            width: 90%;
        }

        
        .submit-container{
            width: 100%;
        }
    }
</style>