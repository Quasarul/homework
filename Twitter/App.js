const formControls = document.querySelectorAll('.form-control');

formControls.forEach(function (control) {
    control.addEventListener('focusin', function () {
        formControls.forEach(control => control.classList.remove('active'));
        control.classList.add('active');
    });

    control.addEventListener('focusout', function () {
        control.classList.remove('active');
    });
});

console.log(formControls);
