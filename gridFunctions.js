

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

function removeRows(){
    let rows=document.getElementsByClassName("row")
    if (rows.length>0){
        rows[0].remove()
    }
}

function removeColumns(){
    let rows=document.getElementsByClassName("row")
    if(rows.length>=1){
        for(let i=0;i<rows.length;i++){
        let columns=rows[i].getElementsByClassName('col-sm border border-dark box white')
        if(columns.length>0){
        columns[0].remove()
        }
        if(columns.length==0){
            for(let i=rows.length-1;i>=0;i--){
                rows[i].remove()
            }
        }    
    }
}
}

function clickForColor(x) {
    let clickColor=document.querySelector('#clickColor').value
    x.style.backgroundColor = clickColor
}  
 
function changeWhiteToColors(){
    let allColor=document.querySelector('#allColor').value
    let boxes=document.getElementsByClassName('col-sm border border-dark box white')
    for(i=0;i<boxes.length;i++){
            if(boxes[i].style.backgroundColor==""){
            boxes[i].style.backgroundColor=allColor
            }
        }

}

function fillAllBoxes(){
    let fillAllValue=document.querySelector('#fillAll').value
    let boxes=document.getElementsByClassName('col-sm border border-dark box white')
    for(i=0;i<boxes.length;i++){
            boxes[i].style.backgroundColor=fillAllValue
        }
}


function dragColor(x){
    let dragC=document.querySelector("#drag")
    if(mouseClick==1){
    x.style.backgroundColor=dragC.value
    }
}

let mouseClick=0

document.querySelector(".mt-5.content").addEventListener("mousedown",function(e){
    e.preventDefault()
    mouseClick=1
    console.log(mouseClick)
})

document.querySelector(".mt-5.content").addEventListener("mouseup",function(){
    mouseClick=0
    console.log(mouseClick)
})
