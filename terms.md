#Terms
This list will be live updating but this is a pretty good start. A broad list of terms you may come across during web development.<br />

Current revision: Oct. 26, 2015<br />

## Abbreviations
**RoR** - Ruby on Rails <br/>
**PHP** - PHP: Hypertext Preprocessor <br />
**LAMP** - Linux Apache MySQL PHP<br />
**LARP** - Linux Apache RoR PostgreSQL<br />
**MEAN** - MongoDB Express AngularJS node.js<br />
**HTTP** - Hyper Text Transfer Protocol<br />
**MVC** - Model View Controller<br />
**CRUD** - Create Read Update Destroy<br />
**JS** - JavaScript<br />
**HTML** - Hyper Text Markup Language<br />
**HAML** - HTML Abstraction Markup Language<br />
**CSS** - Cascading Stylesheets<br />
**DOM** - Document Object Model<br />
**SASS** - Syntactically Awesome Style Sheets (CSS transcompiler)<br />
**SCSS** - Sassy CSS<br />
**UI** - User Interface<br />
**UX** - User Experience<br />
**JSON** - JavaScript Object Notation<br />
**AJAX** - Asynchronous JavaScript And XML (but it's always JSON)<br />
**DB** - Database<br />
**SQL** - Structured Query Language<br />
**ORM** - Object Relational Mapper/Mapping<br />
**API** - Application Program Interface<br />
**AWS** - Amazon Web Services<br />
**D.O.** - Digital Ocean<br />
**REST** - REpresentational State Transfer <br />
**SOAP** - Simple Object Access Protocol <br />

## Terms and Definitions
**Backend** - The logic and behavior of the website.<br />
**Frontend** - The UI; stylings, formatting, and user interactions<br />
**MVC**<br />
* **Model** - Handles fundamental behaviours and data of specific parts of the applications<br />
* **View** - The User Interface of the application. Rendered Data from the Model<br />
* **Controller** - Receives user input and makes calls to model objects and the view to perform appropriate actions<br />
* MVC is the most popular web framework paradigm. It's a way to organize the logic and flow of the application from execution to render.<br />
**Rails** - Ruby's MVC Framework<br />
**PHP** - One of the oldest web languages. Began as a templating language for HTML and grew into the OOP/Procedural language that it is today.<br />
**(Technology) Stack** - The list of technologies, programs, applications, and/or plugins that are used in a product.<br />
**LAMP** - One of the most popular web stacks. Linux is the OS, Apache is the Webserver, MySQL is the database, and PHP is the backend language.<br />
**LARP** - Ruby's main web stack. Linux as the OS, Apache as the server, RoR as the backend, and PostgreSQL as the database.<br />
**MEAN** - One of the newest web stacks. 100% Javascript. MongoDB as the database, Express as the backend MVC, Angular as the frontend MVC, and node.js as the webserver.<br />
**CRUD** - Standard methods included in an object/model. Used for creating a new object, getting/reading data from the object, updating/editing the object, and destroying/removing the object.<br />
**Route** - a URL. Describes a set of actions that a framework needs to do. Includes parameters and other data so that the right page/data gets displayed to the user.<br />
**URL** - Uniform Resource Locator - the thing that goes in the address bar.<br />
**DNS** - Domain Name Service - translates 'google.com' into `216.58.219.14` so your computer knows what server to connect to in order to send the web request.<br />
**JS** - JavaScript was one of the most ipmortant changes to web in history. Previous to JS, to get a web-page to update, you had to re-request the webpage with the updated parameters, the server would have to return a new file, and the browser would have to re-render everything. JavaScript added client-side interactivity and a dynamic UI. Has done nothing but get more and more important as time goes on. The MEAN stack is 100% JavaScript. The two most popular frontend MVCs (AngularJS and Backbone.js) are in JavaScript.<br />
**HTML** - HTML is what is used to layout the elements that will be rendered on the web page. It's a markup language (not a programming language!) so it has no formal logic or flow control - all dynamic content generation has to be done by the server and then returned as an HTML file.<br />
**HAML** - HAML is a templating language for HTML. HAML allows you to insert Ruby variables, run Ruby control statements (if, while, foreach,etc), and is whitespace delimited instead of tag delimited.<br />
**CSS** - CSS is used for for styling elements on the web page. Colors, sizes, z-index, positioning, font-size, scaling, padding, etc. How each HTML-declared element LOOKS on the page is a result of the CSS. DO NOT EVER DO INLINE HTML STYLING unless it is for a one-off use case. Use classes!<br />
**DOM** - This is probably one of the weirder ones to explain but basically the DOM is the browser API for parsing/displaying the HTML and CSS. It's not the HTML, it's not the page source, it's not the JavaScript, and it's not the CSS. The DOM is how the page is rendered and manipulated. JavaScript is able to edit the DOM because it is able to add content to the document structure of the web page. Easiest graphical representation of the DOM is the browser's devtools. From there you can see everything that goes into the creation of the page that you are currently viewing.<br />
**Shadow DOM** - Fair Warning: don't read this if my DOM explanation doesn't make sense; it'll just confuse you further. The Shadow DOM was created to separate the content from the presentation of the elements and is a fundamental part of Web Components. Browsers have been using this as a way to encapsulate elements into their own subtrees that are hidden away from the top level DOM. Shadow DOM elements are 100% encapsulated in their respective contexts which means that CSS stylings and JS cannot touch them because they can't be seen by the surface. The browser is the only thing able to see into the Shadow DOM and render the element tree that it sees there. The viewsource only has the external, visible element. In Web Components this is critical for creating custom tags without having to provide the implementation files, stylings, and layout to accompany it. Rather, you can have a custom tag, e.g. <video /> and have its implementation hidden away in the Shadow DOM. If none of this makes sense, ignore it! We don't talk about it at all.<br />
**SASS/SCSS** - Transpiled language for CSS. Just a nicer syntax whose goal is to remove all of the annoying quirks of cross-browser compatibility and also to add in some features to vanilla CSS.<br />
**UI** - What the user sees<br />
**UX** - The interaction experience that the user has with the product. Good UX means the user can be productive, the layout makes sense, the flow of the application is cohesive, and the experience is overall good. Bad UX results in users not ever coming back or never discovering certain parts of your application.<br />
**JSON** - JSON is BASICALLY just a hash that is used to store data in an easy way. It's primarily used for passing data around the web from APIs.<br />
**AJAX** - AJAX is awesome. AJAX allows you to make server requests from JavaScript, receive data back from the response, and then process the data. So, lets say you wanted to implement infinite scrolling to your webpage, but you don't want to have to load EVERYTHING all at once - that would take forever. So instead, you load the first 50 items, and when the user makes it 80% down the page, you send an AJAX request to your webserver to get the next 50 items, process the data, and append them to the bottom of your current list. It saves bandwidth, adds interactivity to your webpage, and doesn't require a page refresh to do. AJAX rocks.<br />
**DB** - The database is how data is persistently stored on the web. There are two main types of databases - SQL/Relational Database, and NoSQL/Document Databases. SQL/Relational databases are visually similar to excel spreadsheets, with each table being a page in the document. Columns represent fields to be filled in, rows are entries into the table. Relations are how each table is connected to another table. For example, you have a users table and a comments table. Whenever someone makes a comment on something, the comment is added into the comments table with a user\_id field to tie it back to the specific user that made the comment. If you need to get the values from two+ tables, you can perform a JOIN on the data to link up specific columns from separate tables and link them together into a single result. Non-relational databases employ key-value pair arrays to store all of the data. Each user is stored in a (normally JSON) array with all of the fields being the key and the entries being the values. Think nested hash tables. NoSQL is extremely fast because of the lookup time of key-value arrays but aren't as useful at establishing relationships between entries in the database. Instead of having separate tables and a relation between the data, NoSQL would modify the user object to contain elements of the would-be relation. So for our users and comments, NoSQL would instead have a key-value array of the comments added to the post object that is being commented on in the first place.<br />
**SQL** - Pronounced ES-QUEUE-ELL or sequel (totally up to you on pronunciation). Syntax for performing actions on a database. A query is a 'sentence' that tells a database what to do. Insert, Update, Delete, SELECT, etc. Reads pretty closely to English and is the main way of getting data back from a database. Say you wanted all comments on a certain post: `SELECT * FROM comments WHERE post_id = 2;`.<br />
**ORM** - ORMs are pretty cool. Rather than deal with reading/writing queries and handling the data they return, ORMs will handle the querying and instead populate an object with the results of the query. Normally a query from a DB will return an key-value array with all of the content you asked for and it's up to you to parse the fields to extract the data. ORMs will take this one step further and pre-populate a model with the results of a query so you can directly work with and manipulate an object rather than the query/data. Rails' ORM is ActiveRecord, Symfony's (PHP Framework) is Doctrine, Python uses SQLAlchemy, Node uses orm (yes that's its name), and ASP.NET uses Entity.<br />
**API** - API is a set of methods and functions that are able to be called to perform an action. API refers to both the functions themselves as well as their documentation. So if I said check the ActiveRecord API for searching, you would see a list of all of the functions ActiveRecord has for performing a search as well as how to properly use them and the data they return.<br />
**Documentation** - Instructions and Specifications on code. Whether it be how to use an API, what data types are supported, what version the code is, what functionality is supported, etc., documentation is absolutely necessary for software. Good documentation can lead to your code actually being enjoyable to use. Bad documentation will land you in infamy or worse, abandonment.<br />
**AWS** - AWS is the suite of applications for Web offered by Amazon. Popular applications are EC2 (Elastic Cloud Computing) which, for all intents and purposes, allows you to spin up webserver instances. S3 (Simple Storage Services) which is used mostly for static content storage (imgur stores the data of the image on S3 instead of on their own hard drives), Route53 which is a DNS web service, SES (Simple Email Service), and CloudWatch which provides monitoring for EC2 and EBS (Elastic Block Store).<br />
**D.O.** - Cloud-based web hosting company. I love DO and use them frequently for hosting applications.<br />
**Heroku** - Another cloud-base web hosting company. They have a free tier that is fantastic and are the most popular webhost for RoR apps.<br />
**SaaS** - Software as a Service - applications are hosted on the internet as web applications instead of installed on a computer. Popular webapps include Salesforce, LinkedIn, LogMeIn, Office365, iCloud, Google Docs, Dropbox, Adobe Creative, etc.<br />
**Caching** - Caching is saving data either on an intermediate webserver (cloudflare) or in the browser (cookies/webcache) so that data loads faster. If something is the same for everyone, you don't need to have the server recreate the HTML page every single time - just return the cached version.<br />
**CloudFlare** - CloudFlare protects and accelerates websites online. It adds a proxy inbetween users and your website and will cache, determine if a visitor is a bot (to prevent against D/DoS attacks), run analytics, and distribute content from servers around the world to speed up data requests (e.g. it's a lot faster to have an international site stored on servers internationally than have every single request have to come to a server in America or *insert home country here*).<br />
**Persistence** - opposite of ephemeral. Data that needs to be saved and cannot be tossed out after it's been viewed. Most content on the web is ephemeral (e.g. loading a specific of a web page and then throwing it out after the user no longer needs it) but some data (accounts, posts, comments, etc) needs to be persisted.<br />
**Hash** - a one-way algorithm that performs certain mathematical functions to obfuscate the data into a (hopefully) unique result. Popular hashing algorithms include MD5 (don't use), SHA, Whirlpool, and Blowfish.<br />
**Salting** - Adding a random string of characters to the end of a string pre-hashing to get unique outputs even when individual inputs may be the same.<br />
**BCrypt** - Software used for storing passwords in a database. Employs hashing and salting to make sure the data is properly obfuscated and cannot be decrypted. Not 100% secure, but good enough for most cases. If security is a priority, employ a 'Log in with Google' or 'Log in with Facebook' button.<br />
**Cookie** - A file, stored by a web browser, that persists longer than a user session. Normally used to store some website data so that it doesn't have to re-query the server for data. Common things stored in cookies are login/session tokens, shopping cart items, or interface preferences.<br />
**GitHub** - A public git server where people can store code repositories, have teams, collaborate on code, or share open source work. Unlimited collaborators, but no free private repos. <br />
**BitBucket** - A public git server where people can store code repositories, have teams, collaborate on code, or share open source work. Unlimited free private repos, but free team size limit is 5. <br />
**HTTP Error Codes**
* 200 - OK
* 400 - Bad Request
* 401 - Unauthorized
* 403 - Forbidden
* 404 - Not Found
* 500 - Internal Server Error
* 503 - Server Unavailable (Server is overloaded)
**Asynchronous** - Methods are executed independent of their ordering within the file. They just run whenever they're called and will run along with other methods simultaneously.
**Race Condition** - A condition where a device attempts to perform two or more operations at the same time but, because of how the system works, the operations must be done in the proper sequence to be done correctly. Normally refers to the error where one process is finishing before another one, which is causing undesirable behavior.
**Promise** - (I'll be referring to them in the context of JavaScript) Promises are used to help you get out of callback hell. A promise is a method that eventually produces a value. It's the asynchronous equivalent of a getter access function. They replace the async use of callbacks. Promises can be in 1 of 3 states, *fulfilled*, *pending*, or *rejected*. Promises are set to pending when they are created and will eventually end up in either the fulfilled or rejected state. This state transition is called the *resolution*. You initialize a promise on some condition (e.g. an image is loaded) and then, using the `then` function, can execute events based on the result of the promise: `then(onFulfilled, onRejected)`. Very important if you want to execute methods after certain results are returned in an async environment where race conditions are definitely a thing. Promises are important. If you don't understand what they are, look them up! <br />


