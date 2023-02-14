new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("老冬瓜 ❤❤❤ 小米渣")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("在一起以来的第一个情人节 ~ ~")
    .pause(3000)
    .delete(null, {
        delay: 500
    })
    .type("双向奔赴的我们一定会有光明的未来！")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();