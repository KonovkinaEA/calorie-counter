const activities = {
    'minimal': { class: document.querySelector("input[id='activity-minimal']"), id: 'activity-minimal', value: 1.2 },
    'low': { class: document.querySelector("input[id='activity-low']"), id: 'activity-low', value: 1.375 },
    'medium': { class: document.querySelector("input[id='activity-medium']"), id: 'activity-medium', value: 1.55 },
    'high': { class: document.querySelector("input[id='activity-high']"), id: 'activity-high', value: 1.725 },
    'maximal': { class: document.querySelector("input[id='activity-maximal']"), id: 'activity-maximal', value: 1.9 }
};

const weightFormula = (weight, height, age) => (10 * weight) + (6.25 * height) - (5 * age);

export {activities, weightFormula};
