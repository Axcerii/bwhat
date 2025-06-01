<script>
    import pattern from "$lib/assets/nos-produits/pattern-decouverte.webp";
    let background = "background-image: url('"+pattern+"')";


    const anecdotes = [
        '80% de la production mondiale de mirabelles est fait en France.',
        'Cervantes et Shakespeare sont mort à la même date. Mais pas le même jour.',
        'Le père de Tony Parker faisait également du basket sous le nom de Tony Parker.',
        'Le logo de la NBA est le joueur Jerry West',
        'Les pingouins volent. L\'image que le public possède du pingouin est en fait un manchot.',
        "L'arabie saoudite à une superficie supérieure à celle du Groenland.",
        "La chanteuse qui a fait 'comme un roc', Nadiya, est egalement record woman d'Indre et Loire de 400m.",
        "La morue et le cabillaud sont le même poisson à la base.",
        "La panthère et le léopard sont les mêmes animaux.",
        "Le caribou et le renne sont les mêmes animaux.",
        "Il y a environ 1000 fois moins de mort par requin par an que de morts par escargot.",
        "Jacuzzi, Hooligan, bechamel, silhouette, barnum, nicotine, barème, boycott, calepin, chauvin, cyrillique, diesel, frangipane, lynchage, opinel, sandwich, saxophone..... Et même le pays Chine. Tous ces mots tirent leur origine du nom de leur inventeur / découvreur / fondateur.",
        "Vianney et Calogero il s'agit de leur vrai prénom ce n'est pas un pseudonyme. Par contre Christophe s'appelle Daniel et Enrico Macias s'appelle Gaston.",
        "Le gagnant de la médaille d'or du 800m des JO de Tokyo s'appelle Korir. Que voulez-vous de plus ?",
        "Les carottes étaient de couleur violette à la base. Ce n'est que bien plus tard que les hommes ont croisé des espèces ce qui les a fait changer de couleur.",
        "La majorité des bananes consommées sont en réalité des clones de leur mère. Ces espèces sont complètement stériles.",
        "La lance de feu est l'un des premiers prototypes de lance-flammes. Elle a été inventée au Xè siècle. 800 ans plus tard, on inventait le briquet.",
        "Mozart adorait faire des blagues sur... Le caca. Comme quoi, certain type d'humour sont intemporels."
    ]

    let anecdote = anecdotes[Math.floor(Math.random() * anecdotes.length)];
</script>

<main style={background}>
    <div class="titre">
        <h1>
            ERROR
            <span class="orange">
                404
            </span>    
        </h1>
        <h2>
            Heureusement, nos box sont bien plus remplies
        </h2>
        <h3>Le saviez vous ? <br> <br> {anecdote}</h3>
    </div>
</main>

<style>

main{
    height: 60vh;
    display: flex;
    flex-direction: column;
    margin: auto;
}
h1{
    font-size: 10rem;
    font-family: var(--serifFont);
    width: 100%;
    text-align: center;
}

.titre{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.orange{
    color: var(--orangeBwhat);
}

h2{
    font-size: 2rem;
    font-family: var(--sansFont);
    font-weight: bold;
    width: 100%;
    text-align: center;
}

h3{
    text-align: center;
    width: 50%;
}

@media screen and (max-width: 1024px) {
    h1{
        font-size: 3rem;
    }
    h2{
        font-size: 1rem;
    }
    h3{
        width: 100%;
    }
}
</style>