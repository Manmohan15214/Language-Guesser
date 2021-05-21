const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const input = process.argv[2];
if (!input) {
    console.log("PLEASE ENTER A TEXT NEXT TIME !!!".red.underline);
    return;
}

const langCode = franc(input);

if (langCode === 'und') {
    console.log("WHOOPS WE COULD'NT FIGURE OUT WHAT LANGUAGE IS THIS. TRY ANOTHER".red);
}
else {
    const lg = langs.where('3', langCode);
    if (lg === undefined) {
        console.log(`WE THINK THE LANGUAGE CODE IS : ${langCode} \nSORRY FULL NAME OF LANGUAGE ISN'T IN DATABASE`.green);
    }
    else {
        console.log(`WE THINK IT IS : ${lg.name}`.green);
    }
}