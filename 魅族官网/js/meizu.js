window.onload=function(){
	
	
	//选项卡
	 let cart2=document.querySelectorAll(".topbar-nav ul .top-title");
     console.log(cart2);     
	 let header =document.querySelectorAll(".meizu-header-sub ");	
	 console.log(header);
	  let App=document.querySelector(".topbar-nav ul .APPli");
      console.log(App);
	 let appbox=document.querySelector(".app");
	 console.log(appbox);
	 let head=document.querySelector(".meizu-header");
	 console.log(head);
	 let headl=document.querySelector(".meizu-header .left");
	 console.log(headl);
	 let topa=document.querySelectorAll(".container .meizu-header-wrap-1240 .topbar-nav ul li a");
	 console.log(topa);
	 let head2=document.querySelector(".meizu-header .right .wb ");
	 console.log(head2);
	 let head3=document.querySelector(".meizu-header .right .dl a");
	 console.log(head3);
	  let head4=document.querySelector(".meizu-header .right .gw a");
	  console.log(head4);
	 for(let i=0;i<cart2.length;i++){
	 	cart2[i].onmouseover=function(){
	 		for(let j=0;j<header.length;j++){
	 			header[j].style.display="none";	
	 		}
	 	 header[i].style.display="block";
	 	}
	 	cart2[i].onmouseout=function(){
		  header[i].style.display="none";
		}
	 	 header[i].onmouseover=function(){
			header[i].style.display="block";
		 }  
	 	 header[i].onmouseout=function(){
			header[i].style.display="none";
			
		 }	  
	 }
	 App.onmouseover=function(){
	     appbox.style.display="block";
	 }
	 App.onmouseout=function(){
	     appbox.style.display="none";
	 }

     //个人中心
     let people=document.querySelector(".meizu-header .dl .yonghu");
     console.log(people);
     let people2=document.querySelector(".meizu-header .dl .dlu ");
     console.log(people2);
     let people1=document.querySelector(".meizu-header .dl .dlu ul");
     console.log(people1);
     people.onmouseover=function(){
     	people1.style.display="block";
     }
     people.onmouseout=function(){
     	people1.style.display="block";
     }
     people2.onmouseover=function(){
     	people1.style.display="block";
     }
     people2.onmouseout=function(){
     	people1.style.display="none";
     }
     //侧栏
	 let back=document.querySelector(".back");
	 console.log(back);
	
      back.onclick=function () {
        let res=document.body.scrollTop||document.documentElement.scrollTop;
        res=0;
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
      }  
   
         window.onscroll=function(){
      let bodytop=document.body.scrollTop||document.documentElement.scrollTop;
      console.log(bodytop);
     let list=document.querySelector('.scroll');
     console.log(list);
      if (bodytop>=100){
         list.style.right='0';            
     }
      if (bodytop<100){
          list.style.right='-50px';
          
    }
   }
	
	//轮播图
	 let dots=document.querySelectorAll(".dot");
	   let imgs=document.querySelectorAll(".banner img");
	   let banner=document.querySelector(".banner");
	   let lbtn=document.querySelector(".left-btn");
	   let rbtn=document.querySelector(".right-btn");
	   banner_oi(dots,imgs,banner,lbtn,rbtn,"active",2000); 
	   
	   
	 
	
}