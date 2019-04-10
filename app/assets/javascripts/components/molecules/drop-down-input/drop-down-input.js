const dropDowninputs = document.querySelectorAll(
    '.mol-d4e97117-4bf7-4516-92fa-54bb0abc40fb'
)

Array.prototype.slice.call(dropDowninputs).forEach((input) => {

    window.onclick = (e) => {
        input.classList.remove('active')
    }
    input.querySelector('span').onclick = (e) => {
        input.classList.toggle('active')
        e.stopPropagation()
    }
    Array.prototype.slice.call(input.querySelectorAll('li')).forEach((li) => {
        var inputs = input.querySelectorAll('input');
        var first_input = inputs[0];
        var second_input = inputs[1];
        if (first_input.value === li.getAttribute('data-value')) {
            li.classList.add('selected')
        }
        li.onclick = (e) => {
            Array.prototype.slice.call(input.querySelectorAll('li')).forEach((li) => {
                li.classList.remove('selected')
            })
            li.classList.add('selected')
            var inputs = input.querySelectorAll('input');
            var first_input = inputs[0];
            var second_input = inputs[1];
            first_input.value = li.getAttribute('data-value')
            second_input.value = li.innerText
            // input.querySelector('input').innerText = li.innerText
            input.classList.toggle('active')
        }
    })
})
