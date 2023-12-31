function getTotalBooksCount(books) {
  let result = 0
  for (let i =0; i < books.length; i++){
    result += 1
  }
  return result 
}

function getTotalAccountsCount(accounts) {
  let result = 0
  for (let i =0; i < accounts.length; i++){
    result += 1
  }
  return result 
}

function getBooksBorrowedCount(books) {
  let result = 0
  for (let i = 0; i < books.length; i++){
    if (books[i].borrows[0].returned === false){
      result += 1
    }
  }
    return result 
}

function getMostCommonGenres(books) {
 const genres =books.reduce((acc, book) => { if (!acc[book.genre]) {
    acc[book.genre] = 1;}
      else { acc[book.genre] ++;}
     return acc;
}, {});
  
 return Object.entries(genres)
  .map(([name, count]) => {
   return {
    name,
    count
   };
  })
  .sort((a, b) => b.count - a.count)
  .slice(0, 5);
}

function getMostPopularBooks(books) {
   return books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}


function getMostPopularAuthors(books, authors) {
   let result = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
 return result.sort((a, b) => b.count - a.count).slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
