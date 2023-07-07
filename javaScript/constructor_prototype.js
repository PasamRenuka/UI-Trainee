var person = {
    name: "Renuka",
    YOB: 2000,
    job: 'software'

}

function Person1(pName, pYOB, pjob) {
    this.name = pName;
    this.YOB = pYOB;
    this.job = pjob;
    // this.calculateAge = function(){
    //     console.log(2023-this.YOB);
    // }
}
Person1.prototype.calculateAge = function () {
    console.log(2023 - this.YOB);
}
var triveni = new Person1('triveni', 2002, 'Studying');
console.log(triveni);
triveni.calculateAge();