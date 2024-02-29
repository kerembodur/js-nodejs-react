$(document).ready(function() {
    drawBoard();
});

var board = [];
var turnFlag = false;
function drawBoard (){

    var $container = $('#container');
    for(var i = 0; i < 8; i++){
        board[i] = [];
        for(var j = 0; j < 8; j++){
            $container.append('<div id="tile_' + i + '_' + j + '" class="tiles" xPos="' + i + '" yPos= "' + j + '"></div>');
            board[i][j] = ' ';
        }
    }
    $('.tiles').click(onTilesClick);
    $('#turnLabel').click(onComputerTurnBtn);
    resetBoard();
}

function onTilesClick (){
    console.log('onTilesClick');
    var obj = $(this);
    var xPos = obj.attr('xPos');
    var yPos = obj.attr('yPos');

    var tileType = 'o';
    //if(turnFlag){
    //    tileType = 'x';
    //}

    //console.log('board1 : ' , board);
    var isValid = isValidMove(board, tileType, parseInt(xPos), parseInt(yPos));

    if(isValid){

        obj.attr('isclicked', tileType).off('click');
        board[parseInt(xPos)][parseInt(yPos)] = 'o';
        //console.log('isValid : ' , isValid);
        //console.log('board : ' , board);
        for(var i = 0; i < isValid.length; i++){
            $('#tile_' + isValid[i][0] + '_' + isValid[i][1]).attr('isclicked', tileType).off('click');
            board[isValid[i][0]][isValid[i][1]] = 'o';
        }
        turnFlag = !turnFlag;


        console.log('board : ' , board);
    }
    //console.log('isValidMove : ' , isValidMove(board, 'o', parseInt(xPos), parseInt(yPos)));
    $('#turnLabel').html(tileType);
}

function onComputerTurnBtn(){
    console.log('onComputerTurnBtn : ' , board);
    var computerMove = getComputerMove(board, 'x');
    var isValidComp = isValidMove(board, 'x', computerMove[0], computerMove[1]);
    $('#tile_' + computerMove[0] + '_' + computerMove[1]).attr('isclicked', 'x').off('click');
    board[computerMove[0]][computerMove[1]] = 'x';
    //console.log('computerMove : ', computerMove);
    //console.log('isValidComp : ', isValidComp);

    for(var k = 0; k < isValidComp.length; k++){
        $('#tile_' + isValidComp[k][0] + '_' + isValidComp[k][1]).attr('isclicked', 'x').off('click');
        board[isValidComp[k][0]][isValidComp[k][1]] = 'x';
    }
    //console.log('board : ' , board);

}
function resetBoard(){
    $('.tiles').attr('isclicked', ' ');
    $('#tile_3_3').attr('isclicked', 'x').off('click');
    $('#tile_3_4').attr('isclicked', 'o').off('click');
    $('#tile_4_3').attr('isclicked', 'o').off('click');
    $('#tile_4_4').attr('isclicked', 'x').off('click');
    board[3][3] = 'x';
    board[3][4] = 'o';
    board[4][3] = 'o';
    board[4][4] = 'x';
}
function isValidMove(board, tile, xstart, ystart){

        var otherTile, tempAry = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]];
        if (board[xstart][ystart] != ' ' || !isOnBoard(xstart, ystart))
            return false;
        //console.log('burada : ' + xstart + ' / '+ ystart);
        board[xstart][ystart] = tile;

        if (tile == 'x')
            otherTile = 'o';
        else
            otherTile = 'x';

        var tilesToFlip = [];

        for(var i = 0; i < tempAry.length; i++){
            var x = xstart;
            var y = ystart;

            var xdirection = tempAry[i][0];
            var ydirection = tempAry[i][1];

            x += xdirection;
            y += ydirection;

            //console.log('test : ' + xdirection + ' / ' + ydirection + ' / ' + x + ' / ' + y);

            if (isOnBoard(x, y) && board[x][y] == otherTile){

                x += xdirection;
                y += ydirection;
                if (!isOnBoard(x, y))
                    continue;

                while (board[x][y] == otherTile){
                    x += xdirection;
                    y += ydirection;
                    if (!isOnBoard(x, y))
                        break;
                }

                if (!isOnBoard(x, y))
                    continue;

                if (board[x][y] == tile){

                    while (true){
                        x -= xdirection;
                        y -= ydirection;
                        if (x == xstart && y == ystart)
                            break;
                        tilesToFlip.push([x, y]);
                    }
                }
            }
        }

        board[xstart][ystart] = ' ';
        if (tilesToFlip.length == 0)
            return false;
        return tilesToFlip;
}

function isOnBoard(x,y){
    return x >= 0 && x <= 7 && y >= 0 && y <=7
}


function getValidMoves(board, tile){
    var validMoves = [];
    for(var i = 0; i < 8; i++){
        for(var j = 0; j < 8; j++){
            var isValid = isValidMove(board, tile, i, j);
            if (isValid){
                //console.log('isValidMove : ' , isValid);
                validMoves.push([i, j]);
            }

        }
    }
    return validMoves
}

function getComputerMove(board, computerTile){

    var possibleMoves = getValidMoves(board, computerTile);
    //console.log('possibleMoves : ' , possibleMoves);
    var shuffledMoves = shuffleArray(possibleMoves);

    //console.log('shuffledMoves : ' , shuffledMoves);
    //for x, y in possibleMoves:
    //if isOnCorner(x, y):
    //    return [x, y]

    //bestScore = -1

    //for(var i = 0; i < shuffledMoves.length; i++) {
        var x = shuffledMoves[0][0];
        var y = shuffledMoves[0][1];

        //dupeBoard = getBoardCopy(board)
        //makeMove(dupeBoard, computerTile, x, y)
        //score = getScoreOfBoard(dupeBoard)[computerTile]
        //if score > bestScore:
        var bestMove = [x, y];
        //bestScore = score
    //}

    return bestMove
}


//function makeMove(board, tile, xstart, ystart){
//    var tilesToFlip = isValidMove(board, tile, xstart, ystart);
//
//    if (tilesToFlip == false)
//        return false;
//
//    board[xstart][ystart] = tile;
//    for(var i = 0; i < tilesToFlip.length; i++) {
//        var x = tilesToFlip[i][0];
//        var y = tilesToFlip[i][1];
//        board[x][y] = tile;
//    }
//    return true;
//}

function getBoardWithValidMoves(board, tile){
    //var dupeBoard = getBoardCopy(board);
    //
    //for x, y in getValidMoves(dupeBoard, tile):
    //    dupeBoard[x][y] = '.';
    //   return dupeBoard;
}

function shuffleArray (o){
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    	return o;
}