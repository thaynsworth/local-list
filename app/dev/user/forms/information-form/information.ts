export class Information {
    firstName: string;
    lastName: string;
    address: string;
    addressAdditional: string;
    city: string;
    postalCode: string;
    region: string;
    regionName: string;
    country: string;
    countryName: string;
    phone: string;

    constructor(firstName: string,
                lastName: string,
                address: string,
                addressAdditional: string,
                city: string,
                postalCode: string,
                region: string,
                regionName: string,
                country: string,
                countryName: string,
                phone: string)
    {
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
}