// Rule: Never have more then 10 lines per function unless you have to
// For skinny do 25 25 75, and for normal do 50 50 100
function triangle(name, color, side, side_size, side_size2, mid_size, x, y){
	var node = document.createElement("DIV"); 
	node.id = name;
	node.style.width = 0;
	node.style.height = 0;
	node.style.borderleft = side_size + "px solid transparent";
	node.style.borderright = side_size2 + "px solid transparent";
	if(side == "top"){
		node.style.borderbottom = mid_size + "px solid";
	}else{
		node.style.bordertop = mid_size + "px solid";
	}
	node.style.position = "absolute";
	node.style.background = "red";
	node.style.top = y+"px";
	node.style.left = x+"px";
	node.class = "tri";
	node.appendChild(document.createTextNode("This is new."));
	document.body.appendChild(node);
	if (typeof(node.id) != 'undefined' && node.id != null)
	{
	  alert("yay");
	  var bodyRect = document.body.getBoundingClientRect(),
	      elemRect = node.getBoundingClientRect(),
	      offset   = elemRect.top - bodyRect.top;

	  alert('Element is ' + offset + ' vertical pixels from <body>');
	}
}

function send_data(info){ // info = [name, color, side, size_side, size_mid]; 
	triangle(info.name, info.color, info.side, info.side_size, info.side_size2, info.mid_size, info.x, info.y);
}

function make_data(name, color, side, side_size, side_size2, mid_size, x, y){
	info = [];
	info.name = name;
	info.color = color;
	info.side = side;
	info.side_size =  side_size;
	info.side_size2 =  side_size2;
	info.mid_size = mid_size;
	info.x = x;
	info.y = y;
	send_data(info);
}

/*
tall skinny triangle
	width: 0;
	height: 0;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	border-top: 75px solid #F1C40F;

normal equallateral triangle
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 100px solid #F1C40F;
*/