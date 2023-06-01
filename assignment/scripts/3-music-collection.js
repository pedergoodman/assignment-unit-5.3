console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let obj = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(obj)
}



