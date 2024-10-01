function dados(){
    const ds = [
        {id:"1",login:"ringo",senha:"1234"},
        {id:"2",login:"paul",senha:"1234"},
        {id:"3",login:"bobby",senha:"1234"},
]
    const json = JSON.stringify(ds)

    localStorage.setItem("banco", json)

}

function remover(){
    localStorage.removeItem("banco")
}
