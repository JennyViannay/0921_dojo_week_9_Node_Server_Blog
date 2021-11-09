# Dojo Node.JS/MySQL - Bonus REACT for Frontend

## 1 - Connect this Node Server with your MySql Server ~ 5/10min
- add .env file following exemple in .example-env file and read /config/config.js to understand how it's work

## 2 - Launch Server ~ 2 min
- ```npm install```
- ```npm start``` 
- Server listenning on http://localhost:5000
- Endpoint available :
  * '/' => Welcome Server Home
 
## 3 - Create Database | Create Table Article | Add Some Data ~ 30/45min
- In your MySql Server create a database nammed 'node-blog'
- Create a table nammed 'article' with :
  - primary key & auto increment id not nullable (int)
  - title not nullable (varchar)
  - content not nullable (longtext)
  - image not nullable (varchar with max caracters)
- Add some data :
  - {title : "La programmation orientée objet", content: "La programmation orientée objet (POO), ou programmation par objet, est un paradigme de programmation informatique. Elle consiste en la définition et l'interaction de briques logicielles appelées objets ; un objet représente un concept, une idée ou toute entité du monde physique, comme une voiture, une personne ou encore une page d'un livre.", image: "https://via.placeholder.com/350x150"}
  - {title : "Paradigme (programmation)", content: "Un paradigme de programmation est une façon d'approcher la programmation informatique et de traiter les solutions aux problèmes et leur formulation dans un langage de programmation approprié. Il s'oppose à la méthodologie, qui est une manière d'organiser la solution des problèmes spécifiques du génie logiciel.", image: "https://via.placeholder.com/350x150"}

## 4 - Make availables endpoints on the server : ~ 30/45min
- First read the index.js and try to understand how the server is architected
- Go in /routes/articles.js and make 3 endpoints for your article data :
  * '/articles/' => READ ALL ARTICLES -> this endpoint is already OK, you can use it as exemple
  * '/articles/:id' => READ ONE ARTICLE
  * '/articles/:id' => DELETE ONE ARTICLE
- Test all endpoints with POSTMAN or other tools of your choice 
  
## 5 - Clone the React App frontend 
- Follow the README.md instructions

## 6 - BONUS 
- Complete the total CRUD of article in the server with    
  * '/articles/' => CREATE ARTICLE
  * '/articles/:id' => UPDATE ARTICLE
- Complete the REACT APP with new components (form to create a new article/update article)


