var inputController = function(){
    
    this.input = {x:0,y:0};

    document.getElementById("input").addEventListener("mousedown",function(event){
        if(event.offsetY >= 100)
        {

            if(event.offsetX <= 70)
            {
                this.input.x = 1;
                return;
            }

            if(event.offsetX <= 140)
            {
                this.input.y = -1;
                return;
            }

            if(event.offsetX >= 140)
            {
                this.input.x = -1;
                return;
            }
        }
        else
        {
            this.input.y = 1;
        }

    }.bind(this))
    document.getElementById("input").addEventListener("mouseup",function(event){ this.input = {x:0,y:0};}.bind(this))

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