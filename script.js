const markAsReadBtn = document.querySelector('.header__button');
const headerCounter = document.querySelector('.header__counter');
const activePosts = document.getElementsByClassName('post--active');

headerCounter.textContent = activePosts.length;

markAsReadBtn.addEventListener('click', () =>
  [...activePosts].map((post) => {
    post.classList.remove('post--active');
    post.querySelector('.description__icon').classList.remove('description__icon--active');
    headerCounter.textContent = activePosts.length;
  })
);
