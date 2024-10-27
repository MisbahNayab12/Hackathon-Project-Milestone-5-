const form = document.getElementById('formTemp') as HTMLFormElement;
const generatedElement = document.getElementById('generatedResume') as HTMLDivElement;
const generateShareableLinkBtn = document.getElementById('generateLinkBtn') as HTMLDivElement;


generateShareableLinkBtn.addEventListener('click', (event: Event)=> {
  const username = (document.getElementById('UN') as HTMLInputElement).value;
  const shareablelink = getLinkFromValues();

  if (username) {
    const uniqueURL = `https://yourwebsite.com/user/${encodeURIComponent(username)}`;
    (document.getElementById('shareablelink') as HTMLInputElement).innerHTML 
    = `Your unique URL: <a href="${shareablelink}" target="_blank">${uniqueURL}</a>`;
  }

});

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }


form.addEventListener('submit', (event: Event)=> {
    event.preventDefault();

    const shareablelink = getLinkFromValues();

    window.open(shareablelink, "_blank");

});

function getLinkFromValues()
{
  
  const firstName = (document.getElementById('FN') as HTMLInputElement).value;
  const lastName = (document.getElementById('LN') as HTMLInputElement).value;
  const email = (document.getElementById('EI') as HTMLInputElement).value;
  const birthdate = (document.getElementById('DOB') as HTMLInputElement).value;
  const gender = (document.getElementById('gender') as HTMLSelectElement).value;
  const qualification = (document.getElementById('qualification') as HTMLSelectElement).value;
  const grade = (document.getElementById('grade') as HTMLSelectElement).value;
  const year = (document.getElementById('passingYear') as HTMLSelectElement).value;
  const exp = (document.getElementById('Exp') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;

  const shareablelink = `./resume/myresume.html?firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&email=${encodeURIComponent(email)}&birthdate=${encodeURIComponent(birthdate)}&gender=${encodeURIComponent(gender)}&qualification=${encodeURIComponent(qualification)}&grade=${encodeURIComponent(grade)}&year=${encodeURIComponent (year)}&exp=${encodeURIComponent(exp)}&skills=${encodeURIComponent(skills)}`;

  return shareablelink;
}
