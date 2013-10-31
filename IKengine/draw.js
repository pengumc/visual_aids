//=====================
// TRACE
//=====================
function trace(text){
    el = document.getElementById("trace");
    if(el.childNodes.length > 40) el.removeChild(el.childNodes[0]);
    el.innerHTML += "<div>"+text+"</div>";
}


//=====================
// DRAW GRID
//=====================
function draw_grid(ctx, width, height, size, color){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(0,0);
    var i;
    for(i=0;i<width;i+=size){
        ctx.moveTo(i, 0);
        ctx.lineTo(i,height);
    }
    for(i=0;i<height;i+=size){
        ctx.moveTo(0, i);
        ctx.lineTo(width,i);
    }
    ctx.stroke();
}


//=====================
// DRAW SOMETHING
//=====================
function draw_something(ctx){
    ctx.save();
    context.transform(1,0,0,-1,500,400);
    
    ctx.beginPath();
    ctx.arc(0,0,10,0,2*Math.PI);
    ctx.stroke();
    
    ctx.beginPath();
    var s=3;
    var as,ae;
    var step = Math.PI / 2 / s;
    for(i=0;i<s;i++){
        ctx.moveTo(0,0);
        as = i * step
        ae = as + step
        ctx.arc(0,0,400,as, ae);
        ctx.lineTo(0,0);
    }
    ctx.stroke();
    
    ctx.restore();
}


//=====================
// DRAW ARRAY POINTS
//=====================
function draw_array_points(ctx, ar, width){
    ctx.save();
    context.transform(1,0,0,-1,500,400);

    ctx.beginPath();
    ctx.fillStyle = "#ff0000";
    var step = width/ar.length;
    var x
    for(var i=0;i<ar.length;i++){
        e = ar[i];
        x = i * step;
        ctx.fillRect(x-width/2, e, 2,2);
    }
    
    ctx.restore();
}

//=====================
// GENERATE_SINE_ARRAY
//=====================
function generate_sine_array(size){
    var a = new Array(size);
    var t;
    for(i=0;i<size;i++){
        t = 127 * (Math.sin(Math.PI/(size-1) * 2 * i));
        if (t>0) a[i] = Math.floor(t);
        else a[i] = Math.ceil(t);
        trace(i*2*Math.PI/(size-1) + " " + a[i]);
    }
    return(a);
}