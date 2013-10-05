var Tiara_Keyboard = {
	currentKey: '',
	KeyConstant: {
		8: 'backspace',
		9: 'tab',
		13: 'return',
		16: 'shift',
		17: 'ctrl',
		18: 'alt',
		20: 'capslock',
		27: 'escape',
		32: ' ',
		33: 'pageup',
		34: 'pagedown',
		35: 'end',
		36: 'home',
		37: 'left',
		39: 'right',
		38: 'up',
		40: 'down',
		44: 'insert',
		48: '0',
		49: '1',
		50: '2',
		51: '3',
		52: '4',
		53: '5',
		54: '6',
		55: '7',
		56: '8',
		57: '9',
		65: 'a',
		66: 'b',
		67: 'c',
		68: 'd',
		69: 'e',
		70: 'f',
		71: 'g',
		72: 'h',
		73: 'i',
		74: 'j',
		75: 'k',
		76: 'l',
		77: 'm',
		78: 'n',
		79: 'o',
		80: 'p',
		81: 'q',
		82: 'r',
		83: 's',
		84: 't',
		85: 'u',
		86: 'v',
		87: 'w',
		88: 'x',
		89: 'y',
		90: 'z',
		96: 'kp0',
		97: 'kp1',
		98: 'kp2',
		99: 'kp3',
		100: 'kp4',
		101: 'kp5',
		102: 'kp6',
		103: 'kp7',
		104: 'kp8',
		105: 'kp9',
		106: 'kp*',
		107: 'kp+',
		109: 'kp-',
		110: 'kp.',
		111: 'kp/',
		112: 'f1',
		113: 'f2',
		114: 'f3',
		115: 'f4',
		116: 'f5',
		117: 'f6',
		118: 'f7',
		119: 'f8',
		120: 'f9',
		121: 'f10',
		122: 'f11',
		123: 'f12',
		144: 'numlock',
		186: ';',
		187: '=',
		188: ',',
		189: '-',
		190: '.',
		191: '/',
		192: '`',
		219: '[',
		220: '\\',
		221: ']',
		222: '\'',
		'S48': ')',
		'S49': '!',
		'S50': '@',
		'S51': '#',
		'S52': '$',
		'S53': '%',
		'S54': '^',
		'S55': '&',
		'S56': '*',
		'S57': '(',
		'S59': '(',
		'S186': ':',
		'S187': '+',
		'S188': '<',
		'S189': '_',
		'S190': '>',
		'S191': '?',
		'S192': '~',
		'S219': '{',
		'S220': '|',
		'S221': '}',
		'S222': '"'
	},
	
	isDown: function(key) {
		return (key === this.currentKey);
	}
};