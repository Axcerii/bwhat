<script>
    let { children } = $props();
    

    import { page } from "$app/stores";
    import logo from "$lib/assets/logo_bwhat.svg"
    import instagram from "$lib/assets/social/instagram.svg"
    import linkedin from "$lib/assets/social/linkedin.svg"
    import tiktok from "$lib/assets/social/tiktok.svg"
	import { slide } from "svelte/transition";
    import { derived } from "svelte/store";

    let menu = $state("/menu.svg");
    
    let isOpen = $state(false);

    function toggleMenu() {
        isOpen = !isOpen;
        menu = isOpen ? "/cross.svg" : "/menu.svg";
    }

    const specialFooter = derived(page, ($page) => $page.url.pathname === '/se-connecter' || $page.url.pathname === '/creer-un-compte');



</script>
<header>
    <nav>
        <div class="top-menu-responsive">
            <button class="menu-burger" onclick={toggleMenu}>
                <img src={menu} alt="Bouton d'accès au menu" width="35">
            </button>

            <a href="/" class="header-logo">
                <img alt="logo de Bwhat" src={logo} width="150" class="blueBwhatSvg"/>
            </a>
        </div>
        <ul class="menu-top" class:open={isOpen} transition:slide>
            <li><a href="/a-propos">À propos</a></li>
            <li><a href="/nos-produits">Nos produits</a></li>
            <li><a href="/nous-contacter">Contact</a></li>
            <li><a href="/creer-un-compte">S'incrire</a></li>
            <li><a href="/se-connecter">Se connecter</a></li>
        </ul>
    </nav>
</header>

{@render children()}

<footer class:special-style={$specialFooter}>
    <a href="/" class="footer-logo">
        <img alt="logo de Bwhat" src={logo} width="200" class="blueBwhatSvg"/>
    </a>

    <ul class="menu-bottom">
        <li><a href="/a-propos">À propos</a></li>
        <li><a href="/nos-produits">Nos produits</a></li>
        <li><a href="/nous-contacter">Contact</a></li>
        <li><a href="/creer-un-compte">S'incrire</a></li>
        <li><a href="/se-connecter">Se connecter</a></li>
        <li><a href="/mentions-legales">Mentions légales</a></li>
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

    .menu-burger{
        display: none;
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

    .top-menu-responsive{
        display: flex;
        position: relative;
    }

    .special-style{
        background-color: var(--orangeBwhat);
    }

    .special-style img{
        filter: brightness(0) saturate(100%) invert(1)!important;
    }

    @media screen and (max-width: 1024px) {
        .menu-burger{
            display: block;
        }

        header{
            border-top: none;
        }

        .header-logo{
            position: absolute;
            left: 50%;
            transform: translateX(-50%);            
        }

        nav{
            flex-direction: column;
        }

        .menu-top{
            flex-direction: column;
            display: none;
        }

        .menu-top.open{
            display: flex;
        }
    }

    @media screen and (max-width: 768px) {


        .menu-bottom{
            flex-direction: column;
        }

        .menu-bottom li{
            text-align: left;
        }

        footer{
            flex-direction: column;
            gap: 2rem;
            margin-top: 2rem;
        }
    }
</style>