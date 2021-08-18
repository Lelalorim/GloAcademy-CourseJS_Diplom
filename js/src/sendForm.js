const sendForm = () => {

  document.addEventListener('submit', event => {

    const target = event.target;
    const regForCheckPhone = /^\+?\d{8,16}$/;
    const regForCheckName = /[a-zа-я]/gi;
      
    event.preventDefault();
    const phoneInput = target.querySelector('input[placeholder*=телефон]');
    const nameInputs = target.querySelector('input[placeholder*=имя]');

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

    }else {

      return;
    }

  });

};

export default sendForm;