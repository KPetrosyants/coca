import IMask from 'imask';

export const useValidateForm = () => {
  const form = document.querySelector('.get-started__form');
  const formSubmitButton = document.querySelector('.button-form');
  const checkedInputs = form.querySelectorAll('.inputValidate');

  validatePhone();
  formChecked();

  function formChecked() {
    checkedInputs.forEach((input) => {
      if (input.value == '') return false;
    });
    return true;
  }

  function validatePhone() {
    const phoneInput = form.querySelector('#phone');
    const btn = form.querySelector('.button-form');

    const phoneMask = new IMask(phoneInput, {
      mask: '+{7}(000)000-00-00',
    });

    formSubmitButton.addEventListener('click', inputHandler);

    function inputHandler(e) {
      e.preventDefault();
      if (phoneMask.masked.isComplete && formChecked) {
        btn.classList.add('button-form--active');
        formRefresher();
        console.log(true);
      } else {
        btn.classList.remove('button-form--active');
        inputWarning();
        console.log(false);
      }
    }
  }

  function inputWarning() {
    checkedInputs.forEach((input) => {
      if (input.value == '') input.classList.add('input-warning');
    });
    alert('Заполните поля формы ');
  }
  function formRefresher() {
    checkedInputs.forEach((input) => {
      input.classList.remove('input-warning');
      input.value = '';
    });
  }

  //   btn.addEventListener('click', btnHandler);
  //   async function btnHandler(e) {
  //     e.preventDefault();
  //     return await fetch('send_msg.php', {
  //       method: 'POST',
  //       body: phoneMask.unmaskedValue,
  //     });
  //   }
};
