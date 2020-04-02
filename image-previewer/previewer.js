const imagePreviewer = document.querySelector(".image-previewer");

imagePreviewer.addEventListener('dragenter', dragenter, false);
imagePreviewer.addEventListener('dragover', dragover, false);
imagePreviewer.addEventListener('drop', drop, false);

function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
};

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
};

function drop(e) {
  e.stopPropagation();
  e.preventDefault();
  const file = e.dataTransfer.files[0];

  if (!file.type.startsWith('image/')) { 
    alert("only image file allowed");
    return;
  }

  handleImageFile(file);
};

function handleImageFile(file) {
  const placeholder = document.querySelector('.image-previewer-placeholder');

  if (placeholder) {
    imagePreviewer.removeChild(placeholder);
  }

  const img = document.createElement('img');
  img.file = file;
  imagePreviewer.appendChild(img);

  const preview = document.querySelector('.image-previewer img');
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  reader.readAsDataURL(file);
};
