/*
* @Author: 王金龙
* @Date:   2017-11-08 22:01:14
* @Last Modified by:   王金龙
* @Last Modified time: 2017-11-23 02:24:52
*/
window.onload=function(){
	let li=document.getElementsByClassName('he')[0];
	let lisbox=li.getElementsByTagName('li');
	let first=document.getElementsByClassName('firstTuHe');
	console.log(li,lisbox,first);
  let xiaoyuan=document.querySelectorAll('.xiaoyuan li');
  console.log(xiaoyuan);

	 for(let i=0;i<lisbox.length;i++){
    	lisbox[i].onmouseover=function(){
    		first[i].style.display='block';
    	}
    	lisbox[i].onmouseout=function(){
    		first[i].style.display='none'; 
    	}
    }
    let ban=document.getElementsByClassName('banner-list')[0];
    console.log(ban);
    let lisa=ban.getElementsByTagName('li');
    console.log(lisa);
    let num=0;
    let t=setInterval(fn,1000);
    ban.onmouseover=function(){
        clearInterval(t);
    };
    ban.onmouseout=function(){
         clearInterval(t);
        t=setInterval(fn,1000);

    };
    for(let i=0;i<xiaoyuan.length;i++){
      xiaoyuan[i].onmouseover=function(){
        lisa[i].style.display='none';
        xiaoyuan[i].style.background='';
        lisa[num].style.display='block';
        xiaoyuan[num].style.background='yellow';
        num=i;
      }
    }
    function fn(){
    	num++;
    	if(num==lisa.length){
    		num=0;
    	}
    	for(let i=0;i<lisa.length;i++){
    		lisa[i].style.display='none';
        xiaoyuan[i].style.background='';
    	}
    	lisa[num].style.display='block';
      xiaoyuan[num].style.background='yellow';
    }
    

    
   


   
    let woDe=document.querySelector('.woDeTaoBao');
    // console.log(woDe);
    let maiChu=document.querySelector('.maiChuBaoBei');
    // console.log(maiChu);
        woDe.onmouseover=function(){
           woDe.style.display='block';
           maiChu.style.display='block';
            woDe.style.background='white';
        }
        woDe.onmouseout=function(){
           maiChu.style.display='none'; 
           woDe.style.background=''; 
        }
    let shouChang=document.querySelector('.shouChangJia');
     console.log(shouChang);
     let yiShou=document.querySelector('.yiShouChang');
     console.log(yiShou);
      shouChang.onmouseover=function(){
          shouChang.style.display='block';
           yiShou.style.display='block';
            shouChang.style.background='white';
        }
        shouChang.onmouseout=function(){
           yiShou.style.display='none'; 
           shouChang.style.background=''; 
        }

        let tianMao=document.querySelector('.tianMaoErWeiMa');
    console.log(tianMao);
    let ErWei=document.querySelector('.ErWeiMaTu');
    console.log(ErWei);
        tianMao.onmouseover=function(){
          ErWei.style.display='block';

        }
         tianMao.onmouseout=function(){
          ErWei.style.display='none';
        }

        let shangJia=document.querySelector('.shangJiaZhiChi');
        console.log(shangJia);
        let shangJias=document.querySelector('.shangJia');
        console.log(shangJias);
        shangJia.onmouseover=function(){
          shangJias.style.display='block';
        }
        shangJia.onmouseout=function(){
          shangJias.style.display='none';
        }

        // 楼层跳转
       let back=document.querySelector('.back');
        console.log(back);
        let body=document.querySelector('body');
        console.log(body);
        back.onclick=function(){
          animate(document.body,{scrollTop:0});
          animate(document.documentElement,{scrollTop:0});
        }

        /*let chaoShi=document.querySelectorAll('.chaoShi');
        console.log(chaoShi);
        let headleft=document.querySelectorAll('.head-left');
        console.log(headleft);
        
        let yansearr=['#123345','red','yellow','blue','orange','pink','glod','black'];
        window.onscroll=function(){
            let scr=document.documentElement.scrollTop;
            headleft.forEach(function(val,index){
                if(scr+600>=val.offsetTop){
                  console.log(val.offsetTop)
                   chaoShi.forEach(function(f){
                      f.style.background='';
                   })
                  chaoShi[index].style.background=yansearr[index];
                }
            })
        };*/

        
       


}

