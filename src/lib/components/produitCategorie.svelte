<script>
    let { imageProduct, imageCategorie, titre, position=false, alt, productX = '0', productY = '0' } = $props();

    let textAlign , rightLeft, justifyContent;

    if(position){
        textAlign = "left";
        rightLeft = `right: ${productX}`;
        justifyContent = "flex-start;";
    }
    else{
        textAlign = "right";
        rightLeft = `left: ${productX}`;
        justifyContent = "flex-end";
    }

    let imgStyle = `${rightLeft}; top: ${productY};`;
    let pStyle = `text-align: ${textAlign};`;
    let divStyle = `background-image: url('/produits/${imageCategorie}.webp'); justify-content: ${justifyContent};`;

</script>

<div style={divStyle}>
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
        overflow: hidden;
    }
</style>