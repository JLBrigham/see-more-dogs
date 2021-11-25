const template = document.createElement("template");
template.innerHTML = `
<style>
h1 {font-family: "Fredoka One", cursive;}
.heading-container {  display: flex;
    justify-content: center;}
</style>
<div class="heading-container">
<h1></h1>
</div>

`;

class PageTitle extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h1").innerText = this.getAttribute("title");
  }
}

window.customElements.define("page-title", PageTitle);
