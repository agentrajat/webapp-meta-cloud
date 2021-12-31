document.getElementById('currentYear').innerText = new Date().getFullYear();

let demoFrom = document.getElementById('demoForm');
if (demoFrom) {
    demoFrom.onsubmit = function (form) {
        if (form.preventDefault) form.preventDefault();
        let data = new FormData(form.currentTarget);
        let object = {
            name: data.get('name'),
            company: data.get('company'),
            email: data.get('email')
        };
        alert("Request: " + JSON.stringify(object));
    };
}