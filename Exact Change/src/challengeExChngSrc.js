function checkCashRegister(price, cash, cid) {
    'use strict';
    //DELETE THESE AFTERWARDS
    //price = 100;
    //cash = 800;
    //cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 700.00], ["ONE HUNDRED", 100.00]];
    var change = [];
    var currenciesCents = [['ONE HUNDRED', 10000], ['TWENTY', 2000], ['TEN', 1000], ['FIVE', 500], ['ONE', 100], ['QUARTER', 25], ['DIME', 10], ['NICKEL', 5], ['PENNY', 1]];
    var currencyName;
    var difference = cash - price;
    var drawerIndex;
    
    //Convert all dollars to cents prior to running rest of algorithm 
    //to avoid precision errors (re: 0.1 + 0.2 = 0.30000000000000004)
    price *= 100;
    cash *= 100;
    difference *= 100;
    cid.forEach(function turnToCents(cash) {
        cash[1] *= 100;
    });
          
    currenciesCents.forEach(function (currency) {
        switch (currency[1]) {
        case 10000:
            currencyName = cid[8][0];
            drawerIndex = 8;
            break;
        case 2000:
            currencyName = cid[7][0];
            drawerIndex = 7;
            break;
        case 1000:
            currencyName = cid[6][0];
            drawerIndex = 6;
            break;
        case 500:
            currencyName = cid[5][0];
            drawerIndex = 5;
            break;
        case 100:
            currencyName = cid[4][0];
            drawerIndex = 4;
            break;
        case 25:
            currencyName = cid[3][0];
            drawerIndex = 3;
            break;
        case 10:
            currencyName = cid[2][0];
            drawerIndex = 2;
            break;
        case 5:
            currencyName = cid[1][0];
            drawerIndex = 1;
            break;
        case 1:
            currencyName = cid[0][0];
            drawerIndex = 0;
            break;
        default:
            console.log('Currency type not found!');
        }
        
        if (difference >= currency[1]) {
            if ((Math.floor(difference / currency[1]) * currency[1]) <= cid[drawerIndex][1]) {
                change.push([currencyName, Math.floor(difference / currency[1]) * currency[1]]);
                difference = difference % currency[1];
            } else {
                change.push([currencyName, cid[drawerIndex][1]]);
                //difference = difference - cid[drawerIndex][1]
                difference -= cid[drawerIndex][1];
            }
        }
    });
    
    //Convert cents back to dollars format
    change.forEach(function turnToCents(cash) {
        cash[1] /= 100;
    });
    
    console.log('Change is: ',  change);
    console.log('Difference is: ' + difference);


    return change;
}

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

    //Find out if you have insufficient funds
    
    //Find out if cash in drawer is equal to change due
    
    //Find out change to give back
    
    
    // Here is your change, ma'am.

//update cid
//  cid[8][1] = cid[8][1] - (Math.floor(difference / 100)*100);
/*

/*
//HUNDREDS
    if (difference >= 100) {
        if ((Math.floor(difference / 100) * 100) <= cid[8][1]) {
            change.push([cid[8][0], Math.floor(difference / 100) * 100]);
            difference = difference % 100;
        } else {
            change.push([cid[8][0], cid[8][1]]);
            difference -= cid[8][1];
        }
    }
    
    //TWENTIES
    if (difference >= 20) {
        if ((Math.floor(difference / 20) * 20) <= cid[7][1]) {
            change.push([cid[7][0], Math.floor(difference / 20) * 20]);
            difference = difference % 20;
        } else {
            change.push([cid[7][0], cid[7][1]]);
            difference -= cid[7][1];
        }
    }
    
    //TENS
    if (difference >= 10) {
        if ((Math.floor(difference / 10) * 10) <= cid[6][1]) {
            change.push([cid[6][0], Math.floor(difference / 10) * 10]);
            difference = difference % 10;
        } else {
            change.push([cid[6][0], cid[6][1]]);
            difference -= cid[6][1];
        }
    }
    
    //FIVES
    if (difference >= 5) {
        if ((Math.floor(difference / 5) * 5) <= cid[5][1]) {
            change.push([cid[5][0], Math.floor(difference / 5) * 5]);
            difference = difference % 5;
        } else {
            change.push([cid[5][0], cid[5][1]]);
            difference -= cid[5][1];
        }
    }
    
    //ONES
    if (difference >= 1) {
        if ((Math.floor(difference / 1) * 1) <= cid[4][1]) {
            change.push([cid[4][0], Math.floor(difference / 1) * 1]);
            difference = difference % 1;
        } else {
            change.push([cid[4][0], cid[4][1]]);
            difference -= cid[4][1];
        }
    }*/