// ask
// Given a string, return if a given letter always appears immediately before another given letter.

// Worked Example
// ("he headed to the store", "h", "e") ➞ True

// # All occurences of "h": ["he", "headed", "the"]
// # All occurences of "h" have an "e" after it.
// # Return True

// ('abcdee', 'e', 'e') ➞ False

// # For first "e" we can get "ee"
// # For second "e" we cannot have "ee"
// # Return False




var bestFriend = (txt, a, b) => txt.split(a + b).length === txt.split(a).length;

bestFriend('helpasde rwtregtg', 'h' ,'e');
