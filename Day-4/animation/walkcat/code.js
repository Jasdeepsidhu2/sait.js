

// *********walking Cat*************

/*var walkForward=true;

function catWalk()

{
    var img =document.getElementById('cat');
    var currentLeft=parseInt(img.style.left);
 

    if(walkForward && (currentLeft > (window.innerWidth - img.width)))
    {

        walkForward=false;
    }
    if(!walkForward && currentLeft<=0)
    {

        walkForward=true;
    }
    if (walkForward)
    {
        img.style.left=(currentLeft + 10) + 'px';

    }
    else
    {
        img.style.left=(currentLeft - 10) + 'px';
    }



}

setInterval(catWalk,50);  */



// **********Modified code**************

var direction='forward';
function catWalk()

{
    var img =document.getElementById('cat');
     var currentLeft=parseInt(img.style.left);
    

    if((direction==='forward')&&(currentLeft < (window.innerWidth - img.width)))
    {
        
        direction='forward';
    }
    if(currentLeft > (window.innerWidth - img.width))
    {
        direction='backward';
    }
    if(direction==='backward' && currentLeft<=0)
    {
        // document.write('second');
        direction='forward';
    }
    if (direction==='forward')
    {
        img.style.left=(currentLeft + 10) + 'px';

    }
    else
    {
        img.style.left=(currentLeft - 10) + 'px';
    }



}
// catWalk();

setInterval(catWalk,50);  