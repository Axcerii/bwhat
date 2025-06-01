<script>
    let {color="var(--blackBwhat)", text} = $props();
</script>

<button style="background-color: {color}" type="submit">{text}</button>


<style>
    button{
        color: var(--whiteBwhat);
        border-radius: 2rem;
        padding: 1rem 2rem;
        transition: all ease-in-out 0.3s;
        font-weight: bold;
        font-family: var(--sansFont);
        font-size: 1.5rem;
        width: 100%;
    }

    button:hover{
        background-color: var(--blueBwhat)!important;
    }

</style>