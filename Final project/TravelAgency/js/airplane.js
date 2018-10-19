// ***********Travel Agency ****************

// *************Airplane animation***************


var direction='forward';

function fly()

{
    var img =document.getElementById('plane');
     var currentLeft=parseInt(img.style.left);
  
    if((direction==='forward')&&(currentLeft < (window.innerWidth - img.width)))
    {
        
        direction='forward';
    }
    if(currentLeft >= (window.innerWidth ))
    {
        direction='backward';
    }
    if(direction==='backward' && currentLeft<=0)
    {
        direction='forward';
    }
    if (direction==='forward')
    {
        img.style.left=(currentLeft + 10) + 'px';

    }
    else
    {
        img.style.left=0;
              
    }
 


}

setInterval(fly,150);  