export function hideElement() {
  const ratingElements = document.querySelectorAll('.film-card__rating');

  for (const ratingElement of ratingElements) {
    ratingElement.classList.add('elem-isHidden');
  }
}

export function hideSpan() {
  const spanAll = document.querySelectorAll('.film-card__features-mark');

  spanAll.forEach((elem, index) => {
    if (
      elem.previousElementSibling.textContent === '' ||
      elem.nextElementSibling.textContent === ''
    ) {
      spanAll[index].innerHTML = ' ';
    } else {
      spanAll[index].innerHTML = ' |';
    }
  });
}
