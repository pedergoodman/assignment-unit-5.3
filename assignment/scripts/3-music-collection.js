console.log('***** Music Collection *****')

let collection = [];


// adds title, artist, year published, and an array of tracks to an object
function addToCollection(title, artist, yearPublished, tracks) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks
    }
    collection.push(album); // pushes object into collection array
} // end addToCollection


// Displays collection length, then lists all the albums within the collection
function showCollection(array) {
    console.log('This Collection has', array.length, 'albums.' ); 
    for (const album in array) { // for every album in the array
        console.log(array[album].title + ' by ' + array[album].artist + ', published in ' + array[album].yearPublished); // logs album info
        
        let trackNumber = 1; // resets track number 

        for (const track in collection[album].tracks) { 
            let trackName = collection[album].tracks[track].trackName;
            let trackDuration = collection[album].tracks[track].trackDuration;
            console.log("\t" + trackNumber + ". " + trackName + ": " + trackDuration); // logs out track info within a given album
            trackNumber++;
        }

    }
} // end showCollection


function findByArtist(artist) {
    let result = [];
    for (const i in collection) {
        if (collection[i].artist === artist) { // if artist in collection === artist property value, add to result
            result.push(collection[i]);
        }  // else do nothing  
    }
    return result; // returns artist(s) found, otherwise returns empty if notfound  
} // end findByArtist


function search(artist, year, trackName) {
    let result = [];

    if (trackName) {

        for (const album in collection){
            
            for (track in collection[album].tracks) {

                if (trackName === collection[album].tracks[track].trackName){ // don't forget the fucking triple equal
                    let trackName = collection[album].tracks[track].trackName
                    let albumName = collection[album].title
                    let result = 'Found ' + trackName + ' in ' + albumName + ' album.';
                    return result; 
                    // console.log('Found', trackName, 'in', albumName, 'album.');
                }
        
            } 
            
        }
        
    } else {
        for (const i in collection) {
            if (collection[i].artist === artist && collection[i].yearPublished === year) { // searches for exactly artist && year criteria
                result.push(collection[i]);
            }
        }
        if (artist && year) {
            return result;
        } else {
            return collection;
        }
    }
} // end search

function addTracks(trackName, trackDuration) {
    let result = {trackName: trackName, trackDuration: trackDuration};
    return result;
}


// TESTS

// ADDING TRACKS

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
    {trackName:'Tell Me That You Lie', trackDuration: '2:42'}, 
    {trackName:'Tell The Truth', trackDuration: '3:20'},
    {trackName:"I Don't Belong", trackDuration: '3:54'},
]

// Tests using a function to add tracks to an array before plugging into addToCollection()

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


// ADDING TO COLLECTION

// Should add each album to array
addToCollection('Gliss Riffer', 'Dan Deacon', 2015, glissRifferTracks);
addToCollection("Fake Mews!", "Bad Bad Meow", 2017, fakeMewsTracks);
addToCollection('Half the Bad & Twice the Good', 'Bad Bad Meow', 2015, halfBadTracks);
addToCollection('This is Happening', 'LCD Soundsystem', 2010, thisIsHappeningTracks);
addToCollection('Lollygagger', 'Lollygagger', 2019, lollygaggerTracks);
addToCollection('Soft Sounds From Another Planet', 'Japanese Breakfast', 2017, softSoundsTracks);


// Testing items in collection and showingCollection()
console.log('collection is:', collection); // should return array with 6 objects
showCollection(collection); // should return length of 6 and list all the albums  



// SEARCHING

// Searching for Artist
console.log('\tSearching by Artist'); 

console.log('Searching for Artist Dan Deacon', findByArtist('Dan Deacon')); // should return an array with 1 objs
console.log('Searching for Artist Bad Bad Meow', findByArtist('Bad Bad Meow')); // should return an array with 2 objs
console.log('Searching for Artist not in array Andrew Bird', findByArtist('Andrew Bird')); // should return empty array
console.log('Empty Search', findByArtist()); // should return empty array


// Searching for band name and album year
console.log('\tTesting search Function, artist and year');

console.log("Searching for 'Bad Bad Meow, 2017'", search('Bad Bad Meow',2017)); // should return with one item in array
console.log("Searching for 'Bad Bad Meow, 2015'", search('Bad Bad Meow',2015)); // should return with one item in array
console.log("Searched, but not in array: 'Bad Bad Meow, 2012'", search('Bad Bad Meow',2012)); // should return entire collection
console.log("Searching for 'Dan Deacon, 2015'", search('Dan Deacon',2015)); // should return with one item in array
console.log("Empty Search", search()); // should return empty array

// Searching for trackname specifically, 
// can i leave the first 2 perameters blank ?? 

console.log('\tTesting search Function, trackName');

console.log(search("one", 'two', 'Mind On Fire')); // random artist and year. should return Mind On Fire
console.log(search(0,0,'Tell Me That You Lie')); // 0,0 in artist and year. should return Tell Me That You Lie

console.log(search('Lollygagger',2019,'Microcosm')); // accurate artist and year, should return Microcosm
console.log(search('Lollygagger',2019,)); // accurate artist and year, should return array

console.log(search('Bad Bad Meow',2017)); // accurate artist and year, should return array
console.log(search('Bad Bad Meow',2017, 'Tell The Truth')); // accurate artist and year, but track not in same album, should return Tell The Truth