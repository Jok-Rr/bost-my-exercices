export const my_display_unicode = (arr) => {

    const linkUnicode = {

        32: " ", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9",
        65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H", 73: "I",74: "J", 75: "K",
        76: "L", 77: "M", 78: "N", 79: "O", 80: "P", 81: "Q", 82: "R", 83: "S", 84: "T", 85: "U", 86: "V",
        87: "W", 88: "X", 89: "Y", 90: "Z", 97: "a", 98: "b", 99: "c", 100: "d", 101: "e", 102: "f", 103: "g",
        104: "h", 105: "i", 106: "j", 107: "k", 108: "l", 109: "m", 110: "n", 111: "o", 112: "p", 113: "q",
        114: "r", 115: "s", 116: "t", 117: "u", 118: "v",  119: "w", 120: "x", 121: "y", 122: "z"
    
    };
    
    let element = "";

    if(typeof arr == 'object'){

        for (let i = 0; i < arr.length; i++) {

            if (typeof linkUnicode[arr[i]] != "undefined") {

                element += linkUnicode[arr[i]];

            }
        }
    }
    return element;
};