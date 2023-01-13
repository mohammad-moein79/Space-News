class UiHTML {
  constructor() {
    // message
    this.messsageElement = document.querySelector(".message");
    this.result = document.querySelector(".result-news");
  }

  removeBeforNews() {
    this.result.innerHTML = "";
  }

  // print message for errors
  printMessage(nameError) {
    this.removeBeforNews();
    this.result.classList.remove("titel-new");

    // show message
    this.messsageElement.innerHTML = `${nameError}`;
    this.messsageElement.classList.add("showMessage");

    //remove message after 3secend
    setTimeout(() => {
      this.messsageElement.classList.remove("showMessage");
    }, 3000);
  }

  showNews(responseFromUrl) {
    this.result.classList.add("pad-result");

    responseFromUrl.forEach((news) => {
      let {
        description,
        publishedAt,
        url,
        source: { name },
      } = news;
      if (news.description !== null) {
        this.result.innerHTML += `
                    <div class="news">
                         <div class="titel-new">
                              ${description}
                         </div>
                         <div class="info">
                              <div class="info-top">
                                   <span class="primery">
                                        ${name}
                                   </span>
                                   <span class="primery">
                                        ${publishedAt}
                                   </span>
                              </div>
                              <div class="info-bottom">
                                   <a href="${url}" target="_blank">Read</a>
                              </div>
                         </div>
                    </div>
               `;
      }
    });
  }
}
