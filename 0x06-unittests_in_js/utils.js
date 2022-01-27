const Utils = {
    calculateNumber(type, a, b) {
        if (type === "SUM")
            result = Math.round(a) + Math.round(b);
        else if (type === "SUBTRACT")
            result = Math.round(a) - Math.round(b);
        else {
            if (Math.round(b) == 0)
                return "Error";
            result = Math.round(a) / Math.round(b);
        }
        return result
    }
}

module.exports = Utils
