 const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
       const trigger = document.querySelectorAll(triggerSelector),
             modal = document.querySelector(modalSelector),
             close = document.querySelector(closeSelector);


           trigger.forEach(element => {
              element.addEventListener('click', (e) => {
                 if (e.target) {
                    e.preventDefault();
                 }
                 modal.style.display = 'block';
                 document.body.style.overflow = 'hidden';
              });
           });


        close.addEventListener('click', () => {
           modal.style.display = 'none';
           document.body.style.overflow = '';
        });
       modal.addEventListener('click', (e) => {
         if(e.target === modal){
            modal.style.display = 'none';
            document.body.style.overflow = '';
         }
       });
    }

    function showBindModal(select, time) {
       setTimeout(() => {
          document.querySelector(select).style.display = 'block';
          document.body.style.overflow = 'hidden';
       }, time);
    }

    const callEnginerBtn = document.querySelector('.popup_engineer_btn'),
       modalEnginer = document.querySelector('.popup_engineer'),
       modalEnginerClose = document.querySelector('.popup_engineer .popup_close');
      
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    //showBindModal('.popup', 60000);
 };

export default modals;