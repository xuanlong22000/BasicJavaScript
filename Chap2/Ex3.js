var size = 8
for (var x = 0; x < size; x++) {
    var line = ' '
    for (var y = 0; y < size; y++) {
        if ((x + y + 1) % 2 == 0) {
            line += ' '
        } else {
            line += '#'
        }
    }
    console.log(line)
}
/* 
1st
0 0 1 = 1 #
0 1 1 = 2 ' '
0 2 1 = 3 #
0 3 1 = 4 ' '
0 4 1 = 5 #
0 5 1 = 6 ' '
0 6 1 = 7 #
0 7 1 = 8 ' '
2nd
1 0 1 = 2 ' '
1 1 1 = 3 #
1 2 1 = 4 ''
1 3 1 = 5 #
1 4 1 = 6 ''
1 5 1 = 7 #
1 6 1 = 8 ' '
1 7 1 = 9 #
... 8th
*/