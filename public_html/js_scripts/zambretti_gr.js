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
			forecast_message="Καθαρός καιρός";
			console.log(1);
			break;
		case 2:
			forecast_message="Καλός καιρός";
			console.log(2);
			break;
		case 3:
			forecast_message="Καλός καιρός, γίνεται ασταθής";
			console.log(3);
			break;
		case 4:
			forecast_message="Αρκετά καλός καιρός, πιθανές μπόρες αργότερα";
			console.log(4);
			break;
		case 5:
			forecast_message="Βροχερός, γίνεται πιο ασταθής";
			console.log(5);
			break;
		case 6:
			forecast_message="Ασταθής με βροχές αργότερα";
			console.log(6);
			break;
		case 7:
			forecast_message="Βροχή κατά διαστήματα, μεγαλύτερη αστάθεια αργότερα";
			console.log(7);
			break;
		case 8:
			forecast_message="Βροχή κατά διαστήματα, γίνεται πολύ ασταθής";
			console.log(8);
			break;
		case 9:
			forecast_message="Πολύ ασταθής και βροχερός καιρός";
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
			forecast_message="Καθαρός καιρός";
			console.log(10);
			break;
		case 11:
			forecast_message="Καλός καιρός";
			console.log(11);
			break;
		case 12:
			forecast_message="Καλός καιρός με πιθανές μπόρες";
			console.log(12);
			break;
		case 13:
			forecast_message="Αρκετά καλός καιρός με πιθανές μπόρες";
			console.log(13);
			break;
		case 14:
			forecast_message="Βροχερός με ηλιοφάνεια κατά διαστήματα";
			console.log(14);
			break;
		case 15:
			forecast_message="Ασταθής καιρός με μερικές βροχές";
			console.log(15);
			break;
		case 16:
			forecast_message="Ασταθής με Βροχή κατά διαστήματα";
			console.log(16);
			break;
		case 17:
			forecast_message="Συχνές βροχοπτώσεις";
			console.log(17);
			break;
		case 18:
			forecast_message="Πολύ ασταθής και βροχερός καιρός";
			console.log(18);
			break;
		case 19:
			forecast_message="Καταιγίδα";
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
			forecast_message="Καθαρός καιρός";
			console.log(20);
			break;
		case 21:
			forecast_message="Καλός καιρός";
			console.log(21);
			break;
		case 22:
			forecast_message="Βελτίωση καιρού";
			console.log(22);
			break;
		case 23:
			forecast_message="Αρκετά καλός καιρός με περαιτέρω βελτίωση";
			console.log(23);
			break;
		case 24:
			forecast_message="Αρκετά καλός καιρός, πιθανές μπόρες νωρίς";
			console.log(24);
			break;
		case 25:
			forecast_message="Μπόρες νωρίς με σταδιακή βελτίωση του καιρού";
			console.log(25);
			break;
		case 26:
			forecast_message="Μεταβλητός καιρός, Βελτίωση";
			console.log(26);
			break;
		case 27:
			forecast_message="Μερικώς άστατος καιρός με βελτίωση αργότερα";
			console.log(27);
			break;
		case 28:
			forecast_message="Ασταθής με πιθανή βελτίωση";
			console.log(28);
			break;
		case 29:
			forecast_message="Ασταθής με βελτίωση κατά διαστήματα";
			console.log(29);
			break;
		case 30:
			forecast_message="Πολύ άστατος καιρός με βελτίωση κατά διαστήματα";
			console.log(30);
			break;
		case 31:
			forecast_message="Έντονη βροχόπτωση με πιθανή βελτίωση";
			console.log(31);
			break;
		case 32:
			forecast_message="Έντονη βροχόπτωση";
			console.log(32);
			break;
		default:
			console.log("WHATT");
	}
	return (forecast_message);
}