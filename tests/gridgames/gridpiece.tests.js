'use strict';

(function() {
  describe('GridPiece', function() {
    var piece;

    beforeEach(function() {
      piece = new GridPiece();
    });

    it('should be defined', function() {
      expect(piece).toBeDefined();
    });

    it('should have coordinates', function() {
      expect(piece.xCoordinate).toBe(0);
      expect(piece.yCoordinate).toBe(0);
    });

    describe('move', function() {
      var newX = 1,
          newY = 1,
          piece,
          board = {};

      describe('with invalid move', function() {
        beforeEach(function() {
          var isValidMove = function() { return false; };
          piece = new GridPiece(board);
          piece.isValidMove = isValidMove;
          piece.move(newX, newY);
        });

        it('should set the x and y coordinates', function() {
          expect(piece.xCoordinate).not.toBe(newX);
          expect(piece.yCoordinate).not.toBe(newY);
        });
      });

      describe('with valid move', function() {
        beforeEach(function() {
          var isValidMove = function() { return true; };
          piece = new GridPiece(board);
          piece.isValidMove = isValidMove;
          piece.move(newX, newY);
        });

        it('should set the x and y coordinates', function() {
          expect(piece.xCoordinate).toBe(newX);
          expect(piece.yCoordinate).toBe(newY);
        });
      });
    });
  });
})();