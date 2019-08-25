export const validationMessages = {
  'name': [
    { type: 'required', message: 'To pole jest wymagane' },
    { type: 'minlength', message: 'Imię musi mieć conajmniej jedną literę' },
    { type: 'maxlength', message: 'Imię nie może mieć więcej niż 25 liter' },
    { type: 'pattern', message: 'Imię może zawierać tylko litery' }
  ],
  'surname': [
    { type: 'required', message: 'To pole jest wymagane' },
    { type: 'minlength', message: 'Nazwisko musi mieć conajmniej jedną literę' },
    { type: 'maxlength', message: 'Nazwisko nie może mieć więcej niż 25 liter' },
    { type: 'pattern', message: 'Nazwisko może zawierać tylko litery' }
  ],
  'phone': [
    { type: 'required', message: 'To pole jest wymagane' },
    { type: 'minlength', message: 'Telefon musi mieć więcej niż 5 cyfr' },
    { type: 'maxlength', message: 'Telefon musi mieć mniej niż 25 cyfr' },
    { type: 'pattern', message: 'Telefon może składać się tylko z cyfr i spacji' }
  ],
  'email': [
    { type: 'required', message: 'To pole jest wymagane' },
    { type: 'pattern', message: 'Wprowadź poprawny adres e-mail' }
  ],
  'type': [
    { type: 'required', message: 'To pole jest wymagane' },
  ],
  'regDate': [
    { type: 'required', message: 'To pole jest wymagane' },
  ],
  'address': [
    { type: 'required', message: 'To pole jest wymagane' },
    { type: 'pattern', message: 'Adres może zawierać litery cyfry oraz ,' }
  ],
  'city': [
    { type: 'required', message: 'To pole jest wymagane' },
    { type: 'pattern', message: 'Miasto może zawierać tylko litery' }
  ],
  'postCode': [
    { type: 'required', message: 'To pole jest wymagane' },
    { type: 'pattern', message: 'Kod pocztowy może zawierać tylko cyfry i myślnik' }
  ],
  'password': [
    { type: 'required', message: 'To pole jest wymagane' }
  ],
  }