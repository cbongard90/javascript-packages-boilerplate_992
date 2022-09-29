import { initSortable } from "./plugins/init_sortable"
import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers"

window.Stimulus = Application.start()
const context = require.context("./controllers", true, /\.js$/)
Stimulus.load(definitionsFromContext(context))

const list = document.querySelector("#results")
initSortable();

const insertMovies = (data) => {
  data.Search.forEach((result) => {
    const movieTag = `<li class="list-group-item border-0">
      <img src="${result.Poster}" alt="" width="100">
    </li>`
    list.insertAdjacentHTML("beforeend", movieTag)
  })
}

const fetchMovies = (query) => {
  // fetch(`http://www.omdbapi.com/?s=${query}&apikey=483c29c9`)
  fetch(`./data.json`)
    .then(response => response.json())
    .then(data => insertMovies(data))
}

fetchMovies("harry potter") // on 1st page load
// fetchMovies("star wars")

const form = document.querySelector("#search-form")
form.addEventListener("submit", (event) => {
  event.preventDefault()
  list.innerHTML = ""
  const input = document.querySelector("#search-input")
  fetchMovies(input.value)
})
