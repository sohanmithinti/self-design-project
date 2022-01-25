AFRAME.registerComponent("terrain-rotation",{
    schema:{
        rotate: {type:"number", default: 0}
    },
    init: function(){
       window.addEventListener("keydown", (e)=>{
           if(e.key == "ArrowRight"){
               if(this.data.rotate < 0.1){
                   this.data.rotate = this.data.rotate + 0.01
               }
           }
           if(e.key == "ArrowLeft"){
            if(this.data.rotate > -0.1){
                this.data.rotate = this.data.rotate - 0.01
            }
        }
       })
    },
    tick: function(){
        var map_r = this.el.getAttribute("rotation")
        map_r.y = map_r.y + this.data.rotate
        this.el.setAttribute("rotation", {x: map_r.x, y: map_r.y, z: map_r.z})
    }
})


AFRAME.registerComponent("plane-rotation",{
    schema:{
        rotate: {type:"number", default: 0},
        pos: {type:"number", default: 0}
    },
    init: function(){
       window.addEventListener("keydown", (e)=>{
        this.data.rotate = this.el.getAttribute("rotation")
        this.data.pos = this.el.getAttribute("position")
           if(e.key == "ArrowRight"){
               if(this.data.rotate.x < 10){
                   this.data.rotate.x = this.data.rotate.x + 0.5
                   this.el.setAttribute("rotation", this.data.rotate)
               }
           }
           if(e.key == "ArrowLeft"){
            if(this.data.rotate.x > -10){
                this.data.rotate.x = this.data.rotate.x - 0.5
                this.el.setAttribute("rotation", this.data.rotate)
            }
        }
        if(e.key == "ArrowUp"){
            if(this.data.rotate.z < 20){
                this.data.rotate.z = this.data.rotate.z + 0.5
                this.el.setAttribute("rotation", this.data.rotate)
            }
            if(this.data.pos.y < 2){
                this.data.pos.y = this.data.pos.y + 0.01
                this.el.setAttribute("position", this.data.pos)
            }
        }
        if(e.key == "ArrowDown"){
            if(this.data.rotate.z > -20){
                this.data.rotate.z = this.data.rotate.z - 0.5
                this.el.setAttribute("rotation", this.data.rotate)
            }
            if(this.data.pos.y > -2){
                this.data.pos.y = this.data.pos.y - 0.01
                this.el.setAttribute("position", this.data.pos)
            }
        }
       })
    }
})