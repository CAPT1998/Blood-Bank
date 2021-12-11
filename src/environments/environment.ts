// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   firebaseConfig: {
    apiKey: "AIzaSyCfieTRQCEf_exAYDHpOCKnR8KTutwJztU",
    authDomain: "blood-bank-2cf6d.firebaseapp.com",
    projectId: "blood-bank-2cf6d",
    storageBucket: "blood-bank-2cf6d.appspot.com",
    messagingSenderId: "600515161579",
    appId: "1:600515161579:web:3d61812b8b53eb475a7dae",
    measurementId: "${config.measurementId}"
  },

  CountryJson: [
    { name: 'Pakistan', dial_code: '+92', code: 'PK' },
    { name: 'Albania', dial_code: '+35', code: 'AL' },
    { name: 'Algeria', dial_code: '+213', code: 'DZ' },
    { name: 'AmericanSamoa', dial_code: '+1 684', code: 'AS' },
    { name: 'Andorra', dial_code: '+376', code: 'AD' },
    { name: 'Angola', dial_code: '+244', code: 'AO' },
    { name: 'Anguilla', dial_code: '+1 264', code: 'AI' },
    { name: 'Antigua and Barbuda', dial_code: '+1268', code: 'AG' },
    { name: 'Argentina', dial_code: '+54', code: 'AR' },
    { name: 'Armenia', dial_code: '+374', code: 'AM' },
    { name: 'Aruba', dial_code: '+297', code: 'AW' },
]
};
