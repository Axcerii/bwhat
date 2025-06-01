<script>
    import InstagramPost from "$lib/components/instagramPost.svelte";
    import BoutonSubmit from "$lib/components/boutonSubmit.svelte";
    import vagueTop from "$lib/assets/structure/newsletterBgTop.svg";
    import { page } from '$app/state';

</script>

<svelte:head>
    <title> Créer un compte - Bwhat</title>
    <meta name="description" content="Inscrivez-vous pour découvrir nos box mensuelles bien-être et anti-stress pour favoriser la déconnexion digitale.">
</svelte:head>

    <section class="formulaire">
        <h1>Votre moment déconnexion <br> commence maintenant !</h1>

        <form method="POST">
            <h2>Inscrivez-vous !</h2>
            <h3>Inscrivez-vous pour créer votre espace détente</h3>
            <label for="email">E-mail :</label>
            <input type="email" name="email" placeholder="Votre e-mail" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$">
            <label for="password">Mot de Passe  <span class="tooltip"> (i)
                <p class="tooltip-indication">Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère special.</p>
            </span> :</label>
            <input type="password" name="password" placeholder="Mot de Passe">
            <label for="confirmPassword">Confirmer votre mot de passe :</label>
            <input type="password" name="confirmPassword" placeholder="Confirmez votre mot de passe">

                <!-- Affichage de l'erreur -->
                {#if page.form?.error}
                    <div class="error">
                        {page.form.error}
                    </div>
                {/if}


            <div class="submit-container">
                <BoutonSubmit text="S'inscrire" color="var(--orangeBwhat)"/>
            </div>
            <p class="indication">Vous avez déjà un compte ? <a href="/se-connecter">Connectez-vous !</a></p>
        </form>
    </section>

    <div class="vague-container">
        <img src={vagueTop} alt="" class="vague" aria-hidden="true">
    </div>
    
    <InstagramPost style="background-color: var(--lightOrangeBwhat); margin-top: -1rem;"/>

    <style>
        .error{
            color: rgb(86, 3, 3);
            background-color: rgb(255, 144, 144);
            border: 2px solid red;
            padding: 1rem;
            border-radius: 10px;
        }

        .tooltip-indication{
            opacity: 0;
            font-size: 0.8rem;
            background-color: var(--whiteBwhat);
            box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.36);
            border-radius: 10px;
            padding: 1rem;
            width: 10rem;
            position: absolute;
            bottom: 100%;
            left: 100%;
        }

        .tooltip:hover .tooltip-indication{
            opacity: 1;
            transition: opacity 0.3s ease-in-out;
        }

        .tooltip{
            position: relative;
            cursor: help;
        }
        
    
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

            box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.36);
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