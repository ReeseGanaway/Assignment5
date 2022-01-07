function addRows(){
    let rows=document.getElementsByClassName('row')
    let origRow=rows[0]
    let newRow=origRow.cloneNode(true)
    document.querySelector(".mt-5.content").appendChild(newRow)
}
