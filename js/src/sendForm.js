const sendForm = () => {

  document.addEventListener('submit', event => {

    const target = event.target,
      phoneInput = target.querySelector('input[placeholder*=телефон]'),
      nameInputs = target.querySelector('input[placeholder*=имя]'),
      regForCheckPhone = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
      regForCheckName = /[a-zа-я]/gi;
      
    event.preventDefault();

    if (regForCheckPhone.test(phoneInput.value) && regForCheckName.test(nameInputs.value)) {
      const formData = new FormData(target);
      formData.set('calcTotal', localStorage.getItem('calcTotalValue'));
      const body = {};

      formData.forEach((val, key) => {
        body[key] = val;
      });
      
      target.reset();

      const postData = body => {
        return fetch('./server.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })

      };

      postData(body)
        .then((response) => {
          if (response.status !== 200) throw new Error('status network not 200');

        })
        .catch(error => {
          console.error(error);
        })
        .finally(()=>{

        })

    } else {
      alert('Введите коректные данные');
      return;
    }

  });

};

export default sendForm;