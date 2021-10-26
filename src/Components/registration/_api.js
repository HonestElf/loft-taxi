export const sendUserRegistrationData = (body) => {
  fetch('https://loft-taxi.glitch.me/register', {
    method: 'POST',
    body: JSON.stringify(body),
  }).then((res) => res.json().then((data) => data));
};
