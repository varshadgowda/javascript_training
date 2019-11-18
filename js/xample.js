function calculateAge(birthyear) {
    debugger;
    return 2018-birthyear;
}
function calculateAge(mikeBirthYear) {
    debugger;
    return 2018-mikeBirthYear;
}
var john = calculateAge(1980);
var Arnav = calculateAge(1990);
var Vihan = calculateAge(1945);
console.log(john,Arnav,Vihan);

function calculateRetirement(year,firstName){
    var age = calculateAge(year);
    var retirement = 62 - age;
    if(retirement > 0){
    // document.write(firstName + ' is retired in ' +retirement + ' year age');
    console.log(firstName + ' retires in ' +retirement + ' years');
    }
    else
    {
        console.log(firstName+ 'is already retired');
    }
}

    calculateRetirement(1990,'john');
    calculateRetirement(1945, 'mike');
    