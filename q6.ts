interface Model<T> {
    meth(data: T): void;
}

abstract class Mol<T> implements Model<T> {
    abstract meth(data: T): void; 
}

class ModelProcessor extends Mol<string> {
    meth(data: string): void {
        console.log("Processing data model: " + data.toUpperCase());
    }
}

class Info<I,N>{
    id:I
    name:N

    constructor(id:I,name:N){
        this.id=id
        this.name=name
    }
}

const inf=new Info(12,"Jack")
console.log(inf);

const procmol=new ModelProcessor();
procmol.meth("Astrea GPT 6.0")

