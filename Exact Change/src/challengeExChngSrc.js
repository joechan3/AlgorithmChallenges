function checkCashRegister(price, cash, cid) {
    'use strict';

    var change = []; //Holds the composition of the change returned to customer
    var currenciesCents = [['ONE HUNDRED', 10000], ['TWENTY', 2000], ['TEN', 1000], ['FIVE', 500], ['ONE', 100], ['QUARTER', 25], ['DIME', 10], ['NICKEL', 5], ['PENNY', 1]]; //scope of types of currencies applicable
    var currencyName; //'ONE HUNDRED', 'DIME', etc.
    var currencyRequiredAmt; //Amount required of a particular currency type (e.g. $100 in TWENTIES)
    var difference = cash - price; //Total of change required
    var drawerIndex; //Holds an index for cid array
    var totalInDrawer = 0; //Holds total amount left in cash register after drawdown for change

    //Convert all dollars to cents prior to running rest of algorithm
    //to avoid precision errors (re: 0.1 + 0.2 = 0.30000000000000004)
    price *= 100;
    cash *= 100;
    difference *= 100;
    cid.forEach(function turnToCents(cash) {
        cash[1] *= 100;
    });

    currenciesCents.forEach(function determineChange(currency) {
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
            throw 'Currency type not found!';
        }

        //Use up the larger currencies first as much as possible
        if (difference >= currency[1]) {
            currencyRequiredAmt = Math.floor(difference / currency[1]) * currency[1];
            if (currencyRequiredAmt <= cid[drawerIndex][1]) {
                change.push([currencyName, currencyRequiredAmt]);
                cid[drawerIndex][1] -= currencyRequiredAmt;
                difference = difference % currency[1];
            } else {
                change.push([currencyName, cid[drawerIndex][1]]);
                difference -= cid[drawerIndex][1];
                cid[drawerIndex][1] = 0;
            }
        }
    });

    //Determine remaining cash in drawer
    cid.forEach(function sumDrawers(drawer) {
        totalInDrawer += drawer[1];
    });

    //Convert cents back to dollars format
    change.forEach(function turnToCents(cash) {
        cash[1] /= 100;
    });

    if (difference > 0) {
        return 'Insufficient Funds';
    }
    if (totalInDrawer === 0) {
        return 'Closed';
    }

    return change;
}