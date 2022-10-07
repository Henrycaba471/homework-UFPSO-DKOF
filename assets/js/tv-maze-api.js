const d = document,
    $shows = d.getElementById("shows"),
    $template = d.getElementById("show-template").content,
    $fragment = d.createDocumentFragment();

    //modificando
    (async function(){
        let fetchAleatorio = ["batman","thor","iron man","arc","apo","ad","he","re","su","lo","jo","cap"],
        random = Math.round(Math.random()*11);
        console.log(random);
        let query = fetchAleatorio[random],
                    api = `https://api.tvmaze.com/search/shows?q=${query}`,
                    res = await fetch(api),
                    json = await res.json();
                console.log(api, res, json);
                if (!res.ok) throw {
                    status: res.status,
                    statusText: res.statusText
                }
                if (json.length === 0) {
                    $shows.innerHTML = `<h2>No se encontraron resultados para ${query}</h2>`;
                } else {
                    json.forEach(el => {
                        $template.querySelector("h3").textContent = el.show.name;
                        $template.querySelector("div").innerHTML = el.show.summary ? el.show.summary : "Sin descripción";
                        $template.querySelector("img").src = el.show.image ? el.show.image.medium : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
                        $template.querySelector("img").alt = el.show.name;
                        $template.querySelector("span").textContent = `Genero: ${el.show.genres}`;
                        $template.querySelector("a").href = el.show.url ? el.show.url : "#";
                        $template.querySelector("a").target = el.show.url ? "_blank" : "_self";
                        $template.querySelector("a").textContent = el.show.url ? "Ver más" : "";
                        let $clone = d.importNode($template, true);
                        $fragment.appendChild($clone);
                    });
                    $shows.innerHTML = "";
                    $shows.appendChild($fragment);
                }
    })();
    //termina modificacion

d.addEventListener("keypress", async e => {

    if (e.target.matches("#search")) {
        //console.log(e.key);
        if (e.key === "Enter") {
            try {
                $shows.innerHTML = `<img class="loader" src="assets/resources/puff.svg" alt="Cargando...">`;
                let query = e.target.value.toLowerCase(),
                    api = `https://api.tvmaze.com/search/shows?q=${query}`,
                    res = await fetch(api),
                    json = await res.json();
                console.log(api, res, json);
                if (!res.ok) throw {
                    status: res.status,
                    statusText: res.statusText
                }
                if (json.length === 0) {
                    $shows.innerHTML = `<h2>No se encontraron resultados para ${query}</h2>`;
                } else {
                    json.forEach(el => {
                        $template.querySelector("h3").textContent = el.show.name;
                        $template.querySelector("div").innerHTML = el.show.summary ? el.show.summary : "Sin descripción";
                        $template.querySelector("img").src = el.show.image ? el.show.image.medium : "http://static.tvmaze.com/images/no-img/no-img-portrait-text.png";
                        $template.querySelector("img").alt = el.show.name;
                        $template.querySelector("span").textContent = `Genero: ${el.show.genres}`;
                        $template.querySelector("a").href = el.show.url ? el.show.url : "#";
                        $template.querySelector("a").target = el.show.url ? "_blank" : "_self";
                        $template.querySelector("a").textContent = el.show.url ? "Ver más" : "";
                        let $clone = d.importNode($template, true);
                        $fragment.appendChild($clone);
                    });
                    $shows.innerHTML = "";
                    $shows.appendChild($fragment);
                }
            } catch (error) {
                console.log(error);
                let message = error.statusText || "Ocurrio un error";
                $shows.innerHTML = `<p>Error ${error.status}: ${message}</p>`;
            }
        }
    }
});