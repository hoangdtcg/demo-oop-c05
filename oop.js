let Product = function () {
    this.name = "nokia";
    this.color = "black";
    this.price = 1000;
    this.desc = "Hang sieu ben";

    this.getHtml = function () {
        let str = "";
        str += `<tr></tr><td>${this.name}</td>`;
        str += `<td>${this.color}</td>`;
        str += `<td>${this.price}</td>`;
        str += `<td>${this.desc}</td>`;
        // str += `<td><button onclick="del(${i})">Delete</button></td>
        //             <td><button onclick="edit(${i})">Edit</button></td></tr>`
        return str;
    }

};

let Person = function (name,age,country) {
    this.name ="";
    this.age ="";
    this.country ="";

    this.score1 ="";
    this.score2 ="";
    this.score3 ="";
    this.grade = "";

    this.review = function () {
        let avg = (this.score1+this.score2+this.score3)/3;
        if(avg < 5){
            console.log("Hoc sinh yeu");
        }else {
            console.log(this.name + " la hoc sinh binh thuong");
        }
    }
}

let duong = new Person("Xuan Duong",18,"Bac Giang");
duong.score1 = 9;
duong.score2 = 2;
duong.score3 = 1;
console.log(duong.avg);
duong.grade = "C0520G1";

duong.review();


class Student {
    constructor(name,age,country) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.score1 = 0;
        this.score2 = 0;
        this.score3 = 0;
    }

    review(){
        let avg = (this.score1+this.score2+this.score3)/3;
        if(avg < 5){
            console.log("Hoc sinh yeu");
        }else {
            console.log(this.name + " la hoc sinh binh thuong");
        }
    }
}

let son = new Student("Son",17,"Hanoi");

son.score1 = 5;
son.score2 = 7;
son.score3 = 8;

son.review();
