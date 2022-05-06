function Books(){
    // const books = ['JavaScript', 'PHP', 'JAVA']

    const books = [{
        title: "JavaScript 101",
        author: 'James',
    }, 
    {
        title: 'PHP 101',
        author: 'John',

    }, 
    {
        title: 'JAVA 101',
        author: 'Jerry',
    },

    {
        title: 'JAVA 101',
        author: 'Jerry',
    }

]

    let booksList = books.map((book, index) => {
        book.id = new Date().getTime() + "-"+ index
        return <div key={book.id}>{book.title}</div>
    })

    return (
        <div>{booksList}</div>
    )

}

export default Books