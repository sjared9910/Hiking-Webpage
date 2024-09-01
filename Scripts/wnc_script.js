//possible word searches in an array
const fpsearch = ["fryingpan tower", "fryingpan", "tower", "frying", "pan"];
const craggysearch = ["craggy pinnalce trail", "craggy pinnalce", "craggy", "pinnacle", "pinnalce"];
const whitesearch = ["whiteside mountain trail", "whiteside mountain", "whiteside", "white mountain", "white"];
const blacksearch = ["black balsam knob", "black balsam", "black knob", "balsam knob", "balsam"];
const linvillesearch = ["linville falls overlook", "linville falls", "linville", "erwin", "falls"];
const grandfathersearch = ["grandfather trail", "grandfather mountain", "grandfather", "calloway peak", "calloway"];

//Basic search algorithm to look for certain words a user may type in
function searchbar()
{
	//gets value from search bar
	var searchitem = document.getElementById("search").value;
	
	//loops through word arrays to look for website match
	//returns to break loop
	for(var i = 0; i < 5; i++)
	{
		if(searchitem.toLowerCase() == fpsearch[i])
		{
			window.location.href = "wnc_fp.html";
			return;
		}	
		if(searchitem.toLowerCase() == craggysearch[i])
		{
			window.location.href = "wnc_craggy.html";
			return;
		}
		if(searchitem.toLowerCase() == whitesearch[i])
		{
			window.location.href = "wnc_whiteside.html";
			return;
		}
		if(searchitem.toLowerCase() == blacksearch[i])
		{
			window.location.href = "wnc_balsam.html";
			return;
		}
		if(searchitem.toLowerCase() == linvillesearch[i])
		{
			window.location.href = "wnc_linville.html";
			return;
		}	
		if(searchitem.toLowerCase() == grandfathersearch[i])
		{
			window.location.href = "wnc_grandfather.html";
			return;
		}
	}
	//if the search isnt found
	alert("not found");
}

//takes form inputs and combines the names into a comment variable
//this comment is then added to a new list item and placed on the document
//writes comment to an unorder list 'rev' within the review section
function formSave()
{
	var node = document.getElementById('rev');
	var firstname = document.getElementById('firstBox').value;
	var lastname = document.getElementById('LastBox').value; 
	var date = document.getElementById('dateBox').value;
	var comment = document.getElementById('commentBox').value;
	var output = firstname + " " + lastname + " " + date + ": " + comment;
	
	var newNode = document.createElement('p');
	newNode.appendChild(document.createTextNode(output));
	node.appendChild(newNode);
}


