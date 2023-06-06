import WidgetInputCard from './widget';

document.addEventListener('DOMContentLoaded', () => {
  const elementWidget = new WidgetInputCard(document.querySelector('.container-widget'));
  elementWidget.setToDom();
});
