//Chess board

var space = " # # # #"
var hash = "# # # #"

for (var i = 1; i <= 8; i++) {
    if (i % 2 != 0)
        console.log(space);
    else
        console.log(hash);
}
