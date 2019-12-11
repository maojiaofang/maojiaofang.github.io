var logo =document.querySelector(".logo")
var logo1 =document.querySelector(".logo1 a")
document.body.onscroll =function(){
		if(window.pageYOffset>logo1.offsetTop-window.innerHeight +logo1.offsetHeight){
			logo1.classList.add("active")
		}else{
			logo1.classList.remove("active")
		}
	}
}