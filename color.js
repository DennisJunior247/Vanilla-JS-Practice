function divCreator(){
 
    let color = "#" + Math.floor(Math.random() * 16777215).toString(16)
    let createDiv = document.createElement("div")
    createDiv.style.width = "50px"
    createDiv.style.height = "50px"
    createDiv.style.backgroundColor = color
    createDiv.style.border = '1px solid black'
    document .body.appendChild(createDiv) 
}