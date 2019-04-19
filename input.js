var inputController = function(){
    
    this.input = {x:0,y:0};

    // document.getElementById("input").addEventListener("mousedown",function(event){
    //     if(event.offsetY >= 100)
    //     {

    //         if(event.offsetX <= 70)
    //         {
    //             this.input.x = 1;
    //             return;
    //         }

    //         if(event.offsetX <= 140)
    //         {
    //             this.input.y = -1;
    //             return;
    //         }

    //         if(event.offsetX >= 140)
    //         {
    //             this.input.x = -1;
    //             return;
    //         }
    //     }
    //     else
    //     {
    //         this.input.y = 1;
    //     }

    // }.bind(this))
     document.getElementById("input").onmousedown = inputStart.bind(this)
     document.getElementById("input").ontouchstart = inputStart.bind(this)
     document.getElementById("input").onmouseup = inputEnd.bind(this)
     document.getElementById("input").ontouchend = inputEnd.bind(this)

    function inputStart(event)
    {
        console.log("lkjbc")
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
    }

    function inputEnd(event)
    {
        this.input = {x:0,y:0};
    }


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