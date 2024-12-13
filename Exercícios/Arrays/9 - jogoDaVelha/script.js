// Inicializa o tabuleiro como uma matriz 3x3
let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

// Variáveis de controle
let currentPlayer = "X"; // Jogador 1 começa como "X"
let gameActive = true;

// Função para exibir o tabuleiro
function printBoard() {
    console.log("\nTabuleiro:");
    board.forEach(row => console.log(row.map(cell => (cell === "" ? "-" : cell)).join(" | ")));
}

// Verifica vitória
function checkWin() {
    // Linhas e colunas
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) return true; // Linha
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) return true; // Coluna
    }

    // Diagonais
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) return true;
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) return true;

    return false;
}

// Verifica empate
function checkDraw() {
    return board.flat().every(cell => cell !== "");
}

// Faz uma jogada
function makeMove() {
    while (true) {
        let input = prompt(`Jogador ${currentPlayer} (${currentPlayer}), insira sua jogada (linha,coluna) [0-2]:`);
        if (!input) {
            console.log("Jogo cancelado!");
            return false;
        }

        let [row, col] = input.split(",").map(Number);

        // Valida a entrada
        if (row >= 0 && row <= 2 && col >= 0 && col <= 2 && board[row][col] === "") {
            board[row][col] = currentPlayer;
            return true;
        }

        console.log("Jogada inválida! Tente novamente.");
    }
}

// Reinicia o jogo
function resetGame() {
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    currentPlayer = "X";
    gameActive = true;
}

// Inicia o jogo
function startGame() {
    console.log("Bem-vindo ao Jogo da Velha!");
    printBoard();

    while (gameActive) {
        if (!makeMove()) break; // Interrompe se o jogador cancelar

        printBoard();

        // Verifica vitória
        if (checkWin()) {
            console.log(`Jogador ${currentPlayer} venceu!`);
            gameActive = false;
            break;
        }

        // Verifica empate
        if (checkDraw()) {
            console.log("Empate!");
            gameActive = false;
            break;
        }

        // Alterna jogador
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }

    console.log("Fim do jogo!");
}

// Chama o jogo
startGame();
