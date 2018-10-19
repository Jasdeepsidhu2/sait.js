
// ***********Travel Agency************

// *********package page**************
(function packageSetting(){
    var packages=['package1','package2','package3','package4'];
    
    packages.forEach(function(item){
        var package=document.getElementById(item);
        console.log('package is  ',package);
        package.addEventListener('mouseover',function(event){
           

            // package.innerHTML='';
            var background="url('./css/images/"+item + ".jpg')";
            package.style.background=background;
            console.log('ba' ,background);
             package.style.backgroundSize='cover'


        })

        package.addEventListener('mouseout',function(event){
           

            // package.innerHTML='';
            var background="url('./css/images/"+item + ".jpg')";
            package.style.background=background;
            console.log('ba' ,background);
             package.style.backgroundSize='cover'


        })

        
    })



})();


