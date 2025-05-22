<script>
    import FaqQuestions from "$lib/components/faq-questions.svelte";
</script>

<div class="faq">
    <h3>Vos questions fréquentes</h3>

    <FaqQuestions 
        question="Quand vais-je recevoir ma box&nbsp;?"
        reponse="Les box partent entre le 5 et le 10 de chaque mois. 
        Vous recevrez un e-mail avec un suivi dès qu’elle est expédiée."
    />
    <FaqQuestions
        question="Comment fonctionne l'abonnement&nbsp;?"
        reponse="Vous êtes débité tous les mois en fonction du type d'abonnement et d'engagement que vous avez pris. Une fois le paiement validé, une box sera délivrée chez vous."
    />
    <FaqQuestions
        question="Et si j'ai une allergie ou un régime particulier&nbsp;?"
        reponse="Nous vous proposons des box adaptées aux besoins de chacun."
    />
    <FaqQuestions
        question="Quels sont les moyens de paiement acceptés&nbsp;?"
        reponse="Nous acceptons les cartes de crédit Visa, Mastercard, le tout passant par la plateforme de paiement sécurisée Stripe."
    />
    <FaqQuestions
        question="Puis-je retourner ma box si elle ne me convient pas&nbsp;?"
        reponse="Oui, nous vous proposons une garantie de 14 jours, cependant cela annule alors votre abonnement."
    />

    <FaqQuestions
        question="Proposez vous des codes promos ou de réductions&nbsp;?"
        reponse="Oui, nous proposons des codes promos et des offres spéciales."
    />
</div>

<style>
    .faq{
        padding: 4rem;
        background-color: var(--orangeBwhat);
        font-family: var(--sansFont);
        border-radius: 25px;

        width: 50%;
        display: flex;
        flex-direction: column;
        margin: auto;
    }

    h3{
        text-align: center;
        font-size: 2rem;
        border-bottom: var(--whiteBwhat) solid;
        padding-bottom: 2rem;
    }

    @media screen and (max-width: 768px) {
        .faq{
            width: 100%;
            padding: 1rem;
        }
    }
</style>