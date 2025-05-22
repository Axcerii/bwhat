<script>
    let {icon, description} = $props();
</script>

<div class="icon-description">
    <div class="img-container">
        <img src="/icons/{icon}.svg" alt="" aria-hidden="true" class="whiteBwhatSvg" width="50"> 
    </div>
    <p>{description}</p>
</div>

<style>
    .icon-description{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 20rem;
    }

    .img-container{
        display: flex;
        justify-content: center;
        background-color: var(--blueBwhat);
        padding: 1rem;
        border-radius: 100%;
        border: 2px solid var(--orangeBwhat);
    }

    p{
        font-size: 1.2rem;
        font-family: var(--serifFont);
        color: var(--blueBwhat);
        text-align: center;
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        .icon-description{
            flex-direction: row;
        }
    }
</style>