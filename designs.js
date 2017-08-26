// Select color input
var colorPicker = document.getElementById('colorPicker');
// Select size input
var height = document.getElementById('input_height');
var width = document.getElementById('input_width');
//reference to table 
var table = document.getElementById('pixel_canvas');
// update the value of color
function updateCellColor() {
    this.style.backgroundColor = colorPicker.value;
}

// to  store last rows and cols values
var old_row_num = 0, old_col_num = 0;

// When size is submitted by the user, call makeGrid()
var sizePicker = document.getElementById('sizePicker');
sizePicker.onsubmit = function (event) {
        event.preventDefault();
        makeGrid();
 }

// create new cells
function createCells(row, cols) {
    for (var i=0;i<cols;i++) {
        var cell = row.insertCell();
        cell.addEventListener('click', updateCellColor);
    }
}

// delete cells
function deleteCells(row, num) {
    for (var i=0; i<num; i++) {
        row.deleteCell(-1);
    }
}

//create new row
function createNewRow(cols) {
    var row = table.insertRow();
    createCells(row, cols);
}



// make the grid
function makeGrid() {
    var rows = height.value, row_diff = rows-old_row_num;
    var cols = width.value, col_diff = cols-old_col_num;
    
    // create or delete rows
    for (var i=0;i<Math.abs(row_diff);i++) {
       row_diff > 0 ? createNewRow(cols) : table.deleteRow(-1);
    }
    
    // update cells for old rows
    for (var i=0; i< old_row_num; i++) {
        col_diff > 0 ? createCells(table.rows[i], Math.abs(col_diff)) : deleteCells (table.rows[i], Math.abs(col_diff));
    }
    
    old_row_num = rows;
    old_col_num = cols;
    
}