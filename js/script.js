const gameList = document.getElementById("gameList");

    // Vis spil baseret på valgte filtre
    function displayGames() {

    // Find valgte genrer
    const selectedGenres = Array.from(
        document.querySelectorAll('input[name="genre"]:checked')
    ).map(checkbox => checkbox.value);

    gameList.innerHTML = "";

    // Filtrer spillene
    const filteredGames = games.filter(game => {

        const genreMatch =
            selectedGenres.length === 0 ||
            selectedGenres.includes(game.genre);

        return genreMatch;
    });

    // Vis spillene
    filteredGames.forEach(game => {

        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        gameCard.innerHTML = `
            <h3>${game.title}</h3>
            <p>Genre: ${game.genre}</p>
            <p>Sværhedsgrad: ${game.difficulty}</p>
            <p>Spilletid: ${game.playtime} min.</p>
            <p>Antal spillere: ${game.minPlayers}-${game.maxPlayers ?? "flere"}</p>
        `;

        gameList.appendChild(gameCard);

    });
}

displayGames();