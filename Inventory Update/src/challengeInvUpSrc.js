function updateInventory(currentInventory, newInventory) {
    'use strict';
    var curName = ''; //Name of item that is being processed that is from the current inventory.
    var newName = ''; //Name of item that is being processed that is from the new inventory.
    var newQty = 0; //Quantity of item being processed that is from the new inventory.
    var isNewItem; //True if an item doesn't exist in the current inventory, false otherwise

    newInventory.forEach(function checkNewInventory(newInvItem) {
        isNewItem = true; //initial assumption for each new inventory item
        newQty = newInvItem[0];
        newName = newInvItem[1];

        currentInventory.forEach(function updateCurrentInventory(curInvItem) {
            curName = curInvItem[1];

            //For items that already exists in current inventory
            if (curName === newName) {
                curInvItem[0] += newQty;
                isNewItem = false;
            }
        });

        //For items that don't exist in current inventory
        if (isNewItem) {
            currentInventory.push(newInvItem);
        }
    });

    currentInventory.sort(function sortCurrentInventory(itemA, itemB) {
        if (itemA[1] === itemB[1]) {
            return 0;
        }

        if (itemA[1] < itemB[1]) {
            return -1;
        }

        return 1;
    });

    return currentInventory;
}

// Example inventory lists (for testing purposes)
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];