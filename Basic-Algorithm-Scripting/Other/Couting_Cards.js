//Initial solution. Saw case statement recommended online.

let count = 0;

const cc = card => {
    if (card >= 2 && card <= 6) {
        count += 1;
    } else if (card >= 7 && card <= 9) {
        count = count;
    } else if (
        card === 10 ||
        card === 'J' ||
        card === 'Q' ||
        card === 'K' ||
        card === 'A'
    ) {
        count -= 1
    }

    const newCount = count <= 0 ? `${count} Hold` : count > 0 ? `${count} Bet` : count;

    return newCount;
}
// Add/remove calls to test your function.
// Note: Only the last will display
cc(2);
cc(3);
cc(7);
cc('K');
cc('A');