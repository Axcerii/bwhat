<script>
    import BoutonSubmit from "$lib/components/boutonSubmit.svelte";
    import Pattern from "$lib/assets/home/BwhatPattern.webp";
    import { onMount } from "svelte";
	import { on } from "svelte/events";

    onMount(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
        script.async = true;
        document.body.appendChild(script);
    })
</script>

    <div class="container">
        <form aria-label="Newsletter" action="https://bwhat.us4.list-manage.com/subscribe/post?u=4aa2d1157ced43d1933da9f0c&amp;id=57ac4206b4&amp;f_id=00ddc2e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form">
            <h2>Restez connectés à l'essentiel&nbsp;!</h2>
            <img src={Pattern} alt="" aria-hidden="true"/>
            <input type="email" name="EMAIL" placeholder="Entrez votre e-mail" id="mce-EMAIL" required>
            
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
        border: solid 4px var(--orangeBwhat);
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