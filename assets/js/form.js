
      const form = document.getElementById('contact-form');

      form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form);

        fetch('https://formsubmit.co/ajax/hisham319@hotmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(Object.fromEntries(formData))
        })
          .then(response => {
            if (response.ok) {
              alert('Thank you for your message!');
              form.reset();

              // Add contact data to JSON file
              const contactData = Object.fromEntries(formData);
              const jsonData = JSON.parse(localStorage.getItem('contactData') || '{"contacts": []}');
              jsonData.contacts.push(contactData);
              localStorage.setItem('contactData', JSON.stringify(jsonData));
            } else {
              throw new Error('Something went wrong.');
            }
          })
          .catch(error => {
            alert(error.message);
          });
      });
   