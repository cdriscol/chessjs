'use strict';

(function() {
  describe('GridBoard', function() {
    var gridBoard,
        maxWidth = 8,
        maxHeight = 8;

    beforeEach(function() {
        gridBoard = new GridBoard(maxWidth, maxHeight);
    });

    it('should have maxWidth', function() {
      expect(gridBoard.maxWidth).toBe(maxWidth);
    });

    it('should have maxHeight', function() {
      expect(gridBoard.maxHeight).toBe(maxHeight);
    });

    it('should have pieces', function() {
      expect(gridBoard.pieces).toBeDefined();
    });

    describe('isLegalBoardPosition', function() {
      it('should return false for illegal position', function() {
        expect(gridBoard.isLegalBoardPosition(-1,-1)).toBeFalsy();
      });
    });

    describe('addPiece', function() {
      var x = 1,
          y = 1,
          piece = new GridPiece();

      beforeEach(function() {
        gridBoard.addPiece(piece, x, y);
      });

      it('should add piece', function() {
        expect(gridBoard.pieces[x][y]).toBeDefined();
      });

      it('should set piece coordinates', function() {
        expect(piece.xCoordinate).toBe(x);
        expect(piece.yCoordinate).toBe(y);
      });
    });
  });
})();