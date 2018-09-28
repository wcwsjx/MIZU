
/*参数1:轮播点元素集合
参数2:图片元素集合
参数3:banner盒子集合
参数4:左箭头元素
参数5:右箭头元素
参数6:轮播点选中时的类名(string)
参数7:自动轮播的时间间隔(number)
*/
//轮播图封装

/*轮播图*/
function banner_oi( dots,imgs,banner,lbtn,rbtn,active,second){
	  	//1.获取元素   
	   //2.定义自变量
	   let num=0;
	   //3.初始状态:让第一张图片显示/层级提高
	   imgs[0].style.zIndex=2;
	   //对应的轮播点改变样式 
	   //dots[0].style.background="#fff";
	   dots[0].classList.add(active);
	   //4.鼠标移入每一个轮播点
	  for(let i=0;i<dots.length;i++){
	   	    dots[i].onmouseover=function(){
	   	    	//其余图片层级变回1,其余的轮播点样式改变
	   	    	for(let j=0;j<imgs.length;j++){
	   	    		imgs[j].style.zIndex=1;
	   	    		//dots[j].style.background="#333";
	   	    		dots[j].classList.remove(active);
	   	    	}
	   	    	//对应的图片层级提高
	   	         imgs[i].style.zIndex=2;
	   	        // 对应的轮播点样式改变
	   	         //dots[i].style.background="#fff";
	   	         dots[i].classList.add(active);
	   	    //当鼠标移走后继续,轮播
	   	    num=i;
	        }
	  }
	  
	  //5.实现自动轮播
	  //定义一个时间间隔函数
	   let time=setInterval(move,second);
	   function move(){
	  	num++;
	  	if(num==imgs.length){
	  		num=0;
	   }
	  	//其余图片层级变回1,其余的轮播点样式改变
	  	for(let j=0;j<imgs.length;j++){
	   	    		imgs[j].style.zIndex=1;
	   	    		//dots[j].style.background="#333";
	   	    		dots[j].classList.remove(active);
	   	}
	  	    imgs[num].style.zIndex=2;
	  		//dots[num].style.background="#fff";
	  		dots[num].classList.add(active);
	  }
	  
	  //6.鼠标移入banner时,暂停时间间隔函数
	  banner.onmouseover=function(){
	  	clearInterval(time);
	  }
	   //7.鼠标移出banner时,继续时间间隔函数
	    banner.onmouseout=function(){
	  	time=setInterval(move,second);
	  }
	  //8.点击右箭头,同move函数
	   rbtn.onclick=function(){
	   	    move();
	   }
	   //9.点击左箭头
	   lbtn.onclick=function(){
	   	  moveL();
	   }
	   function moveL(){
	  	num--;
	  	if(num<0){
	  		num=imgs.length-1;
	  	}
	  	//其余图片层级变回1,其余的轮播点样式改变
	  	for(let j=0;j<imgs.length;j++){
	   	    		imgs[j].style.zIndex=1;
	   	    		//dots[j].style.background="#333";
	   	    		dots[j].classList.remove(active);
	   	}
	  	    imgs[num].style.zIndex=2;
	  		//dots[num].style.background="#fff";
	  		dots[num].classList.add(active);
	  }
	   
	  /* //10.窗口失去焦点时,暂停时间间隔函数
	    window.onblur=function(){
	    	clearInterval(time);
	    }
	    //11.窗口获取焦点时,继续时间间隔函数
	     window.onfocus=function(){
	    	time=setInterval(move,second);
	    }*/
}

/*左右轮播图*/
function banner_lr( dots,imgs,banner,lbtn,rbtn,widths,active,second){
	   //1.获取元素
	   
	   //变量 定义
	   let next=0;
	   let now=0;
	   let time;
	   //定义开关:当开关是true时,可点击
	   let flag=true;
	   
	   //2.初始值
	   imgs[0].style.left=0;
	   dots[0].classList.add("active");
	   //3.鼠标移入每一个轮播点对应的图片
	   for(let i=0;i<dots.length;i++){
	   	    dots[i].onmouseover=function(){
	   	    	for(let j=0;j<imgs.length;j++){
	   	    		imgs[j].style.left=widths+"px";	
	   	    		dots[j].classList.remove(active);
	   	    	}
	   	         imgs[i].style.left=0;
	   	         dots[i].classList.add(active);
	   	         now=i;
	   	         next=i;
	        }
	  }
	   //4.自动轮播
	  
	   time=setInterval(move,second);
	   function move(){
		   	next++;
		   	if(next==imgs.length){
		   		//循环 
		   		next=0;
		   		//右箭头截止
		   		//next=imgs.length-1;
		   		//return;
		   		//左箭头截止
		   		//next=0;
		   		//return;
		   	}
	   	  imgs[now].style.left=0;
	   	  imgs[next].style.left=widths+"px";
		  animate(imgs[now],{left:-widths},function(){
		   		dots[now].classList.remove(active);
		   		flag=true;
		   	});
		  animate(imgs[next],{left:0},function(){
		   		for(let j=0;j<imgs.length;j++){
		   			dots[j].classList.remove(active);
		   		}
		   		dots[next].classList.add(active);
		   		flag=true;
		   	});
		   	now=next;
	   }
	   //5.
	   banner.onmouseover=function(){
	  	clearInterval(time);
	  }
	   //7.鼠标移出banner时,继续时间间隔函数
	    banner.onmouseout=function(){
	  	time=setInterval(move,second);
	  }
	    
	    rbtn.onclick=function(){
	    	if(!flag){
	    		return ;
	    	}
	   	    flag=false;
	   	    move();
	   }
	    //左箭头
	    lbtn.onclick=function(){
	    	//当flag=true时,!flag=false;可以点击执行函数
	    	//当flag=false时,!flag=true;不可以继续点击,执行return
	    	if(!flag){
	    		return ;
	    	}
	   	    flag=false;
	   	    moveL();
	   }
	   function moveL(){
	   	next--;
	   	if(next==-1){
	   		next=imgs.length-1;
	   	}
	   	 imgs[now].style.left=0;
	   	imgs[next].style.left=widths+"px";
	   	
	   	animate(imgs[now],{left:-widths},function(){
	   		dots[now].classList.remove(active);
	   		flag=true;
	   	});
	   	
	   	animate(imgs[next],{left:0},function(){
	   		for(let j=0;j<dots.length;j++){
	   			dots[j].classList.remove(active);
	   		}
	   		dots[next].classList.add(active);
	   		flag=true;
	   	});
	   	now=next;
	   }
	   //9.窗口失去焦点
	   window.onblur=function(){
	   	clearInterval(time);
	   }
	   window.onfocus=function(){
	   	time=setInterval(move,second);
	   }
}
