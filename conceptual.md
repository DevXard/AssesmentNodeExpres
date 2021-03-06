### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
> * JWT is an encripted token that provides securety 

- What is the signature portion of the JWT?  What does it do?
  
> JWT Signature is combination from the headers the users info and a secret key provided by the
> 
> server. witch creates a unique signeture and if one of these is slightly diferent the signeture
> 
> will change

- If a JWT is intercepted, can the attacker see what's inside the payload?
  
> Yes attacker can see what's inside the payload it is recomended that 
> 
> no sensitive information is stored in the payload itself.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

> When creating an account or login in we use information like username and user status like admin or user
> 
> as the payload and we create a secret key. Then we provide the JWT library with the key and payload
> 
> witch encodes the information and creates the signeture

- Compare and contrast unit, integration and end-to-end tests.

> Unit tests are usually small and are ment to test small parts of a software.
> 
> integration tests are bigger and are ment to test how diferent part of an application work together.
> 
> end to end tests are test done by humans or special software that can test the flow of the application

- What is a mock? What are some things you would mock?

> mocks are functions that we create to semulate the responce we expect from
> a given function or api call for example
> mocks are usefull for 
> * testing
> * speed
> * cost reduction on a project

- What is continuous integration?

> Continuous integration is when you submit code to a reposotory and it is tested 
> 
> automaticly and if the test is succesfull it awayts aproval at witch poit it will 
> 
> integrated

- What is an environment variable and what are they used for?

> Environment variable is a special variable stored on your operating system
> The environment variable is used to set things like:
> * database URI
> * Secret keys for JWT
> * Setting development or production mode on projects and more.

- What is TDD? What are some benefits and drawbacks?

> Test driven development is when you write tests for
> a function and then write the function to fit the tests 
> 
> the benefits are:
> * better quality code
> * better app design
> * easyer to maintain code
> * and is faster in the long run

- What is the value of using JSONSchema for validation?

> using JSONSchema is useful becouse you can controll the data 
> entering your database and you are avoiding messy and invalid
> entryes 

- What are some ways to decide which code to test?

- What are some differences between Web Sockets and HTTP?

> The differences are that web sockets open a chanel betwean
> 
> the server and the user where information can muve freely
> 
> and when ever something is uppdated on the server it is automaticly ubdated on the user side
> 
> where HTTP is is a stateles and when changes oqure  a new request is needed for the change to take place


- Did you prefer using Flask over Express? Why or why not (there is no right 
  answer here --- we want to see how you think about technology)?

> At this moment i think i prefer Express mainly becouse it is in javascript
> and the testing makes more sence to me with jest.
> But flask is very easye and clean and from what i have seen it seams less moving parts

