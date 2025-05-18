<script>
    let {color="var(--orangeBwhat)", text, link} = $props();
</script>

<a href={link} style="background-color: {color}">{text}</a>


<style>
    a{
        color: var(--whiteBwhat);
        border-radius: 2rem;
        padding: 1rem 2rem;
        transition: all ease-in-out 0.3s;
        font-weight: bold;
        font-family: var(--sansFont);
        font-size: 1.5rem;
        box-shadow: 5px 5px 20px 2px rgba(0,0,0,0.36);
        display: inline-block;
    }

    a:hover{
        background-color: var(--blueBwhat)!important;
    }

</style>