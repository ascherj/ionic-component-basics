const courseNameInput = document.querySelector('#course-name-input');
const courseRatingInput = document.querySelector('#course-rating-input');
const addBtn = document.querySelector('#add-btn');
const myCoursesList = document.querySelector('#my-courses-list');
const alertCtrl = document.querySelector('ion-alert-controller');
const alertBtn = document.querySelector('button.alert-button');

const clear = () => {
    courseNameInput.value = '';
    courseRatingInput.value = '';
};

addBtn.addEventListener('click', () => {
    const courseName = courseNameInput.value;
    const courseRating = courseRatingInput.value;
    const newCourse = document.createElement('ion-item');

    if (!courseName || !courseRating || courseRating < 1 || courseRating > 5) {
        alertCtrl.create({
            header: 'Invalid inputs',
            message: 'Please enter a valid Course Name and Course Rating!',
            buttons: ['ok']
        }).then((alertElement) => {
            alertElement.present();
        });
        clear();
        return;
    }

    newCourse.innerHTML = `<strong>${courseName}</strong>&nbsp;-&nbsp;${courseRating}/5`;
    myCoursesList.appendChild(newCourse);
    clear();
});