//classs
const ui = new UiHTML()
const api = new BuildNewsApi()

// event listeners
eventListeners()
function eventListeners() {
     document.querySelector(".send").addEventListener("click", search)
}

//fnctions
async function search(e) {
     const nameNews = document.querySelector("#nameNews").value
     const country = document.querySelector("#country").value

     if (nameNews !== "" || country !== "") {
          let responseFromUrl = await api.BulidURL(nameNews, country)

          if (responseFromUrl.totalResults === 0) {
               ui.printMessage("in this category is not news")
          } else {
               ui.removeBeforNews()
               ui.showNews(responseFromUrl.articles)
          }

     } else {
          ui.printMessage("Please fill in a field.")
     }
}