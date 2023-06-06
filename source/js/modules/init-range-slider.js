const initRangeSlider = () => {
  const wrapper = document.querySelector('[data-range]');

  if (!wrapper) {
    return;
  }

  const number = wrapper.querySelector('[data-range-number]');
  const input = wrapper.querySelector('[data-range-input]');

  input.addEventListener('input', (evt) => {
    evt.preventDefault();

    number.innerText = input.value + ' %';
  });
};

export {initRangeSlider};
