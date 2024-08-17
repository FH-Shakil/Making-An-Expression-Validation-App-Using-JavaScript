function validateForm() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const postalCode = document.getElementById('postalCode').value;
    let result = '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/; 
    const postalCodeRegex = /^\d{5}$/; 

 
    if (!emailRegex.test(email)) {
        result += 'Invalid email format.<br>';
    }

    if (!phoneRegex.test(phone)) {
        result += 'Invalid phone number format.<br>';
    }

    if (!postalCodeRegex.test(postalCode)) {
        result += 'Invalid postal code format.<br>';
    }


    document.getElementById('result').innerHTML = result || 'All inputs are valid!';
}
