<script lang="ts">
    import BoutonSubmit from "$lib/components/boutonSubmit.svelte";
    import vagueBottom from "$lib/assets/structure/ContactBgBottom.svg"

    let name = '';
    let surname = '';
	let email = '';
	let message = '';
	let status = '';

	async function handleSubmit(event: Event) {
		event.preventDefault();
		const res = await fetch('/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name, surname, email, message })
		});

		if (res.ok) {
			status = 'Message envoyé avec succès!';
			name = email = message = '';
		} else {
			status = 'Erreur lors de l’envoi du message.';
		}
	}
</script>

<svelte:head>
    <title>Nous contacter - Bwhat</title>
    <meta name="description" content="Besoin d’aide ou d’infos sur nos abonnements ? Contactez notre équipe dédiée via le formulaire ou par mail.">
</svelte:head>


<main>
    <div class="bg-yellow">
        <h1>
            Contactez nous !
        </h1>
        
        <form on:submit|preventDefault={handleSubmit}>
            <h2>
                Besoin d'échanger avec nous ?
            </h2>
            <h3>
                On vous répondra avec plaisir ! 
            </h3>
        
            <div class="nomPrenom">
                <input type="text" name="name" placeholder="Votre prénom" bind:value={name}>
                <input type="text" name="surname" placeholder="Votre nom" bind:value={surname}>
            </div>
            <input type="email" name="email" placeholder="Votre e-mail" bind:value={email}>
            <textarea name="message" id="message" placeholder="Votre message" bind:value={message}></textarea>
            <div class="submit-container">
                <BoutonSubmit text="Envoyer"/>
            </div> 
            <p>{status}</p>
        </form>
    </div>
    <div class="vague-container">
        <img src={vagueBottom} alt="" aria-hidden="true" class="vague">
    </div>
</main>

<style>
    .bg-yellow{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: var(--lightOrangeBwhat);
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
    }

    h3{
        font-family: var(--sansFont);
        text-align: center;
    }

    .nomPrenom{
        display: flex;
        gap: 1rem;
    }

    input, textarea{
        width: 100%;
        border-radius: 10px;
        border: solid var(--orangeBwhat) 2px;
        padding: 1rem;
        font-family: var(--serifFont);
    }

    input::placeholder, textarea::placeholder{
        color: #757575;
    }

    textarea{
        height: 15rem;
    }

    .nomPrenom > input{
        width: 50%;
    }

    .submit-container{
        width: 50%;
        margin: auto;
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