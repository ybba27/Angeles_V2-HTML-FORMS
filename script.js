var slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n) {
  showSlide(slideIndex += n);
}

function currentSlide(n) {
  showSlide(slideIndex = n);
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("mySlide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function autoSlide() {
  plusSlides(1);
}

setInterval(autoSlide, 4000); 
document.querySelector('nav a[href="#slideshow"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('slideshow').scrollIntoView({ behavior: 'smooth' });
  });

  $(function() {
    $(".toggle").on("click", function() {
      if ($(".menu").hasClass("active")) {
        $(".menu").removeClass("active");
        $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
      } else {
        $(".menu").addClass("active");
        $(this).find("a").html("<ion-icon name='close-outline'></ion-icon>");
      }
    });
  });

  