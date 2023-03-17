const client_id = 'JLBr5npPhV';
const limit = 5;

function getBoardgame(boardGameName) {
  return fetch(
    `https://api.boardgameatlas.com/api/search?name=${boardGameName}&limit=${limit}&pretty=true&client_id=${client_id}`
  )
    .then((res) => res.json())
    .then((boardGame) => {
      return boardGame;
    });
}

export default function getBoardgameImg(boardGameName) {
  return getBoardgame(boardGameName).then((boardGame) => {
    return boardGame.games.map(({ image_url }) => image_url);
  });
}
