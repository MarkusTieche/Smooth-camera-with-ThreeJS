var inputController = function(){
    
    this.input = {x:0,y:0};

    document.onkeydown = function myFunction() 
    {
        switch (event.keyCode) {
        case 38:
            //UP
            this.input.y = 1;
            break;
        case 40:
            //DOWN
            this.input.y = -1;
            break;
        case 37:
            //RIGTH
            this.input.x = -1;
            break;
        case 39:
            //LEFT
            this.input.x = 1;
            break;
        }
    }.bind(this)

    document.onkeyup = function myFunction() {
        switch (event.keyCode) {
        case 38:
            //UP
            this.input.y =0;
            break;
        case 40:
            //DOWN
            this.input.y = 0;
            break;
        case 37:
            //RIGTH
            this.input.x = 0;
            break;
        case 39:
            //LEFT
            this.input.x =0;
            break;
        }
    }.bind(this)
}

