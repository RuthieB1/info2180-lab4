window.addEventListener('load', ()=>{
    let heading = document.querySelector("header h1");

    document.querySelector("button#btn").addEventListener("click", (event)=>{
        event.preventDefault();
        let searchVal = document.querySelector("input#searchField").value.replace(/[-&\/\\#,+()$@|~%!.'":;*?<>{}]/g,'');
        let resultDiv = document.querySelector("div#result");

        let cleanUrl = `http://localhost:8080/superheroes.php?query= ${searchVal}`.replace( /"[^-0-9+&@#/%?=~_|!:,.;\(\)]"/g,'');

        fetch(cleanUrl, {method : 'GET'})
        .then(resp => resp.text())
        .then(elements => {
            let h3Element = document.createElement("h3");
            let h3Text = document.createTextNode("RESULT");
            h3Element.appendChild(h3Text);
            let hrElement= document.createElement("hr");
            resultDiv.innerHTML = '';
            resultDiv.innerHTML = elements;
            resultDiv.prepend(h3Element, hrElement);
        })
    });

    document.querySelector("input#searchField").onblur = ()=>{
        querySelector("input#searchField").style.borderColor = "#FF3232";
    }

});