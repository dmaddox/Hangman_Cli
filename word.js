// Word Constructor (word.js)
// Used to create an object representing the current word the user is attempting to guess. 
// This should contain word specific logic and data.
function Word() {
 this.word = "";
 this.wordBank = ["amber", "amethyst", "apricot", "aqua", "aquamarine", "auburn", "azure", "beige", "black", "blue", "bronze", "brown", "buff", "cardinal", "carmine", "celadon", "cerise", "cerulean", "charcoal", "chartreuse", "chocolate", "cinnamon", "color", "complementary", "copper", "coral", "cream", "crimson", "cyan", "dark", "denim", "ebony", "ecru", "eggplant", "emerald", "fuchsia", "gold", "goldenrod", "gray", "green", "grey", "hue", "indigo", "ivory", "jade", "jet", "khaki", "lavender", "lemon", "light", "lilac", "lime", "magenta", "mahogany", "maroon", "mauve", "mustard", "ocher", "olive", "orange", "orchid", "pale", "pastel", "peach", "periwinkle", "persimmon", "pewter", "pink", "primary", "puce", "pumpkin", "purple", "rainbow", "red", "rose", "ruby", "russet", "rust", "saffron", "salmon", "sapphire", "scarlet", "secondary", "sepia", "shade", "shamrock", "sienna", "silver", "spectrum", "slate", "tan", "tangerine", "taupe", "teal", "terracotta", "thistle", "tint", "tomato", "topaz", "turquoise", "ultramarine", "umber", "vermilion", "violet", "viridian", "wheat", "white", "wisteria", "yellow"]; 
 this.newWord = function() {
 	var index = Math.floor(Math.random() * this.wordBank.length)
 	this.word = this.wordBank[index];
 };
};


module.exports = Word;