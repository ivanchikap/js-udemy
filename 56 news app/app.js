// Custom Http Module
function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}
// Init http module
const http = customHttp();

const newsService = (function() {
  const apiKey = '66eb64a469bd4f7285a97443cbf818fc';
  const apiUrl = 'https://newsapi.org/v2';

  return {
    topHeadlines(country = 'ua', cb) {
      http.get(`${apiUrl}/top-headlines?country=${country}&category=technology&apiKey=${apiKey}`, cb);
    },
    everything(query, cb) {
      http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb);
    }
  }
})();

//  init selects
document.addEventListener('DOMContentLoaded', function() {
  M.AutoInit();
  loadNews();
});

//Load news function
function loadNews() {
  newsService.topHeadlines('ua', onGetResponse);
}


//function on get response from server
function onGetResponse(err, res) {
  renderNews(res.articles);
}

//function render news
function renderNews(news) {
  const newsContainer = document.querySelector('.news-container .row');
  let fragment = '';

  news.forEach((newsItem) => {
    const el = newsTemplate(newsItem);
    fragment += el;
  });
  newsContainer.insertAdjacentHTML('afterbegin', fragment);
}

//news item template function
function newsTemplate({urlToImage, title, url, description}) {
    return `
      <div class="col s12"> 
          <div class="card">
              <div class="card-image">
                  <img src="${urlToImage}" alt="${urlToImage}">
                  <span class="card-title">${title || ''}</span>
              </div>
              <div class="card-content">
                <p>${description || ''}</p>
              </div>
              <div class="card-action">
                <a href="${url}">Read more</a>
              </div>
          </div>
      </div>
  `;
}