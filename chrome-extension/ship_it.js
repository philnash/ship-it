(function(){
  var button          = document.createElement('button'),
      wrapperDiv      = document.querySelector('.gh-header-actions'),
      correctPage     = !!document.querySelector('.js-comment-and-button'),
      handleClick     = function(e){
        var textarea = document.querySelector('#new_comment_field'),
            form     = document.querySelector('.js-new-comment-form');
        e.preventDefault();
        textarea.value = textarea.value + "Ship it! :shipit: ";
        form.submit();
        textarea.value = "";
      },
      key;

  if(correctPage){
    button.setAttribute('class', 'btn btn-second');
    button.appendChild(document.createTextNode("Ship it")); 
    button.addEventListener('click', handleClick, false);
    wrapperDiv.appendChild(button);
  }
})();
