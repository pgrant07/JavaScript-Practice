/*jshint esversion:6*/
/**
* Book constructor
* @param {*} title 
* @param {*} author 
* @param {*} isbn 
*/
function Book(title, author, isbn){
  this.title=title;
  this.author=author;
  this.isbn=isbn;
}

/**
* UI Constructor
*/
function UI(){}

/**
* Add book to list
* @param {*} book 
*/
UI.prototype.addBookToList=function(book){
  const list=document.getElementById('book-list');
  
  //Create tr element
  const row=document.createElement('tr');
  
  //Insert columns
  row.innerHTML=`
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `;
  
  list.appendChild(row);
};

/**
 * Show alert
 * @param {*} message 
 * @param {*} className 
 */
UI.prototype.showAlert=function(message, className){
  //Create div
  const div=document.createElement('div');

  //Add classes
  div.className=`alert ${className}`;

  //Add text
  div.appendChild(document.createTextNode(message));

  //Get parent
  const container=document.querySelector('.container');
  const form=document.querySelector('#book-form');
  
  //Insert alert
  container.insertBefore(div, form);

  //Timeout after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
};

UI.prototype.deletebook=function(target){
  if(target.className==='delete'){
    target.parentElement.parentElement.remove();
  }
};

/**
* Clear fields
*/
UI.prototype.clearFields=function(){
  document.getElementById('title').value='';
  document.getElementById('author').value='';
  document.getElementById('isbn').value='';
};

//Event Listener for adding book
document.getElementById('book-form').addEventListener('submit', function(e){
  //Get form values
  const title=document.getElementById('title').value, author=document.getElementById('author').value,isbn=document.getElementById('isbn').value;
  
  //Instantiate book
  const book = new Book(title, author, isbn);
  
  //Instatiate UI
  const ui=new UI();
  
  //Validate
  if(title==='' || author==='' || isbn===''){
    //Error alert
    ui.showAlert('Please fill in all fields', 'error');
  }else{
    //Add book to list
    ui.addBookToList(book);
    
    //Show success
    ui.showAlert('Book Added!', 'success');

    //Clear fields
    ui.clearFields();
  }
  
  
  e.preventDefault();
});

//Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
  //Instatiate UI
  const ui=new UI();

  //Delete book
  ui.deletebook(e.target);

  //Show alert
  ui.showAlert('Book Removed', 'success');
  e.preventDefault();
});