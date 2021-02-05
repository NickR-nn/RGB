class ColorConverter {
    rgbToCmyk(red, green, blue) {
        red = (parseInt(red) | 0) / 255;
        green = (parseInt(green) | 0) / 255;
        blue = (parseInt(blue) | 0) / 255;

        let black = 1 - Math.max(red, green, blue);
        let cyan = (1 - red - black) / (1 - black);
        let magenta = (1 - green - black) / (1 - black);
        let yellow = (1 - blue - black) / (1 - black);
        return {
            cyan: parseFloat(!cyan ? 0 : cyan).toFixed(3),
            magenta: parseFloat(!magenta ? 0 : magenta).toFixed(3),
            yellow: parseFloat(!yellow ? 0 : yellow).toFixed(3),
            black: parseFloat(!black ? 0 : black).toFixed(3),
        };
    }

    cmykToRgb(cyan, magenta, yellow, black) {
        cyan = parseFloat(!cyan ? 0 : cyan);
        magenta = parseFloat(!magenta ? 0 : magenta);
        yellow = parseFloat(!yellow ? 0 : yellow);
        black = parseFloat(!black ? 0 : black);

        let red = Math.ceil(255 * (1 - cyan) * (1 - black));
        let green = Math.ceil(255 * (1 - magenta) * (1 - black));
        let blue = Math.ceil(255 * (1 - yellow) * (1 - black));
        return {
            red: red,
            green: green,
            blue: blue,
        };
    }
}
