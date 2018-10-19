// ***********Travel Agency************


// ***********Contact page************

(function contactList(){
    var agentNames =['Julia Basturd','John Kelly ', 'Jasdeep Sidhu','Gary Gery','Craig Buchhan','Kelly Bliss'];
    var agentNumbers=['123-456-6575','723-856-6575','823-496-6575','888-456-6575','143-456-6575','873-456-6575'];

    for( let i=0;i<agentNames.length;i++){
        var nameList=document.getElementById('nameList');
        var listItem=document.createElement('li');
        listItem.className='listItem';
        listItem.innerHTML='Agent Name=  '+ agentNames[i] + " and    "   +  'Phone Numbers   '+ agentNumbers[i];
        nameList.appendChild(listItem);
    }

})();