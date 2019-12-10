let burger = sprites.create(img`
. . . . c c c b b b b b . . . . 
. . c c b 4 4 4 4 4 4 b b b . . 
. c c 4 4 4 4 4 5 4 4 4 4 b c . 
. e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
. e b 4 4 4 4 4 5 4 4 4 4 b e . 
8 7 e e b 4 4 4 4 4 4 b e e 6 8 
8 7 2 e e e e e e e e e e 2 7 8 
e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
e b e 8 8 c c 8 8 c c c 8 e b e 
e e b e c c e e e e e c e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . c c c c c e e e e e . . . 
`, SpriteKind.Player)
burger.setPosition(20, 10)
let lemon = sprites.create(img`
4 4 4 . . 4 4 4 4 4 . . . . . . 
4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
. b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
. b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
. c 4 5 5 5 5 d d d 5 5 5 5 5 b 
. c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
. . c 4 4 d 4 4 4 4 4 d d 5 d c 
. . . c 4 4 4 4 4 4 4 4 5 5 5 4 
. . . . c c b 4 4 4 b b 4 5 4 4 
. . . . . . c c c c c c b b 4 . 
`, SpriteKind.Player)
lemon.setPosition(40, 10)
let donut = sprites.create(img`
. . . . . . b b b b a a . . . . 
. . . . b b d d d 3 3 3 a a . . 
. . . b d d d 3 3 3 3 3 3 a a . 
. . b d d 3 3 3 3 3 3 3 3 3 a . 
. b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
. b 3 3 3 3 3 a a 3 3 3 3 3 a b 
b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
a a 3 3 3 d d d a a 4 4 4 e e . 
. e a a a a a a 4 4 4 4 e e . . 
. . e e b b 4 4 4 4 b e e . . . 
. . . e e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
donut.setPosition(60, 10)
let taco = sprites.create(img`
. . . . . . . e e e e . . . . . 
. . . . . e e 4 5 5 5 e e . . . 
. . . . e 4 5 6 2 2 7 6 6 e . . 
. . . e 5 6 6 7 2 2 6 4 4 4 e . 
. . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
. e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
. e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
e 5 e c 5 4 5 4 5 5 5 e e . . . 
e 5 e e 5 5 5 5 5 4 e . . . . . 
4 5 4 e 5 5 5 5 e e . . . . . . 
. 4 5 4 5 5 4 e . . . . . . . . 
. . 4 4 e e e . . . . . . . . . 
`, SpriteKind.Player)
taco.setPosition(80, 10)
let ham = sprites.create(img`
. . . . . . 2 2 2 2 . . . . . . 
. . . . 2 2 3 3 3 3 2 e . . . . 
. . . 2 3 d 1 1 d d 3 2 e . . . 
. . 2 3 1 d 3 3 3 d d 3 e . . . 
. 2 3 1 3 3 3 3 3 d 1 3 b e . . 
. 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
e 3 d 3 3 1 d d 3 d 1 b b e e . 
. e 3 1 1 d d 1 1 1 b b e e e . 
. . e 3 3 3 3 3 3 b e e e e . . 
. . . e e e e e e e e e e . . . 
`, SpriteKind.Player)
ham.setPosition(100, 10)
let chicken = sprites.create(img`
. . 2 2 b b b b b . . . . . . . 
. 2 b 4 4 4 4 4 4 b . . . . . . 
2 2 4 4 4 4 d d 4 4 b . . . . . 
2 b 4 4 4 4 4 4 d 4 b . . . . . 
2 b 4 4 4 4 4 4 4 d 4 b . . . . 
2 b 4 4 4 4 4 4 4 4 4 b . . . . 
2 b 4 4 4 4 4 4 4 4 4 e . . . . 
2 2 b 4 4 4 4 4 4 4 b e . . . . 
. 2 b b b 4 4 4 b b b e . . . . 
. . e b b b b b b b e e . . . . 
. . . e e b 4 4 b e e e b . . . 
. . . . . e e e e e e b d b b . 
. . . . . . . . . . . b 1 1 1 b 
. . . . . . . . . . . c 1 d d b 
. . . . . . . . . . . c 1 b c . 
. . . . . . . . . . . . c c . . 
`, SpriteKind.Player)
chicken.setPosition(120, 10)
