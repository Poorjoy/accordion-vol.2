var items = document.querySelectorAll('.accordion__item'),
    btns = document.querySelectorAll('.accordion__btn');

for (var btn of btns) {
    if (btn.parentNode.classList.contains('active')) {
        btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.scrollHeight + 'px';
    }

    btn.addEventListener('click', function (event) {
        var currBtn = event.target;
        if (currBtn.parentNode.classList.contains('active')) {
            currBtn.parentNode.classList.remove('active');
            currBtn.nextElementSibling.style.maxHeight = null;
        } else {
            for (var item of items) {
                item.classList.remove('active');
                item.lastElementChild.style.maxHeight = null;
            }
            currBtn.parentNode.classList.add('active');
            currBtn.nextElementSibling.style.maxHeight = currBtn.nextElementSibling.scrollHeight + 'px';
        }
    });
}
