// ana to vori convarter
function anaToVori(ana){
    if(typeof ana !== "number"){
        return "Please give number";
    }
    const vori = ana * 0.0625;
    return vori;
}

//pandaCost calculation
function pandaCost(singara, chamucha, jilapi){
    if(!Number.isInteger(singara) || !Number.isInteger(chamucha) || !Number.isInteger(jilapi)){
        return "Please give number";
    }
    const singaraCost = singara * 7;
    const chamuchaCost = chamucha * 10;
    const jilapiCost = jilapi * 15;

    const totalCost = singaraCost + chamuchaCost + jilapiCost;
    return totalCost;
}

// picnic budget calculation 
function picnicBudget(members){
    if(!Number.isInteger(members)){
        return "Please give number";
    }
    else if(members <= 100){
        return members * 5000;
    }
    else if(members <= 200){
        const firstHundredMembersCost = 100 * 5000;
        const discountMembers = members - 100;
        const discountMembersCost = discountMembers * 4000;
        const result = firstHundredMembersCost + discountMembersCost;
        return result;
    }
    else{
        const firstHundredMembersCost = 100 * 5000;
        const secondHundredMembersCost = 100 * 4000;
        const discountMembers = members - 200;
        const discountMembersCost = discountMembers * 3000;
        const result = firstHundredMembersCost + secondHundredMembersCost + discountMembersCost;
        return result;
    }
}

// get odd friend name
function oddFriend(friends){
    if(!Array.isArray(friends)){
        return "You should give a array for input";
    }
    for (let friend in friends){ 
        if(friends[friend].length % 2 !== 0){
            return friends[friend];
        }
    }

}

const vori = anaToVori(20.2);
console.log(vori);

const totalCost = pandaCost(3, 2, 4);
console.log(totalCost);

const picnicCost = picnicBudget(230);
console.log(picnicCost);

const result = oddFriend(["jewel","dsfs","sdf"]);
console.log(result)
