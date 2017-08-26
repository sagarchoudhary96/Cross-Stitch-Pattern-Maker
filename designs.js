// Select color input
var colorPicker = document.getElementById('colorPicker');
var color = colorPicker.value;

// Select size input
var height = document.getElementById('input_height');
var width = document.getElementById('input_width');    

//reference to table 
 var table = document.getElementById('pixel_canvas');

// update the value of color
colorPicker.addEventListener("change",function() {
    color = this.value;
}, false);

// update cell color on click
function updateCellColor () {
    this.style.background  = color;
}

// When size is submitted by the user, call makeGrid()
var sizePicker = document.getElementById('sizePicker');
sizePicker.onsubmit = function(event) {
    event.preventDefault();
    makeGrid();
}

// make the grid
function makeGrid() {
    var row, col;
    table.innerHTML  = '';
    for (var i=0; i<height.value; i++) {
        row = table.insertRow(i);
        for (var j=0; j<width.value; j++) {
            col = row.insertCell(j);
            col.addEventListener('click', updateCellColor);
        }
    }  
}