const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (isValid(username)) { 
      users.push({"username":username,"password":password});
      //console.log(users)
      return res.status(200).json({message: "User successfully registred. Now you can login"});
    } else {
      return res.status(404).json({message: "User already exists!"});    
    }
  } 
  return res.status(404).json({message: "Unable to register user."});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  return res.status(200).json(books);
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  const num =req.params.isbn;
  return res.status(200).json(books[num]);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  const author =req.params.author;
  const length=Object.keys(books).length
  let filtered_books={}
  for(let i=0;i<length;i++){
    console.log(books[Object.keys(books)[i]])
    if(books[Object.keys(books)[i]].author===author){
      filtered_books[i]=books[Object.keys(books)[i]];
    }
  }
  return res.status(200).json(filtered_books);
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  const title =req.params.title;
  const length=Object.keys(books).length
  let filtered_books={}
  for(let i=0;i<length;i++){
    console.log(books[Object.keys(books)[i]])
    if(books[Object.keys(books)[i]].title===title){
      filtered_books[i]=books[Object.keys(books)[i]];
    }
  }
  return res.status(200).json(filtered_books);
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const num =req.params.isbn;
  return res.status(200).json(books[num].reviews);
});

module.exports.general = public_users;
