
class Point {

    constructor(private x?: number, private y?: number){
    }

    draw() {
            console.log("X:" + this.x + ', Y: ' + this.y);
    }
    
    get X(){
        return this.x;
    }
 
    set X(value){
        if(value < 0 ){
            throw new Error('value cannot be less than zero 0.');
        }
        this.x = value;
    }    
}



let point: Point = new Point();
let x = point.X;
point.X = 10;
point.draw();