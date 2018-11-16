
var quote = document.getElementById("quotes");

function init() {
	setTimeout(quote1, 0);

	setTimeout(quote2, 7000);
	
	setTimeout(quote3, 14000);
	
	setTimeout(quote4, 21000);

	setTimeout(quote5, 28000);
	
	setTimeout(quote6, 35000);
	
	setTimeout(quote7, 42000);
	
	setTimeout(quote8, 49000);
	
	setTimeout(quote9, 56000);
	
	setTimeout(quote10, 63000);
}
			
function quote1() {
	quote.innerHTML = "<div style='position: absolute; bottom: 1em; font-size: 2em'><q>We're still in the first minutes of the first day of the Internet revolution.</q><p><cite>- Scott Cook</cite></p></div>";
}	

function quote2() {
	quote.innerHTML = "<div style='position: absolute; bottom: 1em; font-size: 2em'><q>Our printing press is the Internet. Our coffee houses are social networks.</q><p><cite>- Heather Brooke</cite></p></div>";
}

function quote3() {
	quote.innerHTML = "<div style='position: absolute; bottom: 1em; font-size: 2em'><q>Eventually you won't think of 'the Internet business.' You'll think of it more like news, weather, sports....</q><p><cite>- Bill Gates</cite></p></div>";
}

function quote4() {
	quote.innerHTML = "<div style='position: absolute; bottom: 1em; font-size: 2em'><q>To join in the industrial revolution, you needed to open a factory; in the Internet revolution, you need to open a laptop.</q><p><cite>- Alexis Ohanian</cite></p></div>";
}	

function quote5() {
	quote.innerHTML = "<div style='position: absolute; bottom: 1em; font-size: 2em'><q>We are all now connected by the Internet, like neurons in a giant brain.</q><p><cite>- Stephen Hawking</cite></p></div>";
}

function quote6() {
	quote.innerHTML = "<div style='position: absolute; bottom: 1em; font-size: 2em'><q>Getting information off the Internet is like taking a drink from a fire hydrant.</q><p><cite>- Mitchell Kapor</cite></p></div>";
}

function quote7() {
	quote.innerHTML = "<div style='position: absolute; bottom: 1em; font-size: 2em'><q>As the Internet has sped up the consumer experience, customer expectations are higher.</q><p><cite>- Greg Gianforte</cite></p></div>";
}

function quote8() {
	quote.innerHTML = "<div style='position: absolute; bottom: 1em; font-size: 2em'><q>The Internet is becoming the town square for the global village of tomorrow.</q><p><cite>- Bill Gates</cite></p></div>";
}

function quote9() {
	quote.innerHTML = "<div style='position: absolute; bottom: 1em; font-size: 2em'><q>The Internet is a toilet. It is.</q><p><cite>- Lady Gaga</cite></p></div>";
}

function quote10() {
	quote.innerHTML = "<div style='position: absolute; bottom: 1em; font-size: 2em'><q>Connectivity is a human right.</q><p><cite>- Mark Zuckerberg</cite></p></div>";
}

document.addEventListener("DOMContentLoaded", init, false);
			
