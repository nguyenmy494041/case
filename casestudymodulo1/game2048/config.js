function colorsSize(value) {
    if (value > 2048) {
        return { size: 36, color: "#BA55D3" };
    } else {
        return colors_sizes[value];
    }
}

let colors_sizes = {
    2: {
        size: 64,
        color: "#eee4da"
    },

    4: {
        size: 64,
        color: "#ede0c8"
    },

    8: {
        size: 64,
        color: "#f2b179"
    },

    16: {
        size: 64,
        color: "#f59563"
    },

    32: {
        size: 64,
        color: "#f67c5f"
    },

    64: {
        size: 64,
        color: "#f65e3b"
    },

    128: {
        size: 36,
        color: "#edcf72"
    },

    256: {
        size: 36,
        color: "#edcc61"
    },

    512: {
        size: 36,
        color: "#edc850"
    },

    1024: {
        size: 36,
        color: "#edc53f"
    },

    2048: {
        size: 36,
        color: "#edc22e"
    }
}