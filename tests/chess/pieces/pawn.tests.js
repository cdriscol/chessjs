'use strict';

(function() {
  describe('Pawn', function() {
    var pawn,
        color = PieceColor.WHITE,
        board = new ChessBoard();

    beforeEach(function() {
      pawn = new Pawn(color, board);
      pawn.yCoordinate = 5;
    });

    it('should set color to white', function() {
      expect(pawn.color).toBe(color);
    });

    describe('isValidMove', function() {
      it('should return false for sideways move', function() {
          expect(pawn.isValidMove(1, 5)).toBeFalsy();
      });

      it('should return false for 2 space move', function() {
          expect(pawn.isValidMove(0, 3)).toBeFalsy();
      });

      it('should return false for backwards move', function() {
          expect(pawn.isValidMove(0, 4)).toBeFalsy();
      });

      it('should return true for legal move', function() {
        expect(pawn.isValidMove(0, 6)).toBeTruthy();
      });

      it('should return false for illegal board position', function() {
        pawn.board.isLegalBoardPosition = function(x,y) {return false;};
        expect(pawn.isValidMove(0, 6)).toBeFalsy();
      });
    });
  });
})();