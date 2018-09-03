
//imgs 是需要轮播的图片的集合
//dots 是轮播点的集合
//banner 是放轮播点的盒子(元素)
//leftbtn  左箭头(元素)
//rightbtn   有箭头(元素)
//width    轮播图的宽度(必须是整数)

function banner_lr(imgs,dots,banner,leftbtn,rightbtn,width){
		
		 let flag=true;
		 imgs[0].style.left=0;
		 dots[0].className="active";
		 width=parseInt(getComputedStyle(imgs[0],null).width);
		 let now=0;
		 let next=0;
		 let t=setInterval(move,2000);
		 function move()
		 {
			next++;
			if(next==imgs.length)
			{
				next=0;
			}
			
			
			imgs[next].style.left=width+"px";
			animate(imgs[now],{left:-width},function()
			{
				flag=true;
			});
			animate(imgs[next],{left:0},function()
			{
				flag=true;
			});
			dots[now].classList.remove("active");
			dots[next].classList.add("active");
			now=next;
		}
		function moveL()
		{
			next--;
			if(next<0)
			{
				next=imgs.length-1;
				
			}
			
			
			
			imgs[next].style.left=-width+"px";
			animate(imgs[now],{left:width},function()
			{
				flag=true;
			});
			animate(imgs[next],{left:0},function()
			{
				flag=true;
			});
			dots[now].classList.remove("active");
			dots[next].classList.add("active");
			now=next;
		}
		
		
		
		for(let i=0;i<dots.length;i++)
		{
			dots[i].onclick=function()
			{
					if(i==now)
					{
						return;
					}
					else if(now<i)			//点击比i大的
					{
						imgs[i].style.left=`${width}px`;
						animate(imgs[now],{left:-width},function()
						{
							flag=true;
						});
						animate(imgs[i],{left:0},function()
						{
							flag=true;
						});
						dots[now].className="";
						dots[i].className="active";
					}
					else if(now>i)
					{
						imgs[i].style.left=`${-width}px`;
						animate(imgs[now],{left:width},function()
						{
							flag=true;
						});
						animate(imgs[i],{left:0});
						dots[now].className="";
						dots[i].className="active";
					}
					now=i;
					next=now;
			}

		}
		
		banner.onmouseover=function()
		{
				clearInterval(t);
		}
		banner.onmouseout=function()
		{
				t=setInterval(move,2000);
		}
		
//		leftbtn.onclick=function()
//		{
//			if(!flag)
//			{
//				return ;
//			}
//			if(next==0)
//			{
//				return ;
//			}
//			flag=false;
//			
//			moveL();
//		}
//		rightbtn.onclick=function()
//		{
//			if(!flag)
//			{
//				return ;
//			}
//			if(next==imgs.length-1)
//			{
//				return ;
//			}
//			
//			flag=false;
//			move();
//		}
}




function banner(imgs,dots,banner,leftbtn,rightbtn,width)
{ 	 	
		 	imgs[0].style.left="30px";
		 	dots[0].className="active";
		 
		 let now=0;
		 let next=0;
//		 let t=setInterval(move,2000);
		 function move()
		 {
			next++;
			if(next==imgs.length)
			{
				next=0;
			}
			
			
			imgs[next].style.left=width+"px";
			animate(imgs[now],{left:-width},function()
			{
				flag=true;
			});
			animate(imgs[next],{left:30},function()
			{
				flag=true;
			});
			dots[now].classList.remove("active");
			dots[next].classList.add("active");
			now=next;
		}
		function moveL()
		{
			next--;
			if(next<0)
			{
				next=imgs.length-1;
				
			}
			
			
			
			imgs[next].style.left=-width+"px";
			animate(imgs[now],{left:width},function()
			{
				flag=true;
			});
			animate(imgs[next],{left:30},function()
			{
				flag=true;
			});
			dots[now].classList.remove("active");
			dots[next].classList.add("active");
			now=next;
		}
		
		
		
//		for(let i=0;i<dots.length;i++)
//		{
//			dots[i].onclick=function()
//			{
//				
//					if(i==now)
//					{
//						return;
//					}
//					else if(now<i)			//点击比i大的
//					{
//						imgs[i].style.left=`${width}px`;
//						animate(imgs[now],{left:-width},function()
//						{
//							flag=true;
//						});
//						animate(imgs[i],{left:30},function()
//						{
//							flag=true;
//						});
//						dots[now].className="";
//						dots[i].className="active1";
//					}
//					else if(now>i)
//					{
//						imgs[i].style.left=`${-width}px`;
//						animate(imgs[now],{left:width},function()
//						{
//							flag=true;
//						});
//						animate(imgs[i],{left:30});
//						dots[now].classList.remove("active");
//						dots[i].classList.add("active1");
//					}
//					now=i;
//					next=now;
//			}
//
//		}
		
//		banner.onmouseover=function()
//		{
//				clearInterval(t);
//		}
//		banner.onmouseout=function()
//		{
//				t=setInterval(move,2000);
//		}
		
		leftbtn.onclick=function()
		{
			if(!flag)
			{
				return ;
			}
			if(next==0)
			{
				return ;
			}
			flag=false;
			
			moveL();
		}
		rightbtn.onclick=function()
		{
			if(!flag)
			{
				return ;
			}
			if(next==imgs.length-1)
			{
				return ;
			}
			
			flag=false;
			move();
		}
}
