const dropDowninputs = document.querySelectorAll(
  '.mol-d4e97117-4bf7-4516-92fa-54bb0abc40fb'
)

Array.prototype.slice.call(dropDowninputs).forEach((input) => {

    window.onload = (e) => {
        var url_string = window.location.href;
        var url = new URL(url_string);
        dropDowninputs.forEach((select) => {
            inputs = select.querySelectorAll('input');
            first_input = inputs[0];
            second_input = inputs[1];
            var url_value = url.searchParams.getAll(first_input.name).pop();
            if(url_value) {
                first_input.value = url_value;
                second_input.value = select.querySelectorAll('li[data-value="' + url_value + '"]')[0].innerHTML.replace("&amp;", "&");
            }
        })
    }

  window.onclick = (e) => {
    input.classList.remove('active')
  }
  input.querySelector('span').onclick = (e) => {
    input.classList.toggle('active')
    e.stopPropagation()
  }
  Array.prototype.slice.call(input.querySelectorAll('li')).forEach((li) => {
      inputs = input.querySelectorAll('input');
      first_input = inputs[0];
      second_input = inputs[1];
      if ( first_input.value === li.getAttribute('data-value')) {
      li.classList.add('selected')
    }
    li.onclick = (e) => {
      Array.prototype.slice.call(input.querySelectorAll('li')).forEach((li) => {
        li.classList.remove('selected')
      })
      li.classList.add('selected')
        inputs = input.querySelectorAll('input');
        first_input = inputs[0];
        second_input = inputs[1];
        first_input.value = li.getAttribute('data-value')
        second_input.value = li.innerText
      // input.querySelector('input').innerText = li.innerText
      input.classList.toggle('active')
    }
  })
})
