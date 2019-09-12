# The CouchDB Configuration for *LMOS Authenticator and Authorizer*

*LMOS Authenticator and Authorizer* is a NodeJS application which provides authentication and authorization services for all LMOS NodeJS applications.

This project provides a CouchDB facility for *LMOS Authenticator and Authorizer* project.

## Prerequisites

* CouchDB 2.3.1

## Deployment

1. Create databases:
  * <your_prefix_>private_app_authentication
  * <your_prefix_>private_app_authorization
2. Create CouchDB user for the application *LMOS Authenticator and Authorizer* (`auth_app_self`) and grant it with the proper permissions.
3. Create the new design documents called `auth_app_self` on the both databases respectively.
4. Add map function `get_token` on `<your_prefix_>private_app_authentication`
5. Add map function `get_permission` on `<your_prefix_>private_app_authorization`

## Dependencies

- *LMOS Authenticator and Authorizer* (`auth_app_self`) <https://github.com/leismore/auth_app_self>

## License

MIT

## Authors

* [Kyle Chine](https://www.kylechine.name) (Initial Author at Sep 12, 2019)
