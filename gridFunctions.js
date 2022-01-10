
//Function to add rows
//Solves first user story
function addRows(){
    let rows=document.getElementsByClassName('row')
    if(rows.length==0){
        let newRow=document.createElement("div")
        newRow.className="row"
        let newCol=document.createElement("div")
        newCol.className='col-sm border border-dark box white'
        newCol.setAttribute('onclick','clickForColor(this)')
        newCol.setAttribute('onmouseover','dragColor(this)')
        newRow.appendChild(newCol)
        document.querySelector(".mt-5.content").appendChild(newRow)
    }
    else{
    let origRow=rows[0]
    let newRow=origRow.cloneNode(true)
    for(let i=0; i<newRow.getElementsByClassName('col-sm border border-dark box white').length;i++){
        newRow.getElementsByClassName('col-sm border border-dark box white')[i].setAttribute("style","background:''")
    }
    document.querySelector(".mt-5.content").appendChild(newRow)}
}


//Function to add coloumns
//Solves second user story
function addColumns(){
    
    let rows=document.getElementsByClassName("row")
    if(rows.length==0){
        addRows();
        return
    }
    for(let i=0;i<rows.length;i++){
    let columns=document.getElementsByClassName('col-sm border border-dark box white')
    if(columns.length==0){
        let newCol=document.createElement("div")
        newCol.className='col-sm border border-dark box white'
        newCol.setAttribute('onclick','clickForColor(this)')
        newCol.setAttribute('onmousemove','dragColor(this)')
        rows[i].appendChild(newCol)
    }
    else{
    let origColumn=columns[0]
    let newColumn=origColumn.cloneNode(true)
    newColumn.setAttribute("style", "backgroundColor:white")
    rows[i].appendChild(newColumn)}
    }
}


//Function to remove rows
//Solves third user story
function removeRows(){
    let rows=document.getElementsByClassName("row")
    if (rows.length>0){
        rows[rows.length-1].remove()
    }
}

//Function to remove columns
//Solves fourth user story
function removeColumns(){
    let rows=document.getElementsByClassName("row")
    if(rows.length>=1){
        for(let i=0;i<rows.length;i++){
        let columns=rows[i].getElementsByClassName('col-sm border border-dark box white')
        if(columns.length>0){
        columns[columns.length-1].remove()
        }
        if(columns.length==0){
            for(let i=rows.length-1;i>=0;i--){
                rows[i].remove()
            }
        }    
    }
}
}

//Function to change color of a box when clicked.
//Solves sixth user story
function clickForColor(x) {
    let clickColor=document.querySelector('#clickColor').value
    x.style.backgroundColor = clickColor
}  


//Function to change the colors of all white boxes
//Solves seventh user story
function changeWhiteToColors(){
    let allColor=document.querySelector('#allColor').value
    let boxes=document.getElementsByClassName('col-sm border border-dark box white')
    for(i=0;i<boxes.length;i++){
            if(boxes[i].style.backgroundColor==""){
            boxes[i].style.backgroundColor=allColor
            }
        }

}

//Function to fill all boxes with a selected color
//Solves eigth user story
function fillAllBoxes(){
    let fillAllValue=document.querySelector('#fillAll').value
    let boxes=document.getElementsByClassName('col-sm border border-dark box white')
    for(i=0;i<boxes.length;i++){
            boxes[i].style.backgroundColor=fillAllValue
        }
}

//Function to change color of box if the mouse is clicked and dragged over it
//Solves 10th user story
function dragColor(x){
    let dragC=document.querySelector("#drag")
    if(mouseClick==1){
    x.style.backgroundColor=dragC.value
    }
}


//Variable to keep track of whether or not mouse has been clicked
//Helps solves tenth user story
let mouseClick=0


//Event listeners to help keep track of if mouse is clicked or not
//Helps solve tenth user story
document.querySelector(".mt-5.content").addEventListener("mousedown",function(e){
    e.preventDefault()
    mouseClick=1
    console.log(mouseClick)
})

document.querySelector(".mt-5.content").addEventListener("mouseup",function(){
    mouseClick=0
    console.log(mouseClick)
})
