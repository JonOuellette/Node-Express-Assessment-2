### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JWT is short for JSON Web Token is encoded as a JSON object that typically consists of 3 parts: Header, Payload and Signature.  The header essentially denotes the token type(JWT) and algorithim (alg).  The payload of the token is the encoded(not encrypted) data being transferred such as the username.  The signature is an encrypted signature (through the use of a secret key), used to authenticate the data.

  A JWT is like a ticket that contains information such as aisle and seat number and is encoded with a bar code that once scanned confirms that the ticket and its information is authentic and has not been tampered with.  

- What is the signature portion of the JWT?  What does it do?
  The signature potion of the JWT is the encrypted portion of the JSON Token, through the use of a Secret Key it provides an encrypted signature that allows to validate and authenticate the Token as it is being passed through

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes, the payload of the JWT is not encrypted only encoded as such an attacker can enter the payload information into a site such as JWT.IO that has a decoder and decode the payload and view the information.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  
Implementing authentication with a JWT (JSON Web Token) involves several steps. At a high level, the process works like this:

### User Login:
The user provides their login credentials (like username and password) to the server.
The server verifies these credentials against its database or authentication provider.

### Generating the JWT:
If the credentials are correct, the server creates a JWT.
This token contains information (claims) about the user, such as their user ID, and possibly roles or permissions.
The server signs the JWT with a secret key to ensure it can't be tampered with later.

### Sending the JWT to the User:
The server sends the JWT back to the user's browser or client application.
The client stores this token, often in local storage or as a cookie.

### Using the JWT for Access:
When the user wants to access a protected route or resource, they send the JWT along with their request, usually in the request headers.
This is like showing an ID badge every time you need to access a restricted area.

### Validating the JWT:
The server, upon receiving a request with a JWT, first validates the token.
It checks the signature to ensure it's valid and hasn't been tampered with.
The server might also check other things, like the token's expiration time.

### Granting Access:
If the JWT is valid, the server grants access to the requested resource.
The server might also use information in the JWT (like user roles) to determine what level of access to grant.

In summary, JWTs act as a secure pass that users receive upon logging in, which they must then show every time they request access to protected resources. The server continually checks these passes for their validity, ensuring secure and efficient user authentication and authorization.

- Compare and contrast unit, integration and end-to-end tests.

  Unit Tests are tests that focus on the smallest parts of applications (such as individual functions and/or routes) which makes them efficient for catching low-level bugs and correctness of individual components.  Integration tests are used to verify that different parts of an application works together and is used to catch issues at the interaction between components.  End-to-End tests are the macro form of testing - it validates the complete functionality and performanec othe application in a production-like environment therefore ensuring that the app meets the overall requirements and user expectations

- What is a mock? What are some things you would mock? 

  A mock is an object that simulates the behavior of a real object in a controlled way and are used to test the interaction between components being tested and its dependencies.  Mocks are useful if real objects are impractical to incorporate into a unit test such as if wanting to test if notifications are being sent via email, instead of using a real email client, a mock email client can be created and used.

- What is continuous integration?

  Continuous Integration is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle.

- What is an environment variable and what are they used for?

  Environment variables are like helpful notes for programs, telling them where to find things or how to act. They make it easier to manage and use different programs on your computer.

- What is TDD? What are some benefits and drawbacks?
  TDD is the acronym for Test Driven Development which is the practice of writing tests first and then only writing the code necessary to get the tests to pass.  Some of the drawbacks is that it can be difficult to adopt, can be more time consuming in the short term, it can add to the overhead as tests needt o be maintained as the codebase changes.

- What is the value of using JSONSchema for validation?
  JSONSchema is an easy to setup and maintain validation system that helps to reduce the amount of code needed to process and validate data.  It also allows user data to "fail fast" before the bad data(corrupt or incomplete data) can get to the database.  

- What are some ways to decide which code to test?
  Identify the most critical parts of the app and or API, any high-risk components, parts dealing with user interactions, integration points withh external APIs. Additionally we should be testing the API and not the database.

- What does `RETURNING` do in SQL? When would you use it?
  RETURNING in SQL allows the informaiton being stored in the database to be displayed in the Terminal withough having to use a separate SELECT query.  The RETURNING clause can be used after using INSERT, UPDATE and DELETE statement.

- What are some differences between Web Sockets and HTTP?
  Websockets and HTTP are both communication protocols used on the internet.  However, Websockets are ideal for real-time bidirectional communication such as chat applications, online gaming and live sports updates.  Where as, HTTP is used for more standard web applications that do not require real-time updates and is ideal for request-response pattern - fetching and submitting data, loading webpages, API interaction, etc...

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  
  I personally preferred Flask, I found it to be more straight forward in its usage and have so fara come to prefer Python over JavaScript.  
