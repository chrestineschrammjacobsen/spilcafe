const gameList = document.getElementById("gameList");

// Vis alle spil
function displayGames() {

    gameList.innerHTML = "";

    games.forEach(game => {

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