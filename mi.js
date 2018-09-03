
	window.onload=function()
	{
		let arr=['img/xmad_15330559767656_Cuxjs.jpg','img/xmad_15338982677936_eQTJk.jpg','img/xmad_15357307990199_HfpnA.jpg','img/xmad_15338982677936_eQTJk.jpg','img/xmad_15330559767656_Cuxjs.jpg'];
		let oWrap=document.getElementsByClassName("side-category")[0];
		let lis=oWrap.getElementsByTagName("a");
		let leftbtn=document.querySelector(".prev");
		let rightbtn=document.querySelector(".next");
		OCarousel(arr,lis,"hot");
		
		function OCarousel(arr,dots,activeClass)
		{
		//初始化
		oWrap.style.backgroundImage=arr[0];
		dots[0].classList.add(activeClass);
		let num=0;
		let t=setInterval(move,2000);
		
		
		for(let i=0;i<dots.length;i++)
		{
			dots[i].onmouseover=function()
			{
				for(let j=0;j<dots.length;j++)
				{
					dots[j].className="";
					oWrap.style.backgroundImage="";
				}
				oWrap.style.backgroundImage="url("+arr[i]+")";
				dots[i].className=activeClass;
				num=i;
			}
			
		}
		
	
		function move()
		{
			num++;
			if(num==arr.length)
				{
					num=0;
				}
			for(let j=0;j<dots.length;j++)
			{
				dots[j].className="";
				oWrap.style.backgroundImage="";
				
			}
			oWrap.style.backgroundImage="url("+arr[num]+")";
			dots[num].className=activeClass;
			
		}
		function moveL()
		{
			num--;
			if(num<0)
				{
					num=arr.length-1;
				}
			for(let j=0;j<dots.length;j++)
			{
				dots[j].className="";
				oWrap.style.backgroundImage="";
				
			}
			oWrap.style.backgroundImage="url("+arr[num]+")";
			dots[num].className=activeClass;
			
		}
		
		
		rightbtn.onclick=function()
		{
			move();
		}
		leftbtn.onclick=function()
		{
			moveL();
		}
		rightbtn.onmouseover=leftbtn.onmouseover=oWrap.onmouseover=function()
		{
			clearInterval(t);
		}
		rightbtn.onmouseout=leftbtn.onmouseout=oWrap.onmouseout=function()
		{
			t=setInterval(move,2000);
		}
		
		}
		
		
		
}
		

