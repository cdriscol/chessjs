'use strict';

function GridPiece(board, isValidMove) {
  this.xCoordinate = 0;
  this.yCoordinate = 0;
  this.board = board;

  this.isValidMove = isValidMove;

  this.move = function(newX, newY) {
    if(isValidMove(newX, newY)) {
      this.xCoordinate = newX;
      this.yCoordinate = newY;
    }
  };
}

var PieceColor = {
  BLACK: 0,
  WHITE: 1
};