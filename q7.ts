interface Management{
    addStudent(adding:string):void
    removeStudent(rem:string):void

}

abstract class Institute{
    institudeName:String

    constructor(institudeName:string){
        this.institudeName=institudeName
    }
    abstract InstitutionType():String

}
class School extends Institute implements Management{


    constructor(name:string){
        super(name)
    }

    InstitutionType(): String {
        return "--------------Government Aied College----------------"
    }

    studentList:string[]=[]

    addStudent(adding:string): void {
        this.studentList.push(adding)
        console.log(this.studentList +""+this.institudeName)
    }

    removeStudent(rem:string): void {
        const index = this.studentList.indexOf(rem)
        if (index > -1) {
            this.studentList.splice(index, 1);
            console.log(`[${this.institudeName}] Removed student: ${rem}`);
        } else {
            console.log(`[${this.institudeName}] Student ${rem} not found.`)
        }
    }

    displayInfo(){
         console.log(this.studentList +""+this.institudeName)
        
    }

}


class College extends Institute implements Management{


    constructor(name:string){
        super(name)
    }

    InstitutionType(): String {
        return "-------------- UnAied College----------------"
    }

    studentList:string[]=[]

    addStudent(adding:string): void {
        this.studentList.push(adding)
        console.log(this.studentList +""+this.institudeName)
    }

    removeStudent(rem:string): void {
        const index = this.studentList.indexOf(rem)
        if (index > -1) {
            this.studentList.splice(index, 1);
            console.log(`[${this.institudeName}] Removed student: ${rem}`);
        } else {
            console.log(`[${this.institudeName}] Student ${rem} not found.`)
        }
    }

    displayInfo(){
         console.log(this.studentList +""+this.institudeName)
        
    }

}

const sch = new School("ABC School");
console.log(sch.InstitutionType());
sch.addStudent("tom")
sch.displayInfo()
sch.removeStudent("tom")

const sch1 = new School("Thakur College");
console.log(sch1.InstitutionType());
sch1.addStudent("Jack")
sch1.displayInfo()
sch1.removeStudent("tom")

