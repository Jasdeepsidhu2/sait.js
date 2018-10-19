
// ***********Travel Agency************

// **************set the footer***********
(function dateOnFooter(){
    var months    = ['January','February','March','April','May','June',
    'July','August','September','October','November','December'];
    
    var dateDay=new Date().getDate();
    var dateMonth=months[new Date().getMonth()];
    var dateYear=new Date().getFullYear();
    var date1=dateMonth +' ' + dateDay +' , '+ dateYear;
    // console.log(dateDay,dateMonth,dateYear,date1);
    var siteFooter=document.getElementById('siteFooter');
    siteFooter.innerHTML=date1;

})();

