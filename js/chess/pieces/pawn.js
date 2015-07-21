'use strict';

function Pawn(color, board) {
  var isValidMove = function(newX, newY) {
    var isOneSpace = Math.abs(newY - this.yCoordinate) === 1;
    var isVertical = newX === this.xCoordinate;
    var isForward  = this.color === PieceColor.BLACK ? this.yCoordinate > newY : this.yCoordinate < newY;
    var isLegalBoardMove = this.board.isLegalBoardPosition(newX, newY);

    return isOneSpace && isVertical && isForward && isLegalBoardMove;
  };

  var base = new ChessPiece(color, board, isValidMove);

  return base;
}