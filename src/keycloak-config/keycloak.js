import Keycloak from 'keycloak-js';

export const keycloak = Keycloak({
    
        "realm": "Voucherize",
        "auth-server-url": "http://localhost:8080/auth",
        "ssl-required": "external",
        "resource": "zing",
        "public-client": true,
        "verify-token-audience": true,
        "use-resource-role-mappings": true,
        "confidential-port": 0,
        "clientId": "zing"
});