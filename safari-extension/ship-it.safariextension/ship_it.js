(function() {
  var imgSrc = '<img src="https://github.global.ssl.fastly.net/images/icons/emoji/shipit.png" ' +
            'width="20" heigh="20" align="absmiddle" alt=":shipit:" title=":shipit:"' +
            'class="emoji" />',
      button = document.createElement('button'),
      wrapperDiv = document.getElementById('js-new-comment-form-actions');

  button.setAttribute('class', 'button');
  button.innerHTML = imgSrc;
  button.onclick = function(e) {
    e.preventDefault();
    var textareas = document.getElementsByClassName('js-comment-field'),
        textarea = null;

    for(var i = 0; i < textareas.length; i++) {
      if('comment[body]' === textareas[i].getAttribute('name')) {
        textarea = textareas[i];
        break;
      }
    }

    if(textarea) {
      var parent = textarea.parentElement;
      textarea.innerHTML = ':shipit:';
      while('FORM' !== parent.tagName && 'BODY' !== parent.tagName) {
        parent = parent.parentElement;
      }
      if('FORM' === parent.tagName) {
        parent.submit();
      }
    }
  }

  wrapperDiv.appendChild(button);
})();