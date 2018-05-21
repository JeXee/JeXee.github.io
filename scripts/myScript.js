function myFunction() {
    document.getElementById("extend-box").innerHTML = "Paragraph changed.";
}
function datetime() {
    document.getElementById("extend-box").innerHTML = Date();
}
function readTextFile(locate)
{
	var file;
	file = 'picturetexts/'+locate+'.txt';
	/*Old path*/
	/*if(locate == 2)
	{
		file = 'file:///C:/Users/heino/Downloads/JeXee.github.io-master/suunnitelma.txt';
	}
	if(locate > 2)
	{
		file = 'file:///C:/Users/heino/Downloads/JeXee.github.io-master/suunnitelma.txt';	
	}*/
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
	/*rawFile.overrideMimeType('text/xml; charset=iso-8859-1');*/
	rawFile.overrideMimeType("application/json");
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                /*document.getElementById("extend-box").innerHTML = allText;*/
				/*var x = document.getElementsByClassName("inner_content_element");
				var y = document.getElementById("extend-box");*/
				var x = document.querySelectorAll("#extend-box")
				x[locate].innerHTML = allText;
            }
        }
    }
    rawFile.send(null);
}
/*Tällä testataan oikean tiedoston lukua tekstikenttään*/
function readTextFile2(locate)
{
	var file;
	file = 'picturetexts/'+locate+'.txt';
	/*file = 'file:///C:/Users/heino/Downloads/JeXee.github.io-master/picturetexts/'+locate+'.txt';*/
	/*Old path*/
	/*if(locate == 2)
	{
		file = 'file:///C:/Users/heino/Downloads/JeXee.github.io-master/suunnitelma.txt';
	}
	if(locate > 2)
	{
		file = 'file:///C:/Users/heino/Downloads/JeXee.github.io-master/suunnitelma.txt';	
	}*/
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
	rawFile.overrideMimeType('text/xml; charset=iso-8859-1');
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var x = document.getElementById("tekstikentta").innerHTML = allText;
				/*var x = document.getElementsByClassName("inner_content_element");
				var y = document.getElementById("extend-box");*/
				/*var x = document.querySelectorAll("#tekstikentta")*/
				x[locate].innerHTML = allText;
				x[locate].style.display = "block";
            }
        }
    }
    rawFile.send(null);
}
function change_extend(location)
{
	/*var x = document.querySelectorAll("#extend-box")
    if (x[location].style.display == "none") {
        x[location].style.display = "block";
    }
	readTextFile(location);*/
	only_hide();
	var x = document.querySelectorAll("#extend-box");
	x[location].style.display = "block";
	readTextFile(location);
}
/*Tuo esille kaikki extend-box elementit*/
function just_extend()
{
	var x = document.querySelectorAll("#extend-box")
	for(i = 0; i < x.length; i++)
	{
		x[i].style.display = "block";
	}
   /* var x = document.getElementById("extend-box");
    x.style.display = "block";*/
}
/*Piilottaa kaikki extend-box elementit*/
function only_hide()
{
	var x = document.querySelectorAll("#extend-box")
	var i;
	for(i = 0; i < x.length; i++)
	{
		x[i].style.display = "none";
	}
  /*  var x = document.getElementById("#extend-box");
    x.style.display = "none";*/

}

function onloadfunction(page)
{
	var x;
	var y;
	if(page == 0)
	{
		x = document.querySelectorAll("#Home");
		onloadgenerate(page);
	}
	if(page == 1)
	{
		x = document.querySelectorAll("#Projects");
	}
	if(page == 2)
	{
		x = document.querySelectorAll("#Resume");
		onloadgenerate(page);
	}
	x[0].style.backgroundColor = "#a3a3a3";
	x[0].style.color = "black";

}
function onloadgenerate(locate)
{
	var file;
	var x,y;
	y = document.querySelectorAll(".inner-content1");
	if(locate == 0)
	{
		x = "home";
	}
	if(locate == 1)
	{
		x = "projects";
	}
	if(locate == 2)
	{
		x = "resume";
	}
	file = 'picturetexts/'+x+'.txt';
    /*file= 'file:///C:/Users/heino/Desktop/update/JeXee.github.io-master/JeXee.github.io-a3c3b840ce3ae8cd3567c2f787e4d17d65377360/picturetexts/home.txt';*/
    /*Old path*/
    /*if(locate == 2)
    {
        file = 'file:///C:/Users/heino/Downloads/JeXee.github.io-master/suunnitelma.txt';
    }
    if(locate > 2)
    {
        file = 'file:///C:/Users/heino/Downloads/JeXee.github.io-master/suunnitelma.txt';   
    }*/
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
	rawFile.overrideMimeType("application/json");
    /*rawFile.overrideMimeType('text/xml; charset=iso-8859-1');*/
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                /*document.getElementById("extend-box").innerHTML = allText;*/
                /*var x = document.getElementsByClassName("inner_content_element");
                var y = document.getElementById("extend-box");*/
                /*var x = document.querySelectorAll(".inner-content1")*/
                y[0].innerHTML = allText;
            }
        }
    }
    rawFile.send(null);
}
