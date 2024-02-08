// Функція, що відкриває модальне вікно
function openModal() {
    document.getElementById('myModal').style.display = 'block';
  }
  
  // Функція, що закриває модальне вікно
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }
  
  // Функція для генерації та заповнення поля паролю
  function generateAndFillPassword() {
    // Викликаємо функцію генерації паролю з довжиною 10 символів
    const password = generateRandomPassword(10);
    // Заповнюємо поле паролю згенерованим паролем
    document.getElementById('password').value = password;
  }
  
  // Функція для генерації рандомного паролю
  function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
  
  // Функція для перемикання відображення/приховування паролю та зміни тексту кнопки
  function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const passwordVisibilityButton = document.querySelector('button');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordVisibilityButton.textContent = 'Приховати пароль';
    } else {
      passwordInput.type = 'password';
      passwordVisibilityButton.textContent = 'Показати пароль';
    }
  }
  
// Функція для реєстрації користувача
function registerUser() {
  // Отримання даних з форми
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Ваш код для відправки даних на сервер та обробки їх тут...
  // Наприклад, ви можете використати AJAX запит для відправки даних на сервер

  // Після успішної реєстрації встановлюємо текст повідомлення
  var registrationMessage = document.getElementById('registrationMessage');
  registrationMessage.textContent = 'Ви успішно зареєструвалися!';
  // Робимо повідомлення видимим
  registrationMessage.style.display = 'block';

  // Повертаємо false, щоб запобігти перезавантаженню сторінки
  return false;
}


  