abstract class Nation{
    abstract nationName():string
    abstract totalStates():number
}

class Country extends Nation{
    nationName(): string {
        return "India"
    }
    totalStates(): number {
        return 28
    }

}
const con =new Country();
console.log(con.nationName());
console.log(con.totalStates());

