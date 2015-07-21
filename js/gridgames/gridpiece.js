'use strict';

var PieceColor = {
  BLACK: 0,
  WHITE: 1
};

function GridPiece(board, isValidMove) {
  this.xCoordinate = 0;
  this.yCoordinate = 0;
  this.board = board;

  this.isValidMove = isValidMove;
}

GridPiece.prototype.move = function(newX, newY) {
  if(this.isValidMove(newX, newY)) {
    this.xCoordinate = newX;
    this.yCoordinate = newY;
  }
};