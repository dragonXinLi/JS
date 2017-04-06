function getEle(id){
	return document.getElementById(id);
}

function getFirstNode(ele)
{
	var node = ele.firstElementChild ||ele.firstChild;
	return node;
}

function getLastNode(ele){
	return ele.lastElementChild ||ele.lastChild;
}

function getNextNode(ele){
	return ele.nextElementSibling || ele.nextSibling;
}

function getPrevNode(ele){
	return ele.previousElementSibling || ele.previousSibling;
}

function getEleOfIndex(ele , index){
	return ele.parentNode.children[index];
}

function getAllSiblings(ele){
	var arr = [];
	for(var i = 0; i < ele.parentNode.children.length ; i++){
		if(ele.parentNode.children[i] !== ele){
			arr.push(ele.parentNode.children[i]);
		}
	}
	return arr;
}


function getSingleEleByClassName(className)
{
	return document.getElementsByClassName(className)[0];
}
