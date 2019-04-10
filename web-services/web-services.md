<!-- page_number: true -->

Web Services
===


What is a web  service ?

![gif did not load](https://media.giphy.com/media/14mgxYFJHXGmoo/giphy.gif)

---

Definition
===

Web service is an application interface that allows quick and easy communication between client and server applications in a programmatic way. 

They do **not** provide a GUI to the user.

---

How it was done in the past, lets learn.
===

![gif did not load](https://media.giphy.com/media/l1J9ETWjKTdN7FZOE/giphy.gif)

* [XML](https://en.wikipedia.org/wiki/XML) (Extensible Markup Language )
* [SOAP](https://en.wikipedia.org/wiki/SOAP) (Simple Object Access Protocol)
* [WSDL](https://www.w3schools.com/xml/xml_wsdl.asp) (Web Services Definition Language)
* [UDDI](http://uddi.xml.org/) (Universal Description Discovery Integration)

---

What ? You don't want to ?
===
![gif did not load](https://media.giphy.com/media/ejXqIfl6n3eXC/giphy.gif)

---

[XML](https://en.wikipedia.org/wiki/XML)
===
Extensible Markup Language 

* Set of rules that for encoding documents
* Human and machine readable

Emphasizes

* Simplicity
* Generality
* Usability 

---

[SOAP](https://en.wikipedia.org/wiki/SOAP)
===

Simple Object Access Protocol

XML based messaging protcol interface to send structured data accross the network

* Relies on application protocols (HTTP, SMTP)
* Consists of three parts
  * envelope (message structure and how to process)
  * encoding rules
  * convention for procedure calls and responses

Three main characteristics: Extensibility (security, etc) , Neutrality (works under any protocole), Independance (any programming model)

---

[WSDL](https://www.w3schools.com/xml/xml_wsdl.asp)
===

Web Services Definition Language

* Describes the functionality of a web service
* Written in XML
* "W3C recommendation from 26. June 2007"

---

[UDDI](http://uddi.xml.org/)
===
Universal Description Discovery Integration
> which defines a universal method for enterprises to dynamically discover and invoke Web services

![gif did not load](https://media.giphy.com/media/MVgLEacpr9KVK172Ne/giphy.gif)
*has died*

---

Welcome to 2019
===
* ~~XML~~  replaced by JSON in modern applications
* ~~SOAP~~ replaced by REST in modern applications
* ~~WSDL~~ used by legacy servers with SOAP and XML
* ~~UDDI~~ is dead

![gif did not load](https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif)

---

Role
===

Web services is the next level of what is currently known as traditional web servers.

* can be used by other applications
* communicate using open protocols

---

[What is JSON ?](https://www.w3schools.com/whatis/whatis_json.asp)
===

**J**ava**S**cript **O**bject **N**otation

* lightweight format for sending and transporting data across the network
* used primarily from web server to web page
* human and machine readable

```javascript
//example of JSON
{
  "user": {
     "first_name":"John",
     "last_name" :"Smith"
  }
}
```

---

JSON Syntax rules
===

* Data with name and value pairs
* each Data set is separated by a `,` 
* `{}` indicate an object
* `[]` indicate an array

---

Convert Javascript Object to JSON format
===

```
const data = {
  "user": {
     "first_name":"John",
     "last_name" :"Smith"
  }
};
const dataToSend = JSON.stringify(data);
```

*There is no such thing as a JSON object in javascript!!!*

*JSON refers only to the format of the transported data!!!*

---

[What is REST ?](https://en.wikipedia.org/wiki/Representational_state_transfer)
===

**RE**presentational **S**tate **T**ransfer is a software architecture style. Web Services using REST are called Restful Web Services (RWS).

* Stateless protocole
* Standard operations

---

Advantages of REST
===

* Performant
* Reliable
* Re-use components

---

REST and HTTP
===

The standard operations (aka methods) are

* GET
* HEAD
* POST
* PUT
* PATCH
* DELETE
* CONNECT
* OPTIONS
* TRACE

---

Method GET
===

Requests a representation of a specified resource

* Should **ONLY** retrieve data

![gif did not load](https://media.giphy.com/media/nMpAd2zC0uX4c/giphy.gif)

---


Method HEAD
===

Similar to method `GET` but without a response body. 

* Used mainly to retieve meta information from response headers

---

Method POST
===

Requests that the server accepts a block of data with specific properties. 

Often used to pass data as a message or in the creation of an "entity" to be added to the database.

---

Method PUT
===

Requests that the entity be stored. Usually used to completely update an entity with all its properties passed in the body of the request

---

Method PATCH
===

Requests partial modification to a resource. Usually used to update some properties of an entity.

---

Method DELETE
===

Requests the deletion of a resource. Usually used to delete an entity from the database.

---

[Method CONNECT](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)
===

> The CONNECT method converts the request connection to a transparent TCP/IP tunnel, usually to facilitate SSL-encrypted communication (HTTPS) through an unencrypted HTTP proxy.


---

Method OPTIONS
===

> Requests the HTTP methods that the server supports for the requested URI


This is often used by mobile applications automatically before a request is sent.

---

Method TRACE
===

> The TRACE method echoes the received request so that a client can see what (if any) changes or additions have been made by intermediate servers

---

Server Authentication
===

What are some of the available possibilities ?
What do they do ? How do they work ?

* Basic Authentication
* apiKey
* JSON Web Token 
* OAUTH

What are the **pros** and **cons** of each ?

---

JSON Web Token
===

> JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.

Composed of 3 parts
* Header (meta data - type of token, cryptographic algos)
* Payload (verifiable security statements i.e.: username - email - permissions)
* Signature (used to validate token)

Best practices requires using a private/public key that can be generated with `openssl` to verify that the token is valid.

---

Which databases are available for web services ?
===

* SQLite
* MySQL/MariaDB
* Postegre
* MongoDB
* Redis

---

Synchronize data with the server ?
===

## API (Application Protocole Interface)

* Use API to handle CRUD operations
* Routes should be defined in a logical way
* Route definitions should be standarized
* Should return a comprehensile response when successful and when failure
* Headers should conform with the data format sent

---

Using NodeJS as the server
===

What is NodeJS and how does it make it different from a traditional web server (i.e.: Apache/PHP) ?

![gif did not load](https://media.giphy.com/media/3htQ6tCfZ3qfv4sXk6/giphy.gif)

---

NodeJS in a nut shell
===

![nodejs image](https://strongloop.com/blog-assets/2014/01/threading_node.png)
[image source](https://strongloop.com/strongblog/node-js-is-faster-than-java/)

---

NodeJS features
===

* Asynchronous I/O 
* Event Driven
* Non blocking
* [Built on Google's V8 Chrome Engine](https://v8.dev/)
* Single Threaded but **HIGHLY** scalable

![gif did not load](https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif)

---

What are different types of NodeJS architectures ?
===

![gif did not load](https://media.giphy.com/media/8g9Pe0lR3mvqo/giphy.gif)

---

What are some different types of frameworks in NodeJS?
===

---

[Adonis](https://adonisjs.com)
===

A nodejs framework

1. Handles all incoming client requests and applies **SERVER** middlewares
2. Non-terminated requests are then handled by Adonis routing
3. All **GLOBAL** middlewares are applied
4. All relevant **NAMED** middlewares are appled
5. Non-terminted requests will be called by the routes handler
6. Terminated requests in handler go through **DOWNSTREAM** middlewares
7. Response sent to client


---

Mobile App Local Storage
===

A few solutions regarding local storage for react native

* [AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage) (deprecated)
* SQLite (secure ?)
* [RealmJS](https://realm.io/docs/javascript/latest) (supports [encryption](https://realm.io/docs/javascript/latest/#encryption))

---






