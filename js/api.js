class BuildNewsApi {
     constructor() {
          this.apiKey = "apiKey=40b47565e75d4a208787e263640f8273"
     }

     async BulidURL(nameNews, country) {
          let url = "https://newsapi.org/v2/"

          if (country !== "") {
               url += "top-headlines?"
          } else {
               url += "everything?"
          }

          let editNameNews = nameNews.replace(" ", "+")

          if (nameNews !== "") {
               url += `q=${editNameNews}&`
          }
          if (country !== "") {
               url += `country=${country}&`
          }

          url += this.apiKey

          const response = await fetch(url)
          const responseApiJson = await response.json()

          return responseApiJson

     }


}