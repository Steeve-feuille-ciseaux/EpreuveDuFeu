const Arg = process.argv[2];
var Lettre = Arg.split('');
let Print = "";
j = 0;

for (i=0; i < Arg.length ;i++) {
    j++;
    if (Lettre[i] != " ") {
        if(j % 2 == 0) {
            Print += Lettre[i].toLowerCase();
        }
        else {
            Print += Lettre[i].toUpperCase();
        }
    } 
    else {
        Print += " ";
    }
}

console.log(Print);