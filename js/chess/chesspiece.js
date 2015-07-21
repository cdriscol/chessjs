'use strict';

function ChessPiece(color, board) {
  var base = new GridPiece(board);
  base.color = color;
  return base;
}