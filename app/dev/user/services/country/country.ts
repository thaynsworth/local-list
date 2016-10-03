export class Country {
    value: string;
    name: string;
    tld: string;

    constructor(value: string, name: string, tld: string) {
        this.value = value;
        this.name = name;
        this.tld = tld;
    }
}