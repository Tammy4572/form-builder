(function(){
  'use strict'
  var formData = [
    {
      "type": "text",
      "label": "First Name",
      "id": "user-first-name",
      "icon": "fa-user",
      "options": []
    },
    {
      "type": "text",
      "label": "Last Name",
      "id": "user-last-name",
      "icon": "fa-user",
      "options": []
    },
    {
      "type": "email",
      "label": "Email Address",
      "id": "user-email",
      "icon": "fa-envelope",
      "options": []
    },
    {
      "type": "text",
      "label": "Current website url",
      "id": "user-website",
      "icon": "fa-globe",
      "options": []
    },
    {
      "type": "select",
      "label": "Select Language",
      "id": "user-language",
      "icon": "",
      "options": [
        {
          "label": "English",
          "value": "EN"
        },
        {
          "label": "French",
          "value": "FR"
        },
        {
          "label": "Spanish",
          "value": "SP"
        },
        {
          "label": "Chinese",
          "value": "CH"
        },
        {
          "label": "Japanese",
          "value": "JP"
        }
      ]
    },
    {
      "type": "textarea",
      "label": "Your Comment",
      "id": "user-comment",
      "icon": "fa-comments",
      "options": []
    },
    {
      "type": "tel",
      "label": "Mobile Number",
      "id": "user-mobile",
      "icon": "fa-mobile-phone",
      "options": []
    },
    {
      "type": "tel",
      "label": "Home Number",
      "id": "user-phone",
      "icon": "fa-phone",
      "options": []
    }
  ];

var body = document.querySelector('body');
var formHeading = document.createElement('div.wrapper');
var formNode = document.getElementById('signupform');
var header = document.createElement('div.header');

var webForm = document.querySelector('div.fields');

  for(var i = 0; i < formData.length; i++) {

    /*----label tag ----*/
    var newLabel = document.createElement('label');
    newLabel.setAttribute('for', formData[i].id);
    webForm.appendChild(newLabel);

    /*----div tag ----*/
    var fieldDiv = document.createElement('div');
    fieldDiv.setAttribute('class', 'fieldDiv');
    webForm.appendChild(fieldDiv);

    /*----span element ----*/
    var span = document.createElement('span');
    span.setAttribute('class', 'fa ' + formData[i].icon);
    fieldDiv.appendChild(span);

    /*----TEXT EMAIL PHONE INPUT ----*/
    if (formData[i].type === 'text' || formData[i].type === 'email' || formData[i].type === 'tel') {

      var formField = document.createElement('input');
      formField.setAttribute('type', formData[i].type);
      formField.setAttribute('id', formData[i].id);
      formField.setAttribute('name', formData[i].id);
      formField.placeholder = formData[i].label;
      fieldDiv.appendChild(formField);

    }/*---- SELECT DROPDOWN ----*/
      else if (formData[i].type === 'select') {
        var selectField = document.createElement('select');
        selectField.setAttribute('type', formData[i].type);
        selectField.setAttribute('id', formData[i].id);
        fieldDiv.appendChild(selectField);

        for (var x = 0; x < (formData[4].options).length; x++) {
            var selectOptions = document.createElement('option');
            selectOptions.textContent = (formData[4].options[x].label);
            selectOptions.value = (formData[4].options[x].value);
            selectField.appendChild(selectOptions);
        }
      }  /*---- TEXT AREA ----*/
      else if (formData[i].type === 'textarea') {
        var textArea = document.createElement('textarea');
        textArea.setAttribute('type', formData[i].type);
        textArea.setAttribute('id', formData[i].id);
        textArea.placeholder = formData[i].label;
        fieldDiv.appendChild(textArea);
      };
};
  var footer = document.createElement('div.footer');
  webForm.appendChild(footer);

  var submitBtn = document.createElement('button');
  submitBtn.setAttribute('id', 'submitButton');
  submitBtn.textContent = 'Submit Form';
  }());
