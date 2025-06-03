<script>
	import { slide } from "svelte/transition";


    let {question, reponse} = $props();

  let isOpen = $state(false);
  let button = $state("+");

  function toggle() {
    isOpen = !isOpen;

    if (isOpen) {
      button = "×";
    } else {
      button = "+";
    }
  }

</script>

    <button onclick={toggle}>
        <i>{button}</i>
        <h4>{question}</h4>
        {#if isOpen}
            <p transition:slide>{reponse}</p>
        {/if}
    </button>

<style>
    button{
        display: flex;
        flex-direction: column;
        padding: 1rem 0.5rem;
        border-bottom: solid var(--whiteBwhat);

        font-family: var(--sansFont);
        position: relative;
    }

    h4{
        font-weight: bold;
        font-size: 1.5rem;
        width: 80%;
        margin: auto;
        text-align: left;
    }

    i{
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: 2rem;
        font-style: normal;
    }
    p{
        width: 80%;
        text-align: left;
        font-size: 1.2rem;
    }
</style>