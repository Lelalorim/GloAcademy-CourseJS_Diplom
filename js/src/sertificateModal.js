const sertificateModal = () => {
  console.log('модалка сертификата');

  const sertModal = document.createElement('div');
  sertModal.classList.add('sertificate-modal--opened', 'sertificate-modal');
  sertModal.innerHTML = `
    <div class="sertificate-img">
      <img src="images/documents/original/document4.jpg" class="img-responsive" alt=""> 
      <span title="Close" class="sertificate-modal__close">x</span></div>
    </div>  
  `;
  document.body.append(sertModal);

  let style = document.getElementById('js-sertificateModal');
    if (!style) {
      style = document.createElement('style');
      style.id = 'js-sertificateModal';
    }

  style.textContent = `
    .sertificate-modal--opened {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 9999;
    }
    .sertificate-modal {
        display: none;
    }
    .sertificate-modal__close {
      position: absolute;
      top: 5px;
      right: 5px;
      font-size: 36px;
      cursor: pointer;
    `;
  document.head.append(style);

};

export default sertificateModal;