'use strict';

function ChessPiece(color, board, isValidMove) {
  var base = new GridPiece(board, isValidMove);
  base.color = color;
  return base;
}