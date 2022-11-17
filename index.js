function chess(name, x1, y1, x2, y2) {
	switch (name) {
		case 'pawn': return x2 === x1 + 1 && y2 === y1 + 1 || y1 === y2 - 1 && x1 === x2 - 1;
		case 'rook': return x1 === x2 || y1 === y2;
		case 'bishop': return Math.abs(x1 - x2) === Math.abs(y1 - y2);
		case 'queen': return Math.abs(x1 - x2) === Math.abs(y1 - y2) || x1 === x2 || y1 === y2;
		case 'king': return Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1;
		case 'knight': return Math.abs(x1 - x2) === 1 && Math.abs(y1 - y2) === 2 || Math.abs(x1 - x2) === 2 && Math.abs(y1 - y2) === 1;
		default: return false;
	}

}

module.exports = chess;
