class log{
    constructor(x,y,width,height){
       var option={
           isStatic:true,
           density:1.2

       }
       this.body=Bodies.rectangle(x,y,width,height,option)
       this.width=width
       this.height=height
       World.add(world, this.body);
    }

    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        
    }
}










