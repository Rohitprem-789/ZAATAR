// NAVBAR SHADOW

window.addEventListener("scroll", function(){

  const navbar = document.querySelector(".navbar");

  navbar.classList.toggle("sticky", window.scrollY > 20);

});

// SEARCH BUTTON

const searchBtn = document.querySelector(".hero-search button");

if(searchBtn){

  searchBtn.addEventListener("click", () => {

    const value =
    document.querySelector(".hero-search input").value;

    if(value === ""){
      alert("Please enter a search term.");
    }

    else{
      alert("Searching for: " + value);
    }

  });

}

// BOOK TABLE

const bookBtns = document.querySelectorAll(".btn-outline");

bookBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    alert("Table booking feature coming soon!");

  });

});