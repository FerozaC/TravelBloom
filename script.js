const destinations = {
    beach: {
      title: "Beach Recommendations",
      places: [
        {
          name: "Maldives Paradise",
          image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=250&q=80",
        },
        {
          name: "Bali Sunset Beach",
          image: "https://images.unsplash.com/photo-1518544866330-95a2ab6dcf0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=250&q=80",
        },
      ],
    },
    temple: {
      title: "Temple Recommendations",
      places: [
        {
          name: "Angkor Wat, Cambodia",
          image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=250&q=80",
        },
        {
          name: "Borobudur, Indonesia",
          image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=250&q=80",
        },
      ],
    },
    japan: {
      title: "Japan Recommendations",
      places: [
        {
          name: "Mount Fuji & Cherry Blossoms",
          image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=250&q=80",
        },
        {
          name: "Kyoto Traditional Gardens",
          image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=250&q=80",
        },
      ],
    },
    mountain: {
      title: "Mountain Recommendations",
      places: [
        {
          name: "Swiss Alps Adventure",
          image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=250&q=80",
        },
        {
          name: "Himalayan Peaks",
          image: "https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=250&q=80",
        },
      ],
    },
    italy: {
      title: "Italy Recommendations",
      places: [
        {
          name: "Tuscany Countryside",
          image: "https://images.unsplash.com/photo-1496564203457-11bb12075d90?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=250&q=80",
        },
        {
          name: "Venice Canals",
          image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=250&q=80",
        },
      ],
    },
    thailand: {
      title: "Thailand Recommendations",
      places: [
        {
          name: "Bangkok Temples",
          image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=250&q=80",
        },
        {
          name: "Phuket Islands",
          image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=250&q=80",
        },
      ],
    },
  }
  

  function searchDestinations() {
    const searchInput = document.getElementById("searchInput")
    const searchTerm = searchInput.value.toLowerCase().trim()
    const recommendationsSection = document.getElementById("recommendationsSection")
    const recommendationsContent = document.getElementById("recommendationsContent")
  
    recommendationsContent.innerHTML = ""
  
    if (!searchTerm) {
      recommendationsSection.style.display = "none"
      return
    }
  
    recommendationsSection.style.display = "block"
  
    let foundDestination = null

    if (destinations[searchTerm]) {
      foundDestination = destinations[searchTerm]
    } else {
      for (const key in destinations) {
        if (key.includes(searchTerm) || searchTerm.includes(key)) {
          foundDestination = destinations[key]
          break
        }
      }
    }
  
    if (foundDestination) {
      displayDestinations(foundDestination)
    } else {
      displayNoResults(searchTerm)
    }
    recommendationsSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
  
  function displayDestinations(destination) {
    const recommendationsContent = document.getElementById("recommendationsContent")
  
    const html = `
          <div class="recommendations-content">
              <h2>${destination.title}</h2>
              <div class="destinations-grid">
                  ${destination.places
                    .map(
                      (place) => `
                      <div class="destination-card">
                          <img src="${place.image}" alt="${place.name}" loading="lazy">
                          <h3>${place.name}</h3>
                      </div>
                  `,
                    )
                    .join("")}
              </div>
          </div>
      `
  
    recommendationsContent.innerHTML = html
  }
  
  function displayNoResults(searchTerm) {
    const recommendationsContent = document.getElementById("recommendationsContent")
  
    const html = `
          <div class="no-results">
              <h2>No destinations found for "${searchTerm}"</h2>
              <p>Try searching for: beach, temple, mountain, Japan, Italy, or Thailand</p>
              <p>Or explore our featured destinations by clicking the suggestions above!</p>
          </div>
      `
  
    recommendationsContent.innerHTML = html
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput")
  
    if (searchInput) {
      searchInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          searchDestinations()
        }
      })
    }

    addSearchSuggestions()
  })
  
  function addSearchSuggestions() {
    const searchInput = document.getElementById("searchInput")
  
    if (searchInput) {
      searchInput.addEventListener("focus", () => {
        console.log("Search suggestions: beach, temple, Japan, Italy, Thailand, mountain")
      })
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname.split("/").pop() || "index.html"
    const navLinks = document.querySelectorAll(".nav-link")
  
    navLinks.forEach((link) => {
      const href = link.getAttribute("href")
      if (href === currentPage || (currentPage === "" && href === "index.html")) {
        link.classList.add("active")
      } else {
        link.classList.remove("active")
      }
    })
  })
  
 
  function showLoadingAnimation() {
    const recommendationsContent = document.getElementById("recommendationsContent")
    recommendationsContent.innerHTML = `
          <div style="text-align: center; padding: 2rem;">
              <p>Searching for amazing destinations...</p>
          </div>
      `
  }
  
  
  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      searchDestinations,
      displayDestinations,
      displayNoResults,
    }
  }