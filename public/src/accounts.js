function findAccountById(accounts, id) {
  for (let i = 0; i < accounts.length; i++){
    if (id === accounts[i].id)
      return accounts[i]
  }
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB)=> nameA.name.last.toLowerCase() < nameB.name.last.toLowerCase() ? -1: 1)
}

function getTotalNumberOfBorrows(account, books) {
  const accId = account.id;
  let total = 0;
  books.forEach(book => book.borrows.forEach(function(borrow)
                                             { if (accId === borrow.id) total +=1}));
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let books_taken = [];
    books.forEach(book=>{
      if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
        books_taken.push(book);
      }
    })
    books_taken.forEach(book=>{
      let anAuthor = authors.find(person => person.id === book.authorId);
      book['author'] = anAuthor;
    })
    return books_taken;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
