//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation.x < 0.1) {
          this.data.speedOfRotation.x += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation.x > -0.1) {
          this.data.speedOfRotation.x -= 0.01;
        }
      }
      if (e.key === "ArrowDown") {
        if (this.data.speedOfRotation.z > -0.1) {
          this.data.speedOfRotation.z -= 0.01;
        }
      }
      if (e.key === "ArrowUp") {
        if (this.data.speedOfRotation.z < 0.1) {
          this.data.speedOfRotation.z += 0.01;
        }
      }

    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});


AFRAME.registerComponent('balloon-rotation-reader',{
  schema:{
    speedOfRotation:{type:'number', default:0},
    speedOfAscent:{type:'number',default:0}
  },
  init: function(){
    window.addEventListener('keydown',(e)=>{
      this.data.speedOfRotation=this.el.getAttribute('rotation')
      this.data.speedOfAscent=this.el.getAttribute('position')
      var balloon_rotation=this.data.speedOfRotation
      var balloon_position=this.data.speedOfAscent
      if(e.key==='ArrowRight'){
        if(balloon_rotation.x < 10){
          balloon_rotation.x += 0.5
          this.el.setAttribute('rotation',balloon_rotation)
        }
      }

      if(e.key==='ArrowLeft'){
        if(balloon_rotation.x > -10){
          balloon_rotation.x -= 0.5
          this.el.setAttribute('rotation',balloon_rotation)
        }
      }

      if(e.key==='ArrowUp'){
        if(balloon_position.y < 2){
          balloon_position.y += 0.01
          this.el.setAttribute('position',balloon_position)
        }
        if(balloon_rotation.z < 20){
          balloon_rotation.z +=0.5
          this.el.setAttribute('rotation',balloon_rotation)
        }
      }

      if(e.key==='ArrowDown'){
        if(balloon_position.y > -2){
          balloon_position.y -= 0.01
          this.el.setAttribute('position',balloon_position)
        }
        if(balloon_rotation.z > -20){
          balloon_rotation.z -= 0.5
          this.el.setAttribute('rotation',balloon_rotation)
        }
      }
    })
  }

})



