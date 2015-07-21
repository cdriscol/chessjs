'use strict';

function GridBoard(maxWidth, maxHeight) {
  this.maxHeight = maxHeight;
  this.maxWidth = maxWidth;
  this.pieces = [];

  for(var i=0;i<maxWidth;i++) {
    this.pieces[i] = {};
  }

  this.isLegalBoardPosition = function(x, y) {
    return x >= 0 && x < maxWidth && y >= 0 && y<= maxHeight;
  };

  this.addPiece = function(piece, x, y) {
    piece.xCoordinate = x;
    piece.yCoordinate = y;
    this.pieces[x][y] = piece;
  };
}