const buttons = document.querySelectorAll('.accordion button');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const content = document.getElementById(this.getAttribute('aria-controls')),
              expand = this.getAttribute('aria-expanded') === 'false';

        this.setAttribute('aria-expanded', expand);
        content.hidden = !expand;
    })
});
