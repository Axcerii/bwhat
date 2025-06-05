<script lang="ts">
    import pattern from "$lib/assets/nos-produits/pattern-sport.webp";
    let background = "background-image: url('"+pattern+"')";
</script>

<svelte:head>
    <title>Mentions légales - Bwhat</title>
    <meta name="description" content="Besoin d’aide ou d’infos sur nos abonnements ? Contactez notre équipe dédiée via le formulaire ou par mail.">
</svelte:head>


<main style={background}>
    <h1>
        Mentions légales
    </h1>

    <h2>
        Éditeur du site
    </h2>

    <p>
        Bienvenue sur le site Bwhat, un espace pensé pour vous aider à ralentir, vous reconnecter à vous-même et explorer de nouveaux horizons hors des écrans. 
        <br>Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique (LCEN), nous vous informons ci-dessous des éléments légaux relatifs à l’édition, l’hébergement et l’utilisation de ce site.
        <br>Éditeur du site

        <br>Le site Bwhat est édité par :

        <br>Hugo Mazelet
        <br>Bwhat au capital de 15.000 euros
        <br>Siège social : 40 rue du Chemin Vert
        <br>SIRET : 895 123 456 (Ceci est un numéro fictif)
        <br>RCS : Paris

        <br>Responsable de la publication : Hugo Mazelet
        <br>Contact : hugo.malezet@my-digital-school.org
    </p>

    <h2>
        Hébergement
    </h2>

    <p>
        Le site est hébergé par :
        Railway,
        <a href="https://railway.com/">https://railway.com/</a>
    </p>
    
    <h2>
        Activité de l’entreprise
    </h2>
    <p>
        Bwhat est un service de box mensuelles à thème dédié à la déconnexion numérique et à la redécouverte du bien-être et de la curiosité à travers deux expériences uniques :
        <br>La Box Sport & Bien-être : pour ralentir, respirer et bouger à votre rythme.
        <br>La Box Découverte : pour éveiller votre curiosité et tester des activités manuelles et inspirantes.

        <br>Chaque mois, les abonnés reçoivent des contenus pensés pour leur offrir un vrai moment de pause, loin des écrans et des surstimulations quotidiennes.
    </p>

    <h2>
        Propriété intellectuelle
    </h2>

    <p>
        L’ensemble des éléments visuels, sonores, textuels, graphiques ou photographiques présents sur le site Bwhat (y compris le logo, les illustrations, les textes des box et les contenus éditoriaux) sont la propriété exclusive de Bwhat ou de ses partenaires, et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.

        <br>Toute reproduction, modification, diffusion ou exploitation sans autorisation préalable écrite est formellement interdite, et peut constituer une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
    </p>

    <h2>
        Données personnelles
    </h2>

    <p>
        Les informations que vous nous transmettez (nom, adresse e-mail, coordonnées de livraison, préférences, etc.) sont traitées avec la plus grande attention. Elles sont utilisées exclusivement dans le cadre de la gestion de vos commandes, abonnements, demandes d’information ou d’accès à nos contenus.

        <br>Bwhat s’engage à respecter la loi “Informatique et Libertés” du 6 janvier 1978 ainsi que le Règlement Général sur la Protection des Données (RGPD).

        <br>Vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition aux données personnelles vous concernant. Pour toute demande relative à vos données, vous pouvez écrire à : serenagaujes@bwhat.fr

        <br>Les données ne sont ni vendues ni cédées à des tiers. Nous utilisons uniquement des prestataires conformes au RGPD pour l’hébergement, le paiement et les outils de communication.
    </p>

    <h2>
        Cookies
    </h2>

    <p>
        Le site Bwhat utilise des cookies à des fins de fonctionnement, de mesure d’audience et d’amélioration de l’expérience utilisateur. En poursuivant votre navigation, vous acceptez l’usage de ces cookies. Vous pouvez modifier vos préférences à tout moment via les paramètres de votre navigateur.
    </p>

    <h2>
        Responsabilité
    </h2>

    <p>
        Nous nous efforçons de fournir un site fonctionnel, accessible et sécurisé. Toutefois, la responsabilité de Bwhat ne saurait être engagée en cas d’interruption de service, de problème technique ou de dommages liés à l’utilisation de nos produits.

<br>Les contenus des box sont proposés à titre d’inspiration. Bwhat ne peut être tenu responsable d’un usage inapproprié des accessoires, des produits alimentaires ou cosmétiques fournis. En cas d’allergie, de traitement médical ou de doute, nous vous recommandons de consulter un professionnel avant toute utilisation.
    </p>

    <h2>
        Conditions d’utilisation
    </h2>

    <p>
        En accédant à ce site et en souscrivant à nos services, vous acceptez sans réserve les présentes mentions légales ainsi que nos Conditions Générales de Vente (CGV). Celles-ci sont disponibles en ligne et doivent être lues avant tout achat ou abonnement.
    </p>

    <h2>
        Contact
    </h2>

    <p>
        Pour toute question concernant le site, une commande ou une demande d’information, vous pouvez nous contacter à :

        <br>E-mail : bwhat@contact.fr
        <br>Adresse postale : 40 rue du Chemin Vert, 75011 Paris
        <br>Ou sur le formulaire de contact : <a href="/nous-contacter">ici</a>
    </p>
</main>


<style>
    main{
        width: 50%;
        font-family: var(--sansFont);
        margin: auto;
        padding: 2rem;
    }

    main h1, h2{
        margin-bottom: 1rem;
        font-family: var(--serifFont);
    }

    main p{
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }

    main a{
        text-decoration: underline;
    }

    main a:hover{
        color: var(--orangeBwhat);
    }

    @media screen and (max-width: 768px) {
        main{
            width: 95%;
            padding: 1rem;
        }
    }
</style>