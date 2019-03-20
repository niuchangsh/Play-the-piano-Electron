document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 49:
            document.getElementById('1').play();
            break;
        case 50:
            document.getElementById('2').play();
            break;
        case 51:
            document.getElementById('3').play();
            break;
        case 52:
            document.getElementById('4').play();
            break;
        case 53:
            document.getElementById('5').play();
            break;
        case 54:
            document.getElementById('6').play();
            break;
        case 55:
            document.getElementById('7').play();
            break;
        default:
            console.log("Key is not found!");
    }
};