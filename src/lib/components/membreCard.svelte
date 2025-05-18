<script>
    let {image, titre, nom} = $props();
</script>

    <div>
        <img src="/membres/{image}.webp" alt="Photographie du {titre}, {nom} de l'équipe Bwhat">
        <div class="etiquettes">
            <h3>{nom}</h3>
            <p>{titre}</p>
        </div>
    </div>

<style>
    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 15rem;
    }

    img{
        width: 100%;
        object-fit: cover;
        height: 19.5rem;
        border-radius: 20px;
    }

    .etiquettes{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background-color: var(--blackBwhat);
        padding: 1rem;
        border-radius: 20px;
        text-align: center;
    }

    .etiquettes h3{
        font-size: 2rem;
        color: var(--whiteBwhat);
    }

    .etiquettes p{
        font-size: 1.2rem;
        color: var(--orangeBwhat);
        text-transform: lowercase;
        font-family: var(--sansFont);
    }
</style>