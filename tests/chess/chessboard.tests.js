'use strict';

(function() {
  describe('ChessBoard', function() {
    var chessboard;

    beforeEach(function() {
      chessboard = new ChessBoard();
    });

    it('should set maxHeight and maxWidth to 8', function() {
      expect(chessboard.maxHeight).toBe(8);
      expect(chessboard.maxWidth).toBe(8);
    });
  });
})();