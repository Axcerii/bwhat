<script>
    let { imageProduct, titre, alt, bgColor = "#ffffff", pColor = "#000000"} = $props();

    let pStyle = `color: ${pColor};`;
    let divStyle = `background-color: ${bgColor};`;
</script>

<div class="produit">
    <div style={divStyle}>
        <p style={pStyle}>{titre}</p> 
    </div>
    <img src="/produits/{imageProduct}.webp" alt={alt}>
</div>

<style>
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

    .produit > div{
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
</style>