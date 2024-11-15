// Select all the tiles
const tiles = document.querySelectorAll('td');
let rightOfTheTile;
let leftOfTheTile;
let bottomOfTheTile;
let topOfTheTile;
const table = document.querySelector("#table");

const canMove = (tile) => {
  // TODO: Check if a tile has an empty neighbour
  // console.log(table.rows[0].cells[0]);
  // if (tile === table.rows[0].cells[0]) {
  //   console.log(true);
  // }
  // console.log(false);
  // console.log(tile.cellIndex);
  // console.log(tile.parentNode.rowIndex);
  const cellIndex = tile.cellIndex;
  const rowIndex = tile.parentNode.rowIndex;

  if ((cellIndex - 1) >= 0) {
    leftOfTheTile = table.rows[rowIndex].cells[cellIndex - 1];
  } else {
    leftOfTheTile = "";
  }
  if ((cellIndex + 1) <= 3) {
    rightOfTheTile = table.rows[rowIndex].cells[cellIndex + 1];
  } else {
    rightOfTheTile = "";
  }
  if ((rowIndex - 1) >= 0) {
    topOfTheTile = table.rows[rowIndex - 1].cells[cellIndex];
  } else {
    topOfTheTile = "";
  }
  if ((rowIndex + 1) <= 3) {
    bottomOfTheTile = table.rows[rowIndex + 1].cells[cellIndex];
  } else {
    bottomOfTheTile = "";
  }

  // console.log(topOfTheTile);
  // console.log(rightOfTheTile);
  // console.log(bottomOfTheTile);
  // console.log(leftOfTheTile);

  // console.log(rightOfTheTile.classList.contains('empty'));

  if ((rightOfTheTile !== "") && (rightOfTheTile.classList.contains('empty') === true)) {
    // console.log(rightOfTheTile);
    return true;
  }

  if ((leftOfTheTile !== "") && (leftOfTheTile.classList.contains('empty') === true)) {
    // console.log(leftOfTheTile);
    return true;
  }

  if ((topOfTheTile !== "") && (topOfTheTile.classList.contains('empty') === true)) {
    // console.log(topOfTheTile);
    return true;
  }

  if ((bottomOfTheTile !== "") && (bottomOfTheTile.classList.contains('empty') === true)) {
    // console.log(bottomOfTheTile);
    return true;
  }
  return false;
};

const moveTile = (tile) => {
  // TOOD: Move the tile
  // console.log(tile);
  // console.log(cellIndex);
  // console.log(rowIndex);
  const cellIndex = tile.cellIndex;
  const rowIndex = tile.parentNode.rowIndex;
  const empty = document.querySelector(".empty");
  const emptyTileCellIndex = empty.cellIndex;
  const emptyTileRowIndex = empty.parentNode.rowIndex;
  // empty.classList.remove("empty");
  // console.log(empty.innerHTML);
  // console.log(emptyTileRowIndex, emptyTileCellIndex);

  if (canMove(tile)) {
    table.rows[emptyTileRowIndex].cells[emptyTileCellIndex].innerHTML = tile.innerHTML;
    table.rows[rowIndex].cells[cellIndex].innerHTML = "";
    empty.classList.remove("empty");
    tile.classList.add("empty");
  }
};

const checkIfPlayerWins = () => {
  // TODO: Check if player has won
  // console.log(table.rows);
  // Array.from(table.rows).forEach(row => {
  //   // console.log(row.cells);
  //   // console.log(Array.from(row));
  //   Array.from(row.cells).forEach(cell => {
  //     console.log(cell);
  //   });
  // });
  const array0 = [];
  const array1 = [];
  const array2 = [];
  const array3 = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 4; i++) {
    // console.log(table.rows[0].cells[i].innerHTML);
    array0.push(Number(table.rows[0].cells[i].innerHTML));
    array1.push(Number(table.rows[1].cells[i].innerHTML));
    array2.push(Number(table.rows[2].cells[i].innerHTML));
    array3.push(Number(table.rows[3].cells[i].innerHTML));
  }
  // console.log(array0);
  // console.log(array1);
  // console.log(array2);
  // console.log(array3);
  // eslint-disable-next-line max-len
  if ((array0 === [1, 2, 3, 4]) && (array1 === [5, 6, 7, 8]) && (array2 === [9, 10, 11, 12]) && (array3 === [13, 14, 15, 0])) {
    return "You win !";
  }
};

// Add event listener on each tile - Do not change the following
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    if (canMove(tile)) {
      moveTile(tile);
      checkIfPlayerWins();
    }
  });
});
