<script>
    let { style = "" } = $props();

    import post1 from "$lib/assets/social/instagram/instagramPost1.webp";
    import post2 from "$lib/assets/social/instagram/instagramPost2.webp";
    import post3 from "$lib/assets/social/instagram/instagramPost3.webp";
    import post4 from "$lib/assets/social/instagram/instagramPost4.webp";
    import post5 from "$lib/assets/social/instagram/instagramPost5.webp";
</script>

<section style={style}>
    <h2>Rejoignez nous sur instagram</h2>
    <div class="instagram-post">
        <a href="https://www.instagram.com/__bwhat__/" target="_blank"><img src={post1} alt="Visuel de la newsletter"></a>
        <a href="https://www.instagram.com/__bwhat__/" target="_blank"><img src={post2} alt="Visuel de la newsletter"></a>
        <a href="https://www.instagram.com/__bwhat__/" target="_blank"><img src={post3} alt="Visuel de la newsletter"></a>
        <a href="https://www.instagram.com/__bwhat__/" target="_blank"><img src={post4} alt="Visuel de la newsletter"></a>
        <a href="https://www.instagram.com/__bwhat__/" target="_blank"><img src={post5} alt="Visuel de la newsletter"></a>
    </div>
</section>

<style>
    section{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    h2{
        margin-left: 2rem;
    }

    .instagram-post{
        display: flex;
        gap: 1rem;
        width: 90%;
        margin: auto 2rem;
    }

    .instagram-post img{
        width: 12rem;
        height: 12rem;
        border-radius: 25px;
        object-fit: cover;
        transition: transform 0.3s ease-in-out;
    }
    
    .instagram-post a:hover img{
        transform: scale(1.2);
    }

    .instagram-post a:focus img{
        transform: scale(1.2);
    }

    @media screen and (max-width: 1024px) {
        .instagram-post{
            flex-wrap: nowrap;
            overflow-x: scroll;
            justify-content: start;
        }

        .instagram-post img{
            margin: 2rem 0;
        }
    }

    @media screen and (max-width: 768px) {
        h2{
            text-align: center;
            margin-left: 0;
        }
    }
</style>