class Coperate{
    id:number;
    name:string;
    salary:number;
    address:string;

    constructor(id:number,name:string,salary:number,address:string){
        this.id=id, this.name=name ,
        this.salary=salary,
        this.address=address
    }

    displayInfo(){
        console.log("Id: "+this.id+"Name: "+this.name+"Salary: "+this.salary+"Address: "+this.address);
        
    }
}
const cop =new Coperate(1,"Jack",2200,"dubai")
console.log(cop);

