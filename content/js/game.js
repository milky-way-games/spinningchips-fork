const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

fetch("/content/json/games.json").then((res) => res.json()).then(data => {
    users = data.map(user=> {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const img = card.querySelector("[data-img]")

        // adding content into the query selected i.e header and body
        header.textContent = user.title
        //card.textContent = user.title
        card.href = user.link
        card.onClick = "setCookie(url, user.link, 365);"
        img.src = user.image
        userCardContainer.append(card)

        // return the result after successfull fetch
        return {title: user.title, Imgdescription: user.image,  description: user.link, element: card}
    });

})

searchInput.addEventListener('input', (e) => {
    const value = e.target.value
    users.forEach((user) => {
        const isVisible = user.title.toLowerCase().includes(value)
        user.element.classList.toggle('hide', !isVisible)
    })
})