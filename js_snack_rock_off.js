function solve(a, b) {
    let [x, y] = [0, 0];

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) x++;
        else if (a[i] < b[i]) y++;
    }

    if (x > y) return `${x}, ${y}: Alice made "Kurt" proud!`;
    else if (x < y) return `${x}, ${y}: Bob made "Jeff" proud!`;
    else return `${x}, ${y}: that looks like a "draw"! Rock on!`;
}

solve([47, 50, 22], [26, 47, 12]); //'3, 0: Alice made "Kurt" proud!'