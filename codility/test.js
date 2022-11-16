function solution(ranks) {
    const map = new Map();
    let result = 0;

    for (const rank of ranks) {
        map.set(rank, (map.get(rank) || 0) + 1);
    }

    for (const [rank, count] of map.entries()) {
        if (map.has(rank + 1)) {
            result += count;
        }
    }

    return result;
}

function checkCountry(Colors, Markers, i, j, N, M) {
    if (Markers[i][j] === true) return;
    Markers[i][j] = true;

    const currentColor = Colors[i][j];
    if (i + 1 < N && Colors[i + 1][j] === currentColor) {
        checkCountry(Colors, Markers, i + 1, j, N, M);
    }

    if (i - 1 >= 0 && Colors[i - 1][j] === currentColor) {
        checkCountry(Colors, Markers, i - 1, j, N, M);
    }

    if (j - 1 >= 0 && Colors[i][j - 1] === currentColor) {
        checkCountry(Colors, Markers, i, j - 1, N, M);
    }

    if (j + 1 < N && Colors[i][j + 1] === currentColor) {
        checkCountry(Colors, Markers, i, j + 1, N, M);
    }
}

function solution(Colors) {
    const N = Colors.length;
    const M = Colors[0].length;
    const Markers = Colors.map(r => r.fill(false));
    let sum = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (Markers[i][j] !== true) {
                checkCountry(Colors, Markers, i, j, N, M);
                sum++;
            }
        }
    }

    return sum;
}
