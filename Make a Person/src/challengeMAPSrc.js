function Person(firstAndLast) {
    "use strict";

    var firstName = firstAndLast.split(" ")[0];
    var lastName = firstAndLast.split(" ")[1];

    function getFirstName() {
        return firstName;
    }

    function getLastName() {
        return lastName;
    }

    function getFullName() {
        return firstAndLast;
    }

    function setFirstName(first) {
        firstName = first;
        firstAndLast = firstName + " " + lastName;
    }

    function setLastName(last) {
        lastName = last;
        firstAndLast = firstName + " " + lastName;
    }

    function setFullName(firstAndLastNew) {
        firstAndLast = firstAndLastNew;
        firstName = firstAndLast.split(" ")[0];
        lastName = firstAndLast.split(" ")[1];
    }

    this.getFirstName = getFirstName;
    this.getLastName = getLastName;
    this.getFullName = getFullName;
    this.setFirstName = setFirstName;
    this.setLastName = setLastName;
    this.setFullName = setFullName;
}

var bob = new Person("Bob Ross");