import { Shape } from "./Shape.js"

export class Rectangle extends Shape {
    _width
    _height

    constructor(x,y,width,height){
        super(x,y)
        this._width = width
        if (height === '') {
            this._height = width
        } else {
            this._height = height
        }
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.rect(this._x,this._y,this._width,this._height)
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._color
        ctx.stroke()
    }
}