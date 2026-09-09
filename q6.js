"use strict";
class Mol {
}
class ModelProcessor extends Mol {
    meth(data) {
        console.log("Processing data model: " + data.toUpperCase());
    }
}
class Info {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const inf = new Info(12, "Jack");
console.log(inf);
const procmol = new ModelProcessor();
procmol.meth("Astrea GPT 6.0");
