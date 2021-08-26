var count;
count = 100;
count = true;
count = ' ';
var score = 10;
//score =  '' does not work since score is already initialized as a number
var roll;
var a;
var b;
var c;
var d;
var e = [1, 'A', true, 10.2, {}];
var f = [1, 2, 3, 4];
var fullName = {
    firstName: 'firstname',
    lastName: 'lastname'
};
fullName.firstName;
var colorRed = 0;
var colorYellow = 1;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male);
var Days;
(function (Days) {
    Days[Days["Monday"] = 100] = "Monday";
    Days[Days["Tuesday"] = 200] = "Tuesday";
    Days[Days["Wednesday"] = 300] = "Wednesday";
    Days[Days["Thursday"] = 400] = "Thursday";
    Days[Days["Friday"] = 500] = "Friday";
})(Days || (Days = {}));
console.log(Days.Friday);
