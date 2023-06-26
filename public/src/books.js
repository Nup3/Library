function findAuthorById(authors, id) {
  for (let i = 0; i < authors.length; i++){
    if (authors[i].id === id){ 
    return authors[i]}
  }
}

function findBookById(books, id) {
  for (let i = 0; i < books.length; i++){
    if (books[i].id === id) return books[i]    
    }
  }

function partitionBooksByBorrowedStatus(books){
  const returned = books.filter((book) => book.borrows[0].returned)
  const notReturned = books.filter((book) => !book.borrows[0].returned)
  const result = [notReturned, returned]
  return result 
}

function getBorrowersForBook(book, accounts){
  let result = [];
  let borrowArray = book.borrows;  
  borrowArray.forEach(borrow=>{
    let account = accounts.find(acc => acc.id === borrow.id);
    let obj = account;
    obj['returned'] =  borrow.returned;
    result.push(obj);
  })
  return result.slice(0,10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
