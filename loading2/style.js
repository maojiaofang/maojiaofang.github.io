window.onload = function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var W = canvas.width;
    var H = canvas.height;
    var degrees = 0;
    var new_degrees = 0;
    var difference = 0;
    var color = "#aeade6";
    var bgcolor = "#E8E8E8";
    var text;
    var animation_loop, redraw_loop;
   
    function init() {
      ctx.clearRect(0, 0, W, H);
   
      ctx.beginPath();
      ctx.strokeStyle = bgcolor;
      ctx.lineWidth = 10;
      ctx.arc(W / 2, H / 2, 100, 0, Math.PI * 2, false); //you can see the arc now
      ctx.stroke();
   
      var radians = degrees * Math.PI / 180;
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 10; 
      ctx.arc(W / 2, H / 2, 100, 0 - 90 * Math.PI / 180, radians - 90 * Math.PI / 180, false);
      ctx.stroke();
   
      ctx.fillStyle = color;
      ctx.font = "20px bebas";
      text = Math.floor(degrees / 360 * 100) + "%";
      text_width = ctx.measureText(text).width;
      ctx.fillText(text, W / 2 - text_width / 2, H / 2 + 15);
    }
   
    function draw() {
      if (typeof animation_loop != undefined) clearInterval(animation_loop);
      new_degrees = new_degrees + 1;
      difference = new_degrees - degrees;
      animate_to();
    }
   
    function animate_to() {
      if (degrees == new_degrees)
        clearInterval(animation_loop);
   
      if (degrees == 360)
        return;
   
      if (degrees < new_degrees) {
        degrees++;
      } else {
        degrees--;
      }
      init();
    }
   
    draw();
    redraw_loop = setInterval(draw, 10);
  }