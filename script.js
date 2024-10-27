var form = document.getElementById('formTemp');
var generatedElement = document.getElementById('generatedResume');
var generateShareableLinkBtn = document.getElementById('generateLinkBtn');
generateShareableLinkBtn.addEventListener('click', function (event) {
    var username = document.getElementById('UN').value;
    var shareablelink = getLinkFromValues();
    if (username) {
        var uniqueURL = "https://yourwebsite.com/user/".concat(encodeURIComponent(username));
        document.getElementById('shareablelink').innerHTML
            = "Your unique URL: <a href=\"".concat(shareablelink, "\" target=\"_blank\">").concat(uniqueURL, "</a>");
    }
});
function getQueryParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var shareablelink = getLinkFromValues();
    window.open(shareablelink, "_blank");
});
function getLinkFromValues() {
    var firstName = document.getElementById('FN').value;
    var lastName = document.getElementById('LN').value;
    var email = document.getElementById('EI').value;
    var birthdate = document.getElementById('DOB').value;
    var gender = document.getElementById('gender').value;
    var qualification = document.getElementById('qualification').value;
    var grade = document.getElementById('grade').value;
    var year = document.getElementById('passingYear').value;
    var exp = document.getElementById('Exp').value;
    var skills = document.getElementById('skills').value;
    var shareablelink = "./resume/myresume.html?firstName=".concat(encodeURIComponent(firstName), "&lastName=").concat(encodeURIComponent(lastName), "&email=").concat(encodeURIComponent(email), "&birthdate=").concat(encodeURIComponent(birthdate), "&gender=").concat(encodeURIComponent(gender), "&qualification=").concat(encodeURIComponent(qualification), "&grade=").concat(encodeURIComponent(grade), "&year=").concat(encodeURIComponent(year), "&exp=").concat(encodeURIComponent(exp), "&skills=").concat(encodeURIComponent(skills));
    return shareablelink;
}
