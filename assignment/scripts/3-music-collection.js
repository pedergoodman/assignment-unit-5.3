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

function showCollection(array) {
    console.log('This Collection has', array.length, 'albums.' );
    for (const i in array) {
        console.log(array[i].title + ' by ' + array[i].artist + ', published in ' + array[i].yearPublished);
    }
}



addToCollection('Gliss Riffer', 'Dan Deacon', 2015);
addToCollection("Fake Mews!", "Bad Bad Meow", 2017);
addToCollection('Half the Bad & Twice the Good', 'Bad Bad Meow', 2015);
addToCollection('This is Happening', 'LCD Soundsystem', 2010);
addToCollection('Lollygagger', 'Lollygagger', 2019);
addToCollection('Soft Sounds From Another Planet', 'Japanese Breakfast', 2017);

console.log('collection is:', collection);
console.log(showCollection(collection));
