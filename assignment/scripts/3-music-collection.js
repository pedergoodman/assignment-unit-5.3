console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, tracks) {
    let obj = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    }
    collection.push(obj);
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
            result.push(collection[i]);
        }    
    }
    return result;
}


function search(artist, year) {
    let result = [];
    for (const i in collection) {
        if (collection[i].artist === artist && collection[i].yearPublished === year) {
            result.push(collection[i]);
        }
    }
    if (result.length > 0) {
        return result;
    } else {
        return collection;
    }
}

function addTracks(trackName, trackDuration) {
    let result = {trackName: trackName, trackDuration: trackDuration};
    return result;
}


// TESTS

// Adding Tracks

// Defining tracks first before plugging into addToCollection()
// first 3 use an array to add
let glissRifferTracks = [
    {trackName:'Mind On Fire', trackDuration: '3:51'}, 
    {trackName:'When I Was Done Dying', trackDuration: '4:18'},
    {trackName:'Learning to Relax', trackDuration: '6:44'},
    {trackName: 'Feel the Lightning', trackDuration:'4:53' }
]

let fakeMewsTracks = [
    {trackName:'The Most Beautiful Piece of Chocolate Cake', trackDuration: '3:49'}, 
    {trackName:'SCIENTISTS AND LAWMAKERS AGREE TO DISAGREE', trackDuration: '4:10'},
    {trackName: "THE WORLD'S SOFTEST HANDS", trackDuration: '2:53'},
    {trackName:'IS TRASH THE NEW SUPERFOOD?', trackDuration: '3:23'}
]

let halfBadTracks = [
    {trackName:'The Most Beautiful Piece of Chocolate Cake ', trackDuration: '3:49'}, 
    {trackName:'SCIENTISTS AND LAWMAKERS AGREE TO DISAGREE', trackDuration: '4:10'},
    {trackName:'SCIENTISTS AND LAWMAKERS AGREE TO DISAGREE', trackDuration: '4:10'},
]

// Test using a function to add tracks to an array before plugging into addToCollection()
let lollygaggerTracks = [];
lollygaggerTracks.push(addTracks('Microcosm', '3:42'));
lollygaggerTracks.push(addTracks('Captain Chuckles VS. The Multiverse', '3:14'));
lollygaggerTracks.push(addTracks('Stone', '3:50'));

let thisIsHappeningTracks = [];
thisIsHappeningTracks.push(addTracks('Dance Yrself Clean','8:56'));
thisIsHappeningTracks.push(addTracks('One Touch','7:46'));
thisIsHappeningTracks.push(addTracks('I Can Change','5:56'));

let softSoundsTracks = [];
softSoundsTracks.push(addTracks('Soft Sounds From Another Planet','3:21'));
softSoundsTracks.push(addTracks('Planetary Ambience','1:17'));
softSoundsTracks.push(addTracks('The Body Is a Blade','3:41'));



// should add each album to array
addToCollection('Gliss Riffer', 'Dan Deacon', 2015, glissRifferTracks);
addToCollection("Fake Mews!", "Bad Bad Meow", 2017, fakeMewsTracks);
addToCollection('Half the Bad & Twice the Good', 'Bad Bad Meow', 2015, halfBadTracks);
addToCollection('This is Happening', 'LCD Soundsystem', 2010, thisIsHappeningTracks);
addToCollection('Lollygagger', 'Lollygagger', 2019, lollygaggerTracks);
addToCollection('Soft Sounds From Another Planet', 'Japanese Breakfast', 2017, softSoundsTracks);


console.log('collection is:', collection);
// should return array with 6 objects
console.log(showCollection(collection));


console.log('\tSearching by Artist');
// should return an array with 1 objs
console.log('Searching for Artist Dan Deacon', findByArtist('Dan Deacon'));

// should return an array with 2 objs
console.log('Searching for Artist Bad Bad Meow', findByArtist('Bad Bad Meow'));

// should return empty array
console.log('Searching for Artist Andrew Bird', findByArtist('Andrew Bird'));


console.log('Testing Search Function');
// should return with one item in array
console.log(search('Bad Bad Meow',2017));
// should return with one item in array
console.log(search('Bad Bad Meow',2015));
// should return entire collection
console.log(search('Bad Bad Meow',2012));
// should return with one item in array
console.log(search('Dan Deacon',2015));
