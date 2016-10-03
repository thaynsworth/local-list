"use strict";
var CurrentUser = (function () {
    function CurrentUser(id, email, globalRoles, organizationRoles, status) {
        this.id = id;
        this.email = email;
        this.globalRoles = globalRoles;
        this.organizationRoles = organizationRoles;
        this.status = status;
    }
    return CurrentUser;
}());
exports.CurrentUser = CurrentUser;
//# sourceMappingURL=currentUser.js.map