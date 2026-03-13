

function serch() {
    var search = document.getElementById("serch").value.toLowerCase();
    if (search == "fan's" || search == "fan" || search == "cooling fan's" || search == "cooling fan")
	{window.location.href = "Fan.html";}
	if (search == "graphic card's" || search == "graphic card")
	{window.location.href = "graphic card.html";}
	if (search == "mother bord's" || search == "mother bord" || search == "motherbord's" || search == "motherbord")
	{window.location.href = "motherbord.html";}
	if (search == "processer's" || search == "processer" || search == "cpu" || search == "cpu's")
	{window.location.href = "Processer.html";}
	if (search == "ram's" || search == "ram")
	{window.location.href = "RAM.html";}
	if (search == "smps's" || search == "smps" || search == "psu" || search == "power supply" || search == "power supply's" || search == "powersupply" || search == "powersupply's")
	{window.location.href = "smps.html";}
	if (search == "ssd's" || search == "ssd")
	{window.location.href = "SSD.html";}
	else
	{erpopup("!!INVLID INPUT!!");}
}

function buy()
{
	if(document.cookie=="" || document.cookie==":User Manual,1,0,0")
	{erpopup("!!Cart is empty!!");}
	else
	{window.location.href="script/bill.html";}
}



function cart()
{
	if(document.cookie=="" || document.cookie==":User Manual,1,0,0")
	{
		erpopup("!!Cart is empty!!");
	}
	else
	{	var output="<b>Cart</b><hr><b>Sr.Name of Item,qty,price(pp),Total</b><hr>";
		var arr = document.cookie.split(":");

            for (var i = 1; i < arr.length; i++) {
                output+="<b>"+i+".</b> "+arr[i]+"\n";
            }
		crpopup(output);
	}
}

function clrcart() {
	xyz="";
	if (xyz=="")
	{
		document.cookie=":User Manual,1,0,0";
	}
	if (document.cookie==":User Manual,1,0,0")
	{
		popup("Cart cleared Scussfully");
	}
	else 
	{
		erpopup("!!Cart not cleared!!");
	}
}

function crpopup(message, popupIconUrl, name= 'E-Shop') {
    
    var blurredBackground = document.createElement('div');
    blurredBackground.className = 'blurred-background';
    document.body.appendChild(blurredBackground);

    var popupBox = document.createElement('div');
    popupBox.className = 'crcustom-popup';

    var popupHeader = document.createElement('div');
    popupHeader.className = 'crcustom-popup-header';
    var img = document.createElement('img');
    img.src = "shop.ico";
    var span = document.createElement('span');
    span.textContent = "E-Shop";
    popupHeader.appendChild(img);
    popupHeader.appendChild(span);

    var popupBody = document.createElement('div');
    popupBody.className = 'custom-popup-body';
    popupBody.textContent = message;

    popupBody.innerHTML = message.replace(/\n/g, '<br>');
	
    popupBody.style.textAlign = 'left';

    var popupFooter = document.createElement('div');
    popupFooter.className = 'crcustom-popup-footer';
    var button = document.createElement('button');
    button.textContent = 'OK';
    button.onclick = function() {
        document.body.removeChild(popupBox);
        document.body.removeChild(blurredBackground);
    };
    popupFooter.appendChild(button);

    popupBox.appendChild(popupHeader);
    popupBox.appendChild(popupBody);
    popupBox.appendChild(popupFooter);

    document.body.appendChild(popupBox);

    popupBox.style.display = 'block';
    blurredBackground.style.display = 'block';
}

function popup(message, popupIconUrl, name = 'E-Shop') {
    
    var popupBox = document.createElement('div');
    popupBox.className = 'custom-popup';

    var popupHeader = document.createElement('div');
    popupHeader.className = 'custom-popup-header';

    var leftSection = document.createElement('div');
    leftSection.className = 'left-section';
    var img = document.createElement('img');
    img.src = "shop.ico";
    var span = document.createElement('span');
    span.textContent = "E-Shop";
    leftSection.appendChild(img);
    leftSection.appendChild(span);

    var closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.className = 'close-button';
    closeButton.onclick = function() {
        document.body.removeChild(popupBox);
    };

    popupHeader.appendChild(leftSection);
    popupHeader.appendChild(closeButton);

    var popupBody = document.createElement('div');
    popupBody.className = 'custom-popup-body';
    popupBody.textContent = message;

    popupBox.appendChild(popupHeader);
    popupBox.appendChild(popupBody);

    document.body.appendChild(popupBox);

    popupBox.style.display = 'block';

    setTimeout(function() {
        document.body.removeChild(popupBox);
    }, 3000);
}


function erpopup(message, popupIconUrl, name = 'E-Shop') {

    var popupBox = document.createElement('div');
    popupBox.className = 'ercustom-popup';

    var popupHeader = document.createElement('div');
    popupHeader.className = 'ercustom-popup-header';

    var leftSection = document.createElement('div');
    leftSection.className = 'left-section';
    var img = document.createElement('img');
    img.src = "shop.ico";
    var span = document.createElement('span');
    span.textContent = "E-Shop";
    leftSection.appendChild(img);
    leftSection.appendChild(span);

    var closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.className = 'close-button';
    closeButton.onclick = function() {
        document.body.removeChild(popupBox);
    };

    popupHeader.appendChild(leftSection);
    popupHeader.appendChild(closeButton);

    var popupBody = document.createElement('div');
    popupBody.className = 'custom-popup-body';
    popupBody.textContent = message;

    popupBox.appendChild(popupHeader);
    popupBox.appendChild(popupBody);

    document.body.appendChild(popupBox);

    popupBox.style.display = 'block';

    setTimeout(function() {
        document.body.removeChild(popupBox);
    }, 3000);
}

