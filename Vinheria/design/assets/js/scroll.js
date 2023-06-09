window.addEventListener('scroll', () => {
  const headerPage = document.querySelector('.header-page');
//   console.log(headerPage); 
// console.log(scrollY);
    headerPage.classList.toggle('active-scroll', window.scrollY > 100);

})