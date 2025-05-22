<script>
    import BoutonLink from "$lib/components/boutonLink.svelte";
    let {image, title, link} = $props();
</script>

    <div class="boite-card">
        <img src="/boites/{image}.webp" alt="Visuel de la boite">
        <div>
            <h3>{title}</h3>
            <div class="boite-card-button-container">
                <BoutonLink text="Voir plus" link={link} color="var(--blackBwhat)"/>
            </div>
        </div>
    </div>

<style>
    .boite-card{
        display: flex;
        flex-direction: column;
        padding: 2rem;
        border-radius: 25px;
        gap: 1rem;
        background-color: var(--lightOrangeBwhat);
        width: 100%;
    }

    img{
        width: 100%;
        max-height: 17rem;
        border-radius: 25px;
        object-fit: cover;
        border-radius: 25px;
    }

    .boite-card > div{
        display: flex;
        justify-content: space-between;
        align-items: end;
        height: 100%;
    }

    h3{
        font-size: 2rem;
        width: 35%;
    }

    .boite-card-button-container{
        display: flex;
        justify-content: flex-end;
        width: 60%;
    }

    @media screen and (max-width: 768px) {
        .boite-card > div{
            flex-direction: column;
            gap: 2rem;
        }

        h3{
            width: 100%;
        }

        .boite-card-button-container{
            width: 100%;
        }
    }
</style>