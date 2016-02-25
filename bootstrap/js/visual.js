function boxchange(me){
	var inputElems = document.getElementsByTagName("input"),
	count = 0;
	idx=0;
	var groups=[];
	for (var i=0; i<inputElems.length; i++) {
		if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) 
		{
			groups[idx]=inputElems[i].value;
    		count++;
    		idx++;
		}
	}
	if(count===1)
		alert("Please choose another group to compare.");
	if(count>2)
		alert("Please choose less options.");
	if(count===2)
		alert(groups[0]+"/"+groups[1]);
}
function GraphDisplay(){
	var inputElems = document.getElementsByTagName("input"),
	count = 0;
	idx=0;
	var groups;
	for (var i=0; i<inputElems.length; i++) {
		if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) 
		{
			groups[idx]=inputElems[i].value;
    		count++;
    		idx++;
		}
	}
	if(count===1)
		alert("Please choose another group to compare.");
	if(count>2)
		alert("Please choose less options.");
	if(count===2)
		alert(groups[0]+"/"+groups[1]);
}