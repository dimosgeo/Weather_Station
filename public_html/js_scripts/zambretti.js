var z = 0;

function zambretti(p1,p2) {
	let forecast_message="";
	if(p2-p1>=1.6){
		forecast_message=rising(p2);
	}
	else if(p2-p1<=-1.6){
		forecast_message=falling(p2);
	}
	else{
		forecast_message=steady(p2);
	}
	console.log("REAL "+forecast_message+" WITH TREND "+String(p2-p1,2));
	return (forecast_message);
}


function zambretti_test(p) {
	let forecast_message="";
	let v=2;
	let d=0;
	//console.log(p);
	for (var i = 1; i <= p.length - 1; i++) {
		if(i==1){
			//d+=(p[p.length - 1]-p[p.length - i - 1])*2/i;
			//console.log((p[p.length - 1]-p[p.length - i - 1])*2/i);
			d+=(p[p.length - 1]-p[p.length - i - 1])*1.5;
			//console.log((p[p.length - 1]-p[p.length - i - 1])*1.5);
		}else{
			d+=(p[p.length - 1]-p[p.length - i - 1])*2/i;
			//console.log((p[p.length - 1]-p[p.length - i - 1])*2/i);
		}
	}
	d/=17;
	if(d>=1.6){
		forecast_message=rising(p[p.length - 1]);
	}
	else if(d<=-1.6){
		forecast_message=falling(p[p.length - 1]);
	}
	else{
		forecast_message=steady(p[p.length - 1]);
	}
	console.log("TEST "+forecast_message+" WITH TREND "+String(d,2));
	return (forecast_message);
}


function falling(p) {
	let forecast_message="";
	console.log("falling");
	z = Math.round(127 - 0.12*p);
	switch(z){
		case 0:
			forecast_message="0";
			console.log(0);
			break;
		case 1:
			forecast_message="Settled Fine";
			console.log(1);
			break;
		case 2:
			forecast_message="Fine Weather";
			console.log(2);
			break;
		case 3:
			forecast_message="Fine, Becoming Less Settled";
			console.log(3);
			break;
		case 4:
			forecast_message="Fairly Fine, Showery Later";
			console.log(4);
			break;
		case 5:
			forecast_message="Showery, Becoming More Unsettled";
			console.log(5);
			break;
		case 6:
			forecast_message="Unsettled, Rain Later";
			console.log(6);
			break;
		case 7:
			forecast_message="Rain at Times, Worse Later";
			console.log(7);
			break;
		case 8:
			forecast_message="Rain at Times, Becoming Very Unsettled";
			console.log(8);
			break;
		case 9:
			forecast_message="Very Unsettled, Rain";
			console.log(9);
			break;
		default:
			console.log("WHATT");

	}
	return (forecast_message);
}

function steady(p){
	let forecast_message="";
	console.log("steady");
	z = Math.round(144 - 0.13*p);
	switch(z){
		case 10:
			forecast_message="Settled Fine";
			console.log(10);
			break;
		case 11:
			forecast_message="Fine Weather";
			console.log(11);
			break;
		case 12:
			forecast_message="Fine, Possibly Showers";
			console.log(12);
			break;
		case 13:
			forecast_message="Fairly Fine, Showers Likely";
			console.log(13);
			break;
		case 14:
			forecast_message="Showery, Bright Intervals";
			console.log(14);
			break;
		case 15:
			forecast_message="Changeable, Some Rain";
			console.log(15);
			break;
		case 16:
			forecast_message="Unsettled, Rain at Times";
			console.log(16);
			break;
		case 17:
			forecast_message="Rain at Frequent Intervals";
			console.log(17);
			break;
		case 18:
			forecast_message="Very Unsettled, Rain";
			console.log(18);
			break;
		case 19:
			forecast_message="Stormy, Much Rain";
			console.log(19);
			break;
		default:
			console.log("WHATT");
	}
	return (forecast_message);
}

function rising(p){
	let forecast_message="";
	console.log("rising");
	z = Math.round(185 - 0.16*p);
	switch(z){
		case 20:
			forecast_message="Settled Fine";
			console.log(20);
			break;
		case 21:
			forecast_message="Fine Weather";
			console.log(21);
			break;
		case 22:
			forecast_message="Becoming Fine";
			console.log(22);
			break;
		case 23:
			forecast_message="Fairly Fine, Improving";
			console.log(23);
			break;
		case 24:
			forecast_message="Fairly Fine, Possibly Showers Early";
			console.log(24);
			break;
		case 25:
			forecast_message="Showery Early, Improving";
			console.log(25);
			break;
		case 26:
			forecast_message="Changeable, Mending";
			console.log(26);
			break;
		case 27:
			forecast_message="Rather Unsettled, Clearing Later";
			console.log(27);
			break;
		case 28:
			forecast_message="Unsettled, Probably Improving";
			console.log(28);
			break;
		case 29:
			forecast_message="Unsettled, Short Fine Intervals";
			console.log(29);
			break;
		case 30:
			forecast_message="Very Unsettled, Finer at Times";
			console.log(30);
			break;
		case 31:
			forecast_message="Stormy, Possibly Improving";
			console.log(31);
			break;
		case 32:
			forecast_message="Stormy, Much Rain";
			console.log(32);
			break;
		default:
			console.log("WHATT");
	}
	return (forecast_message);
}