<script>
    import BoutonSubmit from "$lib/components/boutonSubmit.svelte";
    import Pattern from "$lib/assets/home/BwhatPattern.webp";
</script>

    <div class="container">
        <form aria-label="Newsletter" action="#">
            <h2>Restez connectés à l'essentiel !</h2>
            <img src={Pattern} alt="" aria-hidden="true"/>
            <input type="text" placeholder="Entrez votre e-mail">
            
            <div class="newsletter-button-container">
                <BoutonSubmit text="Envoyer"/>
            </div>
        </form>
    </div>
    

<style>
    .container{
        width: 100%;
    }

    form{
        width: 50%;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input{
        font-size: 1.5rem;
        background-color: var(--whiteBwhat);
        border: none;
        border-radius: 10px;
        padding: 1rem;
        font-family: var(--serifFont);
    }

    input::placeholder{
        color: var(--greyBwhat);
    }

    img{
        height: 18rem;
        object-fit: cover;
        border-radius: 10px;
        margin-bottom: 1rem;
    }

    h2{
        text-align: center;
        margin-bottom: 1rem;
    }

    .newsletter-button-container{
        display: flex;
        width: 10rem;
        margin: auto 0 auto auto;
    }

    @media screen and (max-width: 768px) {
        form{
            width: 90%;
        }

        .newsletter-button-container{
            width: 100%;
        }
    }
</style>