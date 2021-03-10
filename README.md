# Hello Candidate

## Instructions

End Points

- POST> /book/update/:id
  - this endpoint will update the book via :id provided in the params
  - data will be taken from Body:raw:JSON, with this object {name: string, author: string, copy: number}
- GET> /book/
  - this endpoint will give all of the existing books in a form of an array
- POST> /book/add
  - this endpoint will take the data from the request, and create a new book.
  - data will be taken from Body:raw:JSON, with this object {name: string, author: string, copy: number}

Note that you will also be evaluated based on how well you structure your code and name variables.
