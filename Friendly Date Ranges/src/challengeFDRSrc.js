function makeFriendlyDates(arr) {
    'use strict';
    
    var firstDate = {};
    var secondDate = {};

    function parseStrDates() {
        firstDate.year = parseInt(arr[0].substr(0, 4), 10);
        firstDate.month = parseInt(arr[0].substr(5, 2), 10);
        firstDate.day = parseInt(arr[0].substr(8, 2), 10);
        
        secondDate.year = parseInt(arr[1].substr(0, 4), 10);
        secondDate.month = parseInt(arr[1].substr(5, 2), 10);
        secondDate.day = parseInt(arr[1].substr(8, 2), 10);
    }

    function createFriendlyMonth(monthInt) {
        switch (monthInt) {
        case 1:
            return 'January';
        case 2:
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
        default:
            throw 'Bad month integer';
        }
    }

    function createOrdinalDay(dayInt) {
        if (dayInt === 1 || dayInt === 21 || dayInt === 31) {
            return dayInt.toString() + 'st';
        }
        if (dayInt === 2 || dayInt === 22) {
            return dayInt.toString() + 'nd';
        }
        
        if (dayInt === 3 || dayInt === 23) {
            return dayInt.toString() + 'rd';
        }
        
        return dayInt.toString() + 'th';
    }

    function removeRedundantInfo(date1, date2) {
        var friendlyDateRange = []; //Final output
        var currentYear = new Date().getFullYear();
        var msYear = 31536000000; // 31,536,000,000 milliseconds in one year
        var dateOne = new Date(date1.year, (date1.month - 1), date1.day); //The JavaScript Date instance of date1
        var dateTwo = new Date(date2.year, (date2.month - 1), date2.day); //The JavaScript Date instance of date2
        
        //If the range ends in the same month that it begins, do not display the ending year or month.
        if ((date2.year - date1.year) === 0 && (date2.month - date1.month) === 0 && (date2.day - date1.day) > 0) {
            friendlyDateRange.push(date1.friendlyMonth + ' ' + date1.friendlyDay);
            friendlyDateRange.push(date2.friendlyDay);
        
        //If the date range ends in less than a year from when it begins, do not display the ending year.
        } else if ((dateTwo - dateOne) < msYear && (dateTwo - dateOne) > 0 && dateOne.getFullYear() !== currentYear) {
            friendlyDateRange.push(date1.friendlyMonth + ' ' + date1.friendlyDay + ', ' + date1.year);
            friendlyDateRange.push(date2.friendlyMonth + ' ' + date2.friendlyDay);
        
        //If the date range begins in the current year and ends within one year, 
        //the year should not be displayed at the beginning of the friendly range.
        } else if ((dateTwo - dateOne) < msYear && (dateTwo - dateOne) > 0 && dateOne.getFullYear() === currentYear) {
            friendlyDateRange.push(date1.friendlyMonth + ' ' + date1.friendlyDay);
            friendlyDateRange.push(date2.friendlyMonth + ' ' + date2.friendlyDay);
        
        //If the two dates are the same, display only the first date
        } else if ((dateTwo - dateOne) === 0) {
            friendlyDateRange.push(date1.friendlyMonth + ' ' + date1.friendlyDay + ', ' + date1.year);
        
        //If above conditions don't apply, display both friendly dates
        } else {
            friendlyDateRange.push(date1.friendlyMonth + ' ' + date1.friendlyDay + ', ' + date1.year);
            friendlyDateRange.push(date2.friendlyMonth + ' ' + date2.friendlyDay + ', ' + date2.year);
        }
        
        return friendlyDateRange;
    }

    parseStrDates();
    
    firstDate.friendlyMonth = createFriendlyMonth(firstDate.month);
    secondDate.friendlyMonth = createFriendlyMonth(secondDate.month);
    
    firstDate.friendlyDay = createOrdinalDay(firstDate.day);
    secondDate.friendlyDay = createOrdinalDay(secondDate.day);
    
    return removeRedundantInfo(firstDate, secondDate);

}