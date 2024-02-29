var xAngle = 0, yAngle = 0;
document.body.onkeydown = function(evt) {
    switch(evt.keyCode) {
        case 37: // left
            yAngle -= 90;
            break;

        case 38: // up
            xAngle += 90;
            break;

        case 39: // right
            yAngle += 90;
            break;

        case 40: // down
            xAngle -= 90;
            break;
    };
    document.getElementById('cube').style.transform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
};
