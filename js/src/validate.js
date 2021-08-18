const validateInputs = () => {
  const nameInputs = document.querySelectorAll('input[placeholder*=имя]');
  for(const nameInput of nameInputs) nameInput.required = true;
  const phoneInputs = document.querySelectorAll('input[placeholder*=телефон]');
  for(const phoneInput of phoneInputs) phoneInput.required = true;

  document.addEventListener('input', event => {
    const target = event.target;
    console.log('target: ', target);
    const phoneNumber = /телефон/gi,
      nameInput = /имя/gi;

    if (phoneNumber.test(target.placeholder)) target.value = target.value.replace(/[^\d\+]/g, '');

		if (nameInput.test(target.placeholder)) target.value = target.value.replace(/[^a-zа-яё]/gi, '');
  });
};

export default validateInputs;