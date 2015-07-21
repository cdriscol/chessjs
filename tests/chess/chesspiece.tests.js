'use strict';

(function() {
  describe('ChessPiece', function() {
    var piece,
        board = {},
        color = PieceColor.WHITE;

    beforeEach(function() {
        piece = new ChessPiece(color, board);
    });

    it('should set the color', function() {
      expect(piece.color).toBe(color);
    });

    it('should set the board', function() {
      expect(piece.board).toBe(board);
    });

    it('should have x and y coordinates', function() {
      expect(piece.xCoordinate).toBeDefined();
      expect(piece.yCoordinate).toBeDefined();
    });
  });
})();