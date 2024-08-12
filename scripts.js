document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.getElementById("carousel-inner");
    const loader = document.getElementById("quotes-loader");
  
    // Fetch quotes from the API
    fetch("https://smileschool-api.hbtn.info/quotes")
      .then((response) => response.json())
      .then((data) => {
        loader.style.display = "none"; // Hide loader
        data.forEach((quote, index) => {
          const isActive = index === 0 ? "active" : "";
          const carouselItem = `
            <div class="carousel-item ${isActive}">
              <div class="row mx-auto align-items-center">
                <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                  <img src="${quote.pic_url}" class="d-block align-self-center" alt="Profile Picture" />
                </div>
                <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                  <div class="quote-text">
                    <p class="text-white">« ${quote.text}</p>
                    <h4 class="text-white font-weight-bold">${quote.name}</h4>
                    <span class="text-white">${quote.title}</span>
                  </div>
                </div>
              </div>
            </div>`;
          carouselInner.insertAdjacentHTML("beforeend", carouselItem);
        });
      })
      .catch((error) => {
        console.error("Error fetching quotes:", error);
        loader.innerHTML = "Failed to load quotes.";
      });
});



$(document).ready(function () {
    // Show loader while fetching data
    $('#loader').show();
    $('#carouselExampleControls2').addClass('d-none');
  
    $.ajax({
      url: 'https://smileschool-api.hbtn.info/popular-tutorials',
      method: 'GET',
      success: function (data) {
        const carouselInner = $('#carousel-inner');
        data.forEach((tutorial, index) => {
          const activeClass = index === 0 ? 'active' : '';
          const cardHtml = `
            <div class="carousel-item ${activeClass}">
              <div class="row align-items-center mx-auto">
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center justify-content-md-end justify-content-lg-center">
                  <div class="card">
                    <img src="${tutorial.thumb_url}" class="card-img-top" alt="${tutorial.title}">
                    <div class="card-img-overlay text-center">
                      <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay">
                    </div>
                    <div class="card-body">
                      <h5 class="card-title font-weight-bold">${tutorial.title}</h5>
                      <p class="card-text text-muted">${tutorial['sub-title']}</p>
                      <div class="creator d-flex align-items-center">
                        <img src="${tutorial.author_pic_url}" alt="${tutorial.author}" width="30px" class="rounded-circle">
                        <h6 class="pl-3 m-0 main-color">${tutorial.author}</h6>
                      </div>
                      <div class="info pt-3 d-flex justify-content-between">
                        <div class="rating">
                          ${generateStars(tutorial.star)}
                        </div>
                        <span class="main-color">${tutorial.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `;
          carouselInner.append(cardHtml);
        });
  
        // Hide loader and show carousel
        $('#loader').hide();
        $('#carouselExampleControls2').removeClass('d-none');
      },
      error: function (error) {
        console.error('Error fetching popular tutorials:', error);
      }
    });
  
    // Function to generate stars based on rating
    function generateStars(starCount) {
      let starsHtml = '';
      for (let i = 1; i <= 5; i++) {
        starsHtml += i <= starCount ? '<img src="images/star_on.png" alt="star on" width="15px">' : '<img src="images/star_off.png" alt="star off" width="15px">';
      }
      return starsHtml;
    }
  });

  

  $(document).ready(function () {
    // Fetch quotes from the API
    $.ajax({
      url: "https://smileschool-api.hbtn.info/quotes",
      method: "GET",
      success: function (data) {
        // Remove loader
        $('.loader').remove();
  
        // Populate carousel with quotes
        data.forEach(function (quote, index) {
          const isActive = index === 0 ? 'active' : '';
          const quoteHtml = `
            <div class="carousel-item ${isActive}">
              <div class="row mx-auto align-items-center">
                <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                  <img
                    src="${quote.pic_url}"
                    class="d-block align-self-center"
                    alt="Carousel Pic ${index + 1}"
                  />
                </div>
                <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                  <div class="quote-text">
                    <p class="text-white">
                      « ${quote.text}
                    </p>
                    <h4 class="text-white font-weight-bold">${quote.name}</h4>
                    <span class="text-white">${quote.title}</span>
                  </div>
                </div>
              </div>
            </div>
          `;
          $('#quotesCarousel').append(quoteHtml);
        });
  
        // Re-initialize the carousel
        $('#carouselExampleControls').carousel();
      },
      error: function () {
        $('.loader').remove();
        $('#quotesCarousel').append(
          '<p class="text-white text-center">Failed to load quotes. Please try again later.</p>'
        );
      },
    });
  });


// Lazy Loading Images

  $('img').each(function () {
    $(this).attr('data-src', $(this).attr('src'));
    $(this).removeAttr('src');
  });
  
  function lazyLoad() {
    const threshold = $(window).scrollTop() + $(window).height();
    $('img[data-src]').each(function () {
      const imgTop = $(this).offset().top;
      if (imgTop < threshold) {
        $(this).attr('src', $(this).attr('data-src')).removeAttr('data-src');
      }
    });
  }
  
  $(window).on('scroll', lazyLoad);
  lazyLoad(); // Initial call


  //Auto-Rotate Carousel
  $('#carouselExampleControls').carousel({
    interval: 5000, // Rotate every 5 seconds
  });
  


  