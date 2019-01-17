var oa = document.getElementById("my1");
	var oAboutme = document.getElementById("my");
	oa.onmouseover = function() {
		oAboutme.style.backgroundColor = "green";
	};
	oa.onmouseout = function() {
		timer1 = setTimeout(function() {
			oAboutme.style.display = "none"
		}, 1000);
	};
	oAboutme.onmouseover = function() {
		clearTimeout(timer1);
	};
	oAboutme.onmouseout = function() {
		timer1 = setTimeout(function() {
			oAboutme.style.display = "none"
		}, 1000);
	};
