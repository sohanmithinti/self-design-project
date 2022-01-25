AFRAME.registerComponent("ship-target", {
    init: function(){
        for (var i= 1; i <= 10; i = i+ 1){
            var id = `ship${i}`
            var posx = (Math.random()* 3000 + (-1000))
            var posy = 6
            var posz = (Math.random()* 3000 + (-1000))
            var position = {x: posx, y: posy, z:posz} 
            this.createRings(id, position) 
        }
    },
    createRings: function(id, position){ 
        var ship1 = document.createElement("a-entity")
        ship1.setAttribute("id", id)
        ship1.setAttribute("position", position) 
        ship1.setAttribute("scale", {x: 500, y: 500, z: 500})
        ship1.setAttribute("gltf-model", "./ship/scene.gltf")
        ship1.setAttribute("animation-mixer", {})
        ship1.setAttribute("static-body", {shape: "sphere", sphereRadius: 5})
        ship1.setAttribute("collider", {elementId: `#${id}`})
        var terrainEntity = document.querySelector("#map")
        terrainEntity.appendChild(ship1)
        
    }
})