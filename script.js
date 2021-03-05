var pl1 = document.getElementById('pl'); //Получение необходимых элементов по id
var pl2 = document.getElementById('pl2');
var pl3 = document.getElementById('pl3');
var vs = document.getElementById('vs');
var er1 = document.getElementById('er1');
var v11 = document.getElementById('v11');
var v12 = document.getElementById('v12');
var v13 = document.getElementById('v13');
var v31 = document.getElementById('v31');
var v32 = document.getElementById('v32');
var v33 = document.getElementById('v33');
var v41 = document.getElementById('v41');
var v42 = document.getElementById('v42');
var v43 = document.getElementById('v43');
var vopr1 = document.getElementById('vopr1');
var vopr2 = document.getElementById('vopr2');
var vopr3 = document.getElementById('vopr3');
var vopr4 = document.getElementById('vopr4');
var vopr5 = document.getElementById('vopr5');
var vopr6 = document.getElementById('vopr6');
var nextb = document.getElementById('nextb');
var endb = document.getElementById('endb');
var kol = document.getElementById('kol');
var kol2 = document.getElementById('kol2');
var galph = document.getElementById('galph');
nextb.disabled=true;
var tekvopr = 1;
var tekimg = 1;
var sum = 1;
function okno(){ //Открытие квиза
	pl.style.visibility="visible";
	pl2.style.visibility="visible";
}
function okno2(){ //Закрытие квиза
	pl.style.visibility="hidden";
	pl2.style.visibility="hidden";
}
function next(){ //Переход на следующий шаг квиза
	nextb.disabled=true;
	if (tekvopr == 1){
		vopr1.style.display="none";
		vopr2.style.display="block";
		nextb.disabled=false;
		if (v11.checked==true){
			sum=10000;
		} else if (v12.checked==true){
			sum=15000;
		} else if (v13.checked==true){
			sum=20000;
		}
	} else if 
	(tekvopr == 2){
		if ((kol.value>0)&&(kol.value<1000)){
		vopr2.style.display="none";
		vopr3.style.display="block";
		sum=sum*kol.value;
		} else {
			er1.style.visibility="visible";
			tekvopr--;
			nextb.disabled=false;
		}
	} else if (tekvopr == 3){
		vopr3.style.display="none";
		vopr4.style.display="block";
		if (v32.checked==true){
			sum=sum*1.5;
		} else if (v33.checked==true){
			sum=sum*2;
		}
	} else if (tekvopr == 4){
		vopr4.style.display="none";
		vopr5.style.display="block";
		if (v41.checked==true){
			sum+=1000;
		} else if (v42.checked==true){
			sum+=2000;
		} else if (v43.checked==true){
			sum+=3000;
		}
	} else if (tekvopr == 5){
		nextb.disabled=false;
		vopr5.style.display="none";
		vopr6.style.display="block";
		nextb.style.display="none";
		kol2.value=sum;
		endb.style.display="inline-block";
		nextb.style.width="230px";
	}
	if (tekvopr !=6) tekvopr++;
	vs.innerHTML=tekvopr+"/6";
}
function bon(){ //Отключение кнопки перехода на следующий шаг
	nextb.disabled=false;
}
function photo(a){ //Изменение текущей просматриваемой фотографии галереи
	if (a==1){
		galph.src="photo1.jpg";
		tekimg = 1;
	} else if (a==2){
		galph.src="photo2.jpg";
		tekimg = 2;
	} else if (a==3){
		galph.src="photo3.jpg";
		tekimg = 3;
	} else if (a==4){
		galph.src="photo4.jpg";
		tekimg = 4;
	} else if (a==5){
		galph.src="photo5.jpg";
		tekimg = 5;
	} 
	pl.style.visibility="visible";
	pl3.style.visibility="visible";
}
function photo2(){ //Закрытие галереи
	pl.style.visibility="hidden";
	pl3.style.visibility="hidden";
}
function before(){ //Переход на предыдущее фото галереи
	tekimg--;
	if (tekimg == 0) tekimg=5;
	photo(tekimg);
}
function after(){ //Переход на следующее фото галереи
	tekimg++;
	if (tekimg == 6) tekimg=1;
	photo(tekimg);
}
function closeall(){ //Закрытие квиза и галереи
	pl.style.visibility="hidden";
	pl2.style.visibility="hidden";
	pl3.style.visibility="hidden";
}