<script>
    let { children } = $props();
    import logo from "$lib/assets/logo_bwhat.svg"
    import instagram from "$lib/assets/social/instagram.svg"
    import linkedin from "$lib/assets/social/linkedin.svg"
    import tiktok from "$lib/assets/social/tiktok.svg"
</script>
<header>
    <nav>
        <button class="menu-burger">
            <img src="{logo}" alt="">
        </button>
        <a href="/" class="header-logo">
            <img alt="logo de Bwhat" src={logo} width="150" class="blueBwhatSvg"/>
        </a>
        <ul class="menu-top">
            <li><a href="/a-propos">À propos</a></li>
            <li><a href="/produits">Nos produits</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/register">S'incrire</a></li>
            <li><a href="/login">Se connecter</a></li>
        </ul>
    </nav>
</header>

{@render children()}

<footer>
    <a href="/" class="footer-logo">
        <img alt="logo de Bwhat" src={logo} width="200" class="blueBwhatSvg"/>
    </a>

    <ul class="menu-bottom">
        <li><a href="/a-propos">À propos</a></li>
        <li><a href="/produits">Nos produits</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/register">S'incrire</a></li>
        <li><a href="/login">Se connecter</a></li>
        <li><a href="/login">Mentions légales</a></li>
    </ul>
    <div class="social-media">
        <ul>
            <li>
                <a href="https://www.instagram.com/__bwhat__/" target="_blank">
                    <img src="{instagram}" alt="logo instagram" width="60">
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/company/bwhat/" target="_blank">
                    <img src="{linkedin}" alt="logo linkedin" width="70">
                </a>
            </li>
            <li>
                <a href="https://www.tiktok.com/@_bwhat" target="_blank">
                    <img src="{tiktok}" alt="logo tiktok" width="72">
                </a>
            </li>
        </ul>
        <p>© Bwhat 2025 All rights reserved</p>
    </div>
</footer>

<style>
    header{
        border-top: var(--orangeBwhat) solid 2.5rem;
        padding: 2rem;
    }

    footer{
        padding: 2rem;
        display: flex;
        justify-content: space-between;
    }

    nav{
        display: flex;
        gap: 3rem;
        margin: auto 0;
    }
    
    .menu-top{
        display: flex;
        gap: 2rem;
        margin: auto 0;
        font-size: 1.2rem;
    }
    .menu-top li{
        font-weight: bold;
        text-transform: uppercase;
        font-family: var(--sansFont);
    }

    .menu-top a:hover{
        transition: all 100ms ease-in-out;
    }

    .menu-top a:hover{
        color: var(--blueBwhat);
    }

    .menu-bottom{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
        font-size: 1.2rem;
        margin: auto 1rem;
    }

    .menu-bottom li{
        font-weight: bold;
        text-transform: uppercase;
        font-family: var(--sansFont);
        font-size: 1rem;
        text-align: center;

    }

    .social-media{
        display: flex;
        flex-direction: column;
        align-items: right;
    }

    .social-media > ul{
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
    }

    .social-media li{
        margin: auto;
        display: flex;
    }

    .social-media img{
        display: flex;
        margin: auto;
    }

    .social-media p{
        font-size: 0.8rem;
        margin: auto;
        font-family: var(--serifFont);
    }

    @media screen and (max-width: 768px) {
        header{
            border-top: none;
        }

        .header-logo{
            margin: auto;
        }

        nav{
            flex-direction: column;
        }

        .menu-top{
            flex-direction: column;
            display: none;
        }

        .menu-bottom{
            flex-direction: column;
        }

        footer{
            flex-direction: column;
            gap: 2rem;
            margin-top: 2rem;
        }
    }
</style>