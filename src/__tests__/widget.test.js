import WidgetInputCard from '../widget';

test('widget render', () => {
  document.body.innerHTML = '<div class="container-widget"></div>';
  const container = document.querySelector('.container-widget');
  const elementWidget = new WidgetInputCard(container);
  elementWidget.setToDom();
  expect(container.innerHTML).toEqual(WidgetInputCard.renderForm);
});

test('widget check number', () => {
  document.body.innerHTML = '<div class="container-widget"></div>';
  const container = document.querySelector('.container-widget');
  const elementWidget = new WidgetInputCard(container);
  elementWidget.setToDom();
  elementWidget.elementInput.value = '4929411104860898';
  elementWidget.elementButton.click();
  expect(elementWidget.elementInput.classList.contains('error')).toEqual(true);
});

test('widget check system payment', () => {
  document.body.innerHTML = '<div class="container-widget"></div>';
  const container = document.querySelector('.container-widget');
  const elementWidget = new WidgetInputCard(container);
  elementWidget.setToDom();
  elementWidget.elementInput.value = '4929411104860898';
  const elementCard = document.querySelector('.visa');
  expect(elementCard.classList.contains('card-dis')).toEqual(false);
});
