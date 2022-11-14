import { activities, weightFormula } from './data.js';

const maleSwitch = document.querySelector('#gender-male');
const femaleSwitch = document.querySelector('#gender-female');

const ageForm = document.querySelector('#age');
const heightForm = document.querySelector('#height');
const weightForm = document.querySelector('#weight');

const activitiesGroup = document.querySelector('.radios-group');

const submitButton = document.querySelector('.form__submit-button');
const resetButton = document.querySelector('.form__reset-button');

const result = document.querySelector('.counter__result');

const caloriesNorm = result.querySelector('#calories-norm');
const caloriesMinimal = result.querySelector('#calories-minimal');
const caloriesMaximal = result.querySelector('#calories-maximal');

let activityCoeff = 1.2;

resetButton.addEventListener('click', () => {
    maleSwitch.setAttribute('checked', 'true');
    femaleSwitch.removeAttribute('checked', 'true');

    ageForm.value = '';
    heightForm.value = '';
    weightForm.value = '';

    activities['minimal'].class.setAttribute('checked', 'true');
    activities['low'].class.removeAttribute('checked', 'true');
    activities['medium'].class.removeAttribute('checked', 'true');
    activities['high'].class.removeAttribute('checked', 'true');
    activities['maximal'].class.removeAttribute('checked', 'true');
    
    activityCoeff = 1.2;

    calcState();
    result.classList.add('counter__result--hidden');
});

const calcState = () => {
    if (ageForm.value !== '' && heightForm.value !== '' && weightForm.value !== '') {
        submitButton.removeAttribute('disabled', 'true');
    } else {
        submitButton.setAttribute('disabled', 'true');
    }
    if (ageForm.value !== '' || heightForm.value !== '' || weightForm.value !== '') {
        resetButton.removeAttribute('disabled', 'true');
    } else {
        resetButton.setAttribute('disabled', 'true');
    }
};

ageForm.addEventListener('input', () => {
    calcState();
});

heightForm.addEventListener('input', () => {
    calcState();
});

weightForm.addEventListener('input', () => {
    calcState();
});

activitiesGroup.addEventListener('change', (evt) => {
    switch (evt.target.id) {
        case activities['minimal'].id:
            activityCoeff = activities['minimal'].value;
            break;
        case activities['low'].id:
            activityCoeff = activities['low'].value;
            break;
        case activities['medium'].id:
            activityCoeff = activities['medium'].value;
            break;
        case activities['high'].id:
            activityCoeff = activities['high'].value;
            break;
        case activities['maximal'].id:
            activityCoeff = activities['maximal'].value;
            break;
    }
});

submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    const num = maleSwitch.checked ? 5 : -161;
    const res = Math.ceil((weightFormula(weightForm.value, heightForm.value, ageForm.value) + num) * activityCoeff);

    result.classList.remove('counter__result--hidden');

    caloriesNorm.textContent = res;
    caloriesMinimal.textContent = Math.ceil(res - res * 0.15);
    caloriesMaximal.textContent = Math.ceil(res + res * 0.15);
});
