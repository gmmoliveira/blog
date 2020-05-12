function loadmenu() {
	var client = new XMLHttpRequest();
	client.open('GET', 'menu.html');
	document.getElementById("menu_header").innerHTML = client.responseText;
}