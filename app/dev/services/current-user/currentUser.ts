export class CurrentUser {
    id: number;
    email: string;
    globalRoles: any;
    organizationRoles: any;
    status: string;


    constructor(id: number, email: string, globalRoles: any, organizationRoles: any, status: string) {
        this.id = id;
        this.email = email;
        this.globalRoles = globalRoles;
        this.organizationRoles = organizationRoles;
        this.status = status;
    }
}