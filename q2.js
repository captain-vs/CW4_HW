"use strict";
class Student {
    rollNo;
    name;
    address;
    constructor(rollNo, name, address) {
        this.rollNo = rollNo, this.name = name,
            this.address = address;
    }
    static showClass() {
        return "Bsc IT 1st";
    }
    displayInfo() {
        console.log("Id: " + this.rollNo + "Name: " + this.name + "Address: " + this.address);
    }
}
const stu = new Student(1, "Jack", "dubai");
stu.displayInfo();
console.log(Student.showClass());
