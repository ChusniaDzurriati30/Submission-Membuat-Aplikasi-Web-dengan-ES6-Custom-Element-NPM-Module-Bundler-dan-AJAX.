class ProductItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set product(product) {
    this._product = product;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 20px;
      box-sizing: border-box;
    }
    :host {
      display: block;
      margin-bottom: 18px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      overflow: hidden;
    }
    
    .fan-art-product {
      width: 100%;
      max-height: 600px;
      object-fit: cover;
      object-position: center;
    }
    
    .product-info {
      padding: 24px;
    }
    
    .product-info > h2 {
      font-weight: lighter;
    }
    
    .product-info > p {
      margin-top: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 10; /* number of lines to show */
    }
    </style>

    <img class="fan-art-product" src="${this._product.image}" alt="Fan Art"> 
    <div class="product-info">
      <h2>${this._product.title}</h2> 
      <p>${this._product.description}</p> 
    </div>
  `;
  }
}

customElements.define("product-item", ProductItem);
