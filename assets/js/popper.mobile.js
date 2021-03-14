const button = document.querySelector('#mobileElement');
const tooltip = document.querySelector('#mobileTip');

const popperInstance = Popper.createPopper(button, tooltip, {
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 8],
            },
        },
    ],
});

function show() {
    tooltip.setAttribute('data-show', '');

    // We need to tell Popper to update the tooltip position
    // after we show the tooltip, otherwise it will be incorrect
    popperInstance.update();
  }

  function hide() {
    tooltip.removeAttribute('data-show');
  }

  const showEvents = ['mouseenter', 'focus'];
  const hideEvents = ['mouseleave', 'blur'];

  showEvents.forEach(event => {
    button.addEventListener(event, show);
  });

  hideEvents.forEach(event => {
    button.addEventListener(event, hide);
  });