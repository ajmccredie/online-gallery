
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');
  const closeBtn = document.getElementById('close-modal');

  document.querySelectorAll('.thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      modalImg.src = thumb.dataset.img;
      modalTitle.textContent = thumb.dataset.title;
      modalDesc.textContent = thumb.dataset.description;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
