document.addEventListener('dragover', function(e){
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
});

document.addEventListener('drop', function(e){
    e.preventDefault();
    createMeshWithMaterial(e.dataTransfer.files[0].path);
    document.body.style.opacity = 1.0;
});

document.addEventListener('dragenter', function(e){
    e.preventDefault();
    document.body.style.opacity = 0.5;
});

document.addEventListener('dragleave', function(e){
    e.preventDefault();
    document.body.style.opacity = 1.0;
});