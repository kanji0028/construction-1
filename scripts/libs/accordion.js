// document.addEventListener('DOMContentLoaded', () => {
//   const title = document.querySelectorAll('.js-accordion-title');
//   const contents = document.querySelectorAll('.ac-content')
//   for (let i = 0; i < title.length; i++) {
//     let titleEach = title[i];
//     // let content = titleEach.nextElementSibling;
//     titleEach.addEventListener('click', () => {
//       titleEach.classList.toggle('is-active');
//       // contents.classList.toggle('is-open');
//     });
//     for (let i = 0; i < contents.length; i++) {
//       let contentsEach = contents[i];
//       titleEach.addEventListener('click', () => {
//         contentsEach.classList.toggle('is-open');
//       })
//       console.log(contentsEach);
//     }
//   }
// });
document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelectorAll('.js-accordion-title');

  for (let i = 0; i < title.length; i++) {
    let titleEach = title[i];
    let content = titleEach.nextElementSibling;
    titleEach.addEventListener('click', () => {
      titleEach.classList.toggle('is-active');
      content.classList.toggle('is-open');
    });
  }
});