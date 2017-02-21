const people = [
    { name: 'Wes', year: 1988},
    { name: 'Kait', year: 1986},
    { name: 'Irv', year: 1970},
    { name: 'Lux', year: 2015}
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'Your the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const currentYear = (new Date()).getFullYear();

const atLeastOne19 = people.some(function(person) {
    if((currentYear - person.year) >= 19 ) {
return true;
    }
});
console.log(atLeastOne19);

const adult = people.some(person => (currentYear - person.year));
console.log(adult);

// Array.prototype.every() // is everyone 19 or older?
const everybodyAdult = people.every(person => (currentYear - person.year));
console.log(everybodyAdult);

// Array.prototype.find()
// find the comment with the ID of 823423

const comment = comments.find(function (comment) {
    if (comment.id === 823423) {
        return true;
    }
});
console.log(comment);

const commentId = comments.find(comment => comment.id === 823423);
console.log(commentId);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

comments.splice(index, 1);