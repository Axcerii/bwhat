<script>
    let { imageProduct, imageCategorie, titre, position=false, alt, productX = '0', productY = '0' } = $props();

    let textAlign , rightLeft;

    if(position){
        textAlign = "left";
    }
    else{
        textAlign = "right";
    }

    if(position){
        rightLeft = `right: ${productX}`;
    }
    else{
        rightLeft = `left: ${productX}`;
    }

    let imgStyle = `${rightLeft}; top: ${productY}`;
    let pStyle = `text-align: ${textAlign};`;

</script>

<div style="background-image: url('/produits/{imageCategorie}.webp');">
    <img src="/produits/{imageProduct}.webp" alt={alt} style={imgStyle}>
    <p style={pStyle}>{titre}</p> 
</div>

<style>
    div{
        display: flex;
        height: 4rem;
        width: 100%;
        position: relative;
        background-size: cover;
        background-position: center;
        justify-content: flex-end;
    }
    
    p{
        font-family: var(--sansFont);
        font-weight: bold;
        margin: auto 1rem;
        max-width: 70%;
        font-size: 1.2rem;
        background-color: #ffffffcc;
        padding: 0.5rem;
        border-radius: 5px;
    }

    div>img{
        position: absolute;
        height: 6rem;
        width: auto;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
    }
</style>