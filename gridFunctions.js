function addRows(){
    let rows=document.getElementsByClassName('row')
    if(rows.length==0){
        let newRow=document.createElement("div")
        newRow.className="row"
        let newCol=document.createElement("div")
        newCol.className='col-sm border border-dark box white'
        newRow.appendChild(newCol)
        document.querySelector(".mt-5.content").appendChild(newRow)
    }
    else{
    let origRow=rows[0]
    let newRow=origRow.cloneNode(true)
    document.querySelector(".mt-5.content").appendChild(newRow)}
}

function addColumns(){
    
    let rows=document.getElementsByClassName("row")
    for(let i=0;i<rows.length;i++){
    let columns=document.getElementsByClassName('col-sm border border-dark box white')
    if(columns.length==0){
        let newCol=document.createElement("div")
        newCol.className='col-sm border border-dark box white'
        rows[i].appendChild(newCol)
    }
    else{
    let origColumn=columns[0]
    let newColumn=origColumn.cloneNode(true)
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
    if(rows.length>0){
    for(let i=0;i<rows.length;i++){
    let columns=rows[i].getElementsByClassName('col-sm border border-dark box white')
    if(columns.length>0){
    columns[0].remove()}
    }
}
}