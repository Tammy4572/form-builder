var theForm = document.querySelector('form');

for(var i = 0; i < formData.length; i++) {

  var newInput = document.createElement('type');
  newInput.innerHTIML = formData[i].type;
  console.log(newInput);
  theForm.appendChild(newInput);

  var newLabel = document.createElement('label');
  newLabel.innerHTML = formData[i].label;
  console.log(newLabel.textContent);
  theForm.appendChild(newLabel);

  var newId = document.createElement('id');
  newId.innerHTML = formData[i].id;
  console.log(newId.textContent);
  theForm.appendChild(newLabel);

  var newIcon = document.createElement('icon');
  newIcon.innerHTML = formData[i].icon;
  console.log(newIcon);
  theForm.appendChild(newIcon);

  var newOptions = document.createElement('options');
  newOptions.innerHTML = formData[i].options;
  console.log(newOptions);
  theForm.appendChild(newOptions);
}




var body = document.querySelector('body');
var children = body.children;
var div = document.createElement("div");
document.body.appendChild(div);
for(var x = 0 ; x < children.length ; x++){
    console.log(children[x]);
}
