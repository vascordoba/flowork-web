var textWrapper = document.querySelector('.logo');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.logo .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.logo',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 10000
  });