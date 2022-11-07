window.addEventListener('load', ()=>{
    document.querySelector("button#btn").addEventListener("click", ()=>{
        fetch('http://localhost:8080/superheroes.php')
        .then(resp => resp.text())
        .then(data => alert(data))
    });
});
