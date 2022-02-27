/*
 * Inizializza la griglia del Sudoku.
 */
function initGrid() {
    var element = "<div class='subGrid ";
    for (var i = 0; i < 9; i++) {
        if (i % 2 === 0) {
            $("<div class='subGrid odd' id='subGrid_" + i + "'></div>").appendTo("#grid");
        } else {
            $("<div class='subGrid even' id='subGrid_" + i + "'></div>").appendTo("#grid");
        }
    }
    var r;
    var c = 0;
    for (var k = 0; k < 9; k++) {
        if ((k % 3) == 0) {
            r = k;
        }
        for (var i = r; i < r + 3; i++) {
            for (var j = c; j < c + 3; j++) {
                $("<div class='cell' id='cell_" + i + "_" + j + "'><span></span><span></span></div>").appendTo("#subGrid_" + k);
            }
        }
        c = (c + 3) % 9;
    }
}

function loadFile(event) {
    alert("alert");
}

/*
 * Inizializza i bottoni del menù
 */
function initMenu() {
    $('#load').button({
        icons: {
            primary: "ui-icon-gear"
        }
    });
    $('#load').on("click", loadFile);
    $('#play').button({
        icons: {
            primary: "ui-icon-play"
        }
    });
}

/*
 * Init the grid and the menu
 */
function init() {
    initGrid();
    initMenu();
}

$(document).ready(init);