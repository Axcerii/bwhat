<script>
    let { style = "" } = $props();
</script>

<section style={style}>
    <h2>Rejoignez nous sur instagram</h2>
    <div class="instagram-post">
        <a href="https://www.instagram.com/__bwhat__/"><img src="https://picsum.photos/1200/600" alt="Visuel de la newsletter" class="instagram-post"></a>
        <a href="https://www.instagram.com/__bwhat__/"><img src="https://picsum.photos/1200/601" alt="Visuel de la newsletter" class="instagram-post"></a>
        <a href="https://www.instagram.com/__bwhat__/"><img src="https://picsum.photos/1200/602" alt="Visuel de la newsletter" class="instagram-post"></a>
        <a href="https://www.instagram.com/__bwhat__/"><img src="https://picsum.photos/1200/603" alt="Visuel de la newsletter" class="instagram-post"></a>
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
        gap: 2rem;
        justify-content: center;
        width: 90%;
        flex-wrap: wrap;
        margin: auto;
    }

    .instagram-post img{
        width: 15rem;
        height: 10rem;
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