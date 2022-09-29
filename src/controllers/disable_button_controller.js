import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["button", "link"]

  connect() {
    console.log("Hello from our first Stimulus controller")
  }

  disable() {
    // this.element.innerText = "Bingo!"
    // this.element.setAttribute("disabled", "")

    this.buttonTarget.innerText = "Bingo!"
    this.buttonTarget.setAttribute("disabled", "")
    this.linkTarget.classList.remove("d-none")
  }
}
