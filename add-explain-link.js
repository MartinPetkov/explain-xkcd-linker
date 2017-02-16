var regexp = /Permanent link.*https?:\/\/xkcd.com\/([0-9]+).*/g;
var xkcdNum = regexp.exec($('body').html())[1];
var explainxkcdLink = "http://www.explainxkcd.com/wiki/index.php/" + xkcdNum;
var explainxkcdTag = "<br><a href=" + explainxkcdLink + ">Link to explanation</a>";
$("#transcript").before(explainxkcdTag);
