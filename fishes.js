AFRAME.registerComponent("fishes-collide", {
    init: function(){
        for (var i= 1; i <= 10; i = i+ 1){
            var id = `fish${i}`
            var posx = (Math.random()* 3000 + (-1000))
            var posy = (Math.random()* 2 + (-1)) 
            var posz = (Math.random()* 3000 + (-1000))
            var position = {x: posx, y: posy, z:posz} 
            this.createBirds(id, position) 
        }
    },
    createBirds: function(id, position){
        var fish1 = document.createElement("a-entity")
        bird1.setAttribute("id", id)
        bird1.setAttribute("position", position) 
        bird1.setAttribute("scale", {x: 500, y: 500, z: 500})
        bird1.setAttribute("gltf-model", "./fish/scene.gltf")
        bird1.setAttribute("animation-mixer", {})
        bird1.setAttribute("static-body", {shape: "sphere", sphereRadius: 5})
        bird1.setAttribute("collider", {elementId: `#${id}`})
        var terrainEntity = document.querySelector("#map")
        terrainEntity.appendChild(fish1)
    }
})  