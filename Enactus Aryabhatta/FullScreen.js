alert("hello");
function getFullScreen(){

	var gFS = document.getElementById('gFS');
	gFS.addEventListener("click",function(){
		window.open();
	});
	gFS.addEventListener("click",function(){
		document.body.requestFullScreen();
	},false);
	//if( ==27){
	//	window.alert("ERROR :: The window will get close on click of escape key");
	//	window.close();
	//}
}


