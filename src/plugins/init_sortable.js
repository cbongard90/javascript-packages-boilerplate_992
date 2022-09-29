// src/plugins/init_sortable.js
import Sortable from "sortablejs";

const list = document.querySelector("#results");

const initSortable = () => {
  Sortable.create(list, {
    ghostClass: "ghost",
    animation: 500,
    onEnd: (event) => {
      alert(`${event.oldIndex} moved to ${event.newIndex}`)
    }
  })
}

export { initSortable };
