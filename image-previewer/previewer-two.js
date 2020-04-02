const inputFile = document.getElementById('image-file');
inputFile.addEventListener('change', handleFileChange, false);

function handleFileChange(input) {
  const file = input.target.files[0];
  const imagePreviewerTwo = document.querySelector('.image-previewer-placeholder-two');
  const img = document.createElement('img');

  img.file = file;
  imagePreviewerTwo.appendChild(img);

  const preview = document.querySelector('.image-previewer-placeholder-two img');
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  reader.readAsDataURL(file);
}


