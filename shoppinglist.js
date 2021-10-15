    // Add Additional Items
    var aside = document.querySelector('aside'),
        div = document.querySelector('div'),
        text = document.querySelector('input'),
        button = document.querySelector('button')
    text.type = 'text'
    text.id = 'input'
    button.type = 'button'
    button.setAttribute('data-button','outline')
    button.setAttribute('onclick','addItem(input.value)')
    div.appendChild(text)
    div.appendChild(button)
    aside.appendChild(div)

    function addItem(text){
      var div = document.querySelector('div'),
          input = document.getElementById('input')
      if (text !== ''){
        input.value = ''
        var label = document.createElement('label'),
            input = document.createElement('input'),
            span = document.createElement('span')
        input.type = 'checkbox'
        span.innerHTML = text
        label.appendChild(input)
        label.appendChild(span)
        div.parentNode.insertBefore(label,div)
      }
    }

