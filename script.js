var nounarr = Array("seal", "ghost","mouse", "mayor","chef", "president", "mom");

var verbarr = Array("screamed", "shouted","whispered", "punch","love", "breaking", "stealing", "eating");

var adjarr = Array("old", "dumb","wild", "non-existent","mischievous");

$(document).ready(function(){

    $(".noun").click(newnoun);
    $(".verb").click(newverb);
    $(".adj").click(newadj);

function newnoun() {
    var randomnoun = nounarr[Math.floor(Math.random()*nounarr.length)];
    $(this).text(randomnoun);
}
function newverb() {
    var randomverb = verbarr[Math.floor(Math.random()*verbarr.length)];
    $(this).text(randomverb);
}

function newadj() {
    var randomadj = adjarr[Math.floor(Math.random()*adjarr.length)];
    $(this).text(randomadj);
}
});