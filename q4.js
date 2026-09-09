"use strict";
class Nation {
}
class Country extends Nation {
    nationName() {
        return "India";
    }
    totalStates() {
        return 28;
    }
}
const con = new Country();
console.log(con.nationName());
console.log(con.totalStates());
