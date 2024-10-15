// Форма

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.forma');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.name', [{
      rule: 'minLength',
      value: 2,
      errorMessage: "Вы не ввели имя"
    },
    {
      rule: 'maxLength',
      value: 5,
      errorMessage: "Вы не ввели телефон"
    }
  ])
  
  .addField('.mail', [{
    rule: 'required',
    errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Вы не ввели e-mail',
    }
    ])
    
    .addField('.tel', [{
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Вы не ввели телефон',
    }]);
})

//Селект

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  placeholderValue: 'Материал',
  itemSelectText: '',

});

document.querySelector('.choices__item--selectable').textContent = "Материал";
