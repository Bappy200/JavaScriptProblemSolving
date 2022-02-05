// ana to vori convarter
function anaToVori(ana){
    const vori = ana * 0.0625;
    return vori;
}

//pandaCost calculation
function pandaCost(singara, chamucha, jilapi){
    const singaraCost = singara * 7;
    const chamuchaCost = chamucha * 10;
    const jilapiCost = jilapi * 15;

    const totalCost = singaraCost + chamuchaCost + jilapiCost;
    return totalCost;
}

// picnic budget calculation 
function picnicBudget(members){
    if(members <= 100){
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

const vori = anaToVori(20);
console.log(vori);

const totalCost = pandaCost(3, 2, 2);
console.log(totalCost);

const picnicCost = picnicBudget(210);
console.log(picnicCost);