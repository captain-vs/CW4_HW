class Student{
    rollNo:number;
    name:string;
    address:string;

    constructor(rollNo:number,name:string,address:string){
        this.rollNo=rollNo, this.name=name ,
        this.address=address
    }

    static showClass():string{
        return "Bsc IT 1st"
    }

    displayInfo(){
        console.log("Id: "+this.rollNo+"Name: "+this.name+"Address: "+this.address);
        
    }
}
const stu =new Student(1,"Jack","dubai")
stu.displayInfo()
console.log(Student.showClass());


