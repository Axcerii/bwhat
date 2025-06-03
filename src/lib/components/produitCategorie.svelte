<script lang="ts">
    let { imageProduct, titre, alt, bgColor = "#ffffff", pColor = "#000000", nom = "", titres="", complements="", categorie = ""} = $props();

    let pStyle = `color: ${pColor};`;
    let divStyle = `background-color: ${bgColor};`;
    let openHelp = $state(false);


    let finalArray : string[][] = [];
    let arrayTitres : string[] = [] ;
    let arrayComplements : string[] = [];
    let arrayCategorie : string[] = [];

    if(titres){
        arrayTitres = titres.split(",");
    }

    if(complements){
        arrayComplements = complements.split(",");
    }

    if(categorie){
        arrayCategorie = categorie.split(",");
    }

    if(nom && complements && titres){
        openHelp = true;
        for(let i = 0; i < arrayTitres.length; i++){
            finalArray.push([arrayTitres[i], arrayComplements[i]])
        }
    }

    
</script>

<div class="produit">
    {#if openHelp}
        <div class="help">
            <h4>{nom}</h4>
            <img src="/produits/{imageProduct}-zoom.webp" alt={alt}>
            <div class="complements">
                {#each finalArray as item}
                <p><strong>{item[0]}</strong></p>
                <p>{item[1]}</p>
                {/each}
            </div>

            <div class="categorie">
                {#each arrayCategorie as item}
                    <p>{item}</p>
                {/each}
            </div>
        </div>
    {/if}
    <div style={divStyle} class="produit-etiquette">
        <p style={pStyle}>{titre}</p> 
    </div>
    <img src="/produits/{imageProduct}.webp" alt={alt}>
</div>

<style>
    .help{
        display: none;
        background-color: var(--whiteBwhat);
        position: absolute;
        top: 0;
        left: -100%;
        border-radius: 10px;
        padding: 2rem;
        box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.36);
        flex-direction: column;
        gap: 1rem;
        z-index: 10;
        font-size: 1rem;
        width: 100%;

        transition: all ease-in-out 0.1s;
    }

    .help > h4{
        text-align: center;
        font-weight: bold;
        font-size: 1.2rem;
        font-family: var(--sansFont);
    }

    .help > img{
        width: 40%;
        height: auto;
        border-radius: 10px;
        margin: auto;
    }

    .complements{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .categorie{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .categorie > p{
        background-color: #F2F2F2;
        padding: 0.5rem;
        border-radius: 2rem;
        text-decoration: italic;
        width: fit-content;
    }



    .produit{
        display: flex;
        width: 100%;
        position: relative;
        background-size: cover;
        background-position: center;
        border-radius: 5px;
        justify-content: space-between;
        gap: 2rem;
    }

    .produit:hover > .help{
        display: flex;
    }

    .produit > .produit-etiquette{
        width: 100%;
        height: 6rem;
        border-radius: 5px;
        display: flex;
        justify-content: center;
    }
    
    p{
        width: 80%;
        font-family: var(--sansFont);
        font-weight: bold;
        font-size: 1.2rem;
        margin: auto;
    }

    .produit>img{
        height: 6rem;
        width: auto;
        transition: all 0.2s ease-in-out;
    }

    .produit>img:hover{
        transform: scale(1.2);
        cursor: help;
    }

    @media screen and (max-width: 1024px) {
        .help{
            left: 0;
            top: 100%;
            padding: 1rem 0;
        }

        .produit:hover > .help{
            display: none;
        }
    }
</style>