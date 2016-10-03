"use strict";
var Information = (function () {
    function Information(firstName, lastName, address, addressAdditional, city, postalCode, region, regionName, country, countryName, phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.addressAdditional = addressAdditional;
        this.city = city;
        this.postalCode = postalCode;
        this.region = region;
        this.regionName = regionName;
        this.country = country;
        this.countryName = countryName;
        this.phone = phone;
    }
    return Information;
}());
exports.Information = Information;
//# sourceMappingURL=information.js.map