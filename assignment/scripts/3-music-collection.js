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


function findByArtist(artist) {
    let result = [];
    for (const i in collection) {
        if (collection[i].artist === artist) { // if artist argument === artist property value
            result.push(collection[i])
        }    
    }
    return result;
}

function search(artist, year) {
    let result = [];
    for (const i in collection) {
        if (collection[i].artist === artist && collection[i].yearPublished === year) {
            result.push(collection[i])
        }
    }
    if (result.length > 0) {
        return result;
    } else {
        return collection;
    }
}



// TESTS

addToCollection('Gliss Riffer', 'Dan Deacon', 2015);
addToCollection("Fake Mews!", "Bad Bad Meow", 2017);
addToCollection('Half the Bad & Twice the Good', 'Bad Bad Meow', 2015);
addToCollection('This is Happening', 'LCD Soundsystem', 2010);
addToCollection('Lollygagger', 'Lollygagger', 2019);
addToCollection('Soft Sounds From Another Planet', 'Japanese Breakfast', 2017);
// should add each album to array


console.log('collection is:', collection);
console.log(showCollection(collection));
// should return array with 6 objects


console.log('Searching by Artist');
console.log('Searching for Artist Dan Deacon', findByArtist('Dan Deacon'));
// should return an array with 1 objs
console.log('Searching for Artist Bad Bad Meow', findByArtist('Bad Bad Meow'));
// should return an array with 2 objs
console.log('Searching for Artist Andrew Bird', findByArtist('Andrew Bird'));
// should return empty array