import { searchSystemPayment, checkNumberCard } from './validation';

export default class WidgetInputCard {
  constructor(element) {
    this.elementContainer = element;
    this.formSubmission = this.formSubmission.bind(this);
    this.checkSystemPayment = this.checkSystemPayment.bind(this);
  }

  static get renderForm() {
    return `
      <form class="input-card-number">
        <div class="line-cards">
          <img class="img-card amex" src="./images/amex.png">
          <img class="img-card diners" src="./images/diners.png">
          <img class="img-card discover" src="./images/discover.png">
          <img class="img-card jcb" src="./images/jcb.png">
          <img class="img-card mastercard" src="./images/mastercard.png">
          <img class="img-card mir" src="./images/mir.png">
          <img class="img-card visa" src="./images/visa.png">
        </div>
        <div class="line-input">
          <input class="cardNumber" name="inputNumber">
          <button class="button" type="submit">Click to Validate</button>
        </div>
      </form>
    `;
  }

  setToDom() {
    this.elementContainer.innerHTML = WidgetInputCard.renderForm;
    this.elementForm = this.elementContainer.querySelector('.input-card-number');
    this.elementInput = this.elementContainer.querySelector('.cardNumber');
    this.elementButton = this.elementContainer.querySelector('.button');
    this.elementInput.addEventListener('input', this.checkSystemPayment);
    this.elementForm.addEventListener('submit', this.formSubmission);
  }

  checkSystemPayment() {
    this.elementInput.classList.remove('error');
    const valueInput = this.elementInput.value;
    const systemClass = searchSystemPayment(valueInput);
    const elementsImg = this.elementContainer.querySelectorAll('.img-card');
    elementsImg.forEach((item) => {
      if (valueInput === '') {
        item.classList.remove('card-dis');
      } else {
        item.classList.add('card-dis');
        if (item.classList.contains(systemClass)) {
          item.classList.remove('card-dis');
        }
      }
    });
  }

  formSubmission(event) {
    event.preventDefault();
    const valueInput = this.elementInput.value;
    const result = checkNumberCard(valueInput);
    if (!result) {
      this.elementInput.classList.add('error');
    }
  }
}
