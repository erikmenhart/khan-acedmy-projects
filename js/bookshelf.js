var book = [
    {title: "The Giver",
    author: "somebody",
    stars: 4,
    color: color(43, 0, 255)},
    {title: "book",
    author: "an author",
    stars: 2,
    color: color(0, 255, 85)},
    {title: "literature",
    author: "somebody else",
    stars: 3,
    color: color(238, 0, 255)},
];
// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);

for(var i = 0; i<book.length; i++)
{
fill(book[i].color);
rect(10+i*100,20,90,100);
fill(0);
text(book[i].title,15+i*100,30,70,100);
text(book[i].author,15+i*100,60,70,100);
for (var s = 0; s < book[i].stars; s++) {
    image(getImage("cute/Star"), 11 + s * 20+i*100, 90, 20, 30);
}
}
