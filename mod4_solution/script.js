var names=new Array();
names[0]="Rick";
names[1]="John";
names[2]="Joe";
names[3]="Jerry";
names[4]="Henry";
names[5]="Fedric";
names[6]="Leo";
names[7]="Taula";
names[8]="Limi";
names[9]="Jenny";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}