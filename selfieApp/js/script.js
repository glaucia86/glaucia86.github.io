// Abaixo segue todas as referências necessárias dos elementos que iremos necessitar:

var video 				= document.querySelector('#camera-stream'),
	image 				= document.querySelector('#snap'),
	start_camera 		= document.querySelector('#start-camera'),
	controls			= document.querySelector('.controls'),
	take_photo_btn  	= document.querySelector('#take-photo'),
	delete_photo_btn 	= document.querySelector('#delete-photo-btn'),
	download_photo_btn 	= document.querySelector('#download-photo'),
	error_message 		= document.querySelector('#error-message');

// O getUserMedia é usado para manipular a entrada da câmera.
// Alguns navegadores precisam de prefixo para que possamos cobrir todas as opções:

navigator.getMedia = ( navigator.getUserMedia ||
					   navigator.webkitGetUserMedia ||
					   navigator.mozGetUserMedia ||
					   navigator.msGetUserMedia);

if(!navigator.getMedia) {
	displayErrorMessage("Seu browser não tem suporte para o navigator.getUserMedia");
} else {
	// Solicita a câmera:
	navigator.getMedia(
		{
			video: true
		},

		// Callback - Sucesso:
		function(stream) {

			// Criará um objeto URL para o stream de video e irá
			// iniciar como src do nosso elemento video do HTML
			video.src = window.URL.createObjectURL(stream);

			// E depois irá dar um play no elemento video para mostrar o stream de video para o usuário:
			video.play();
			video.onplay = function() {
				showVideo();
			};
		},

		// Callback - Error:
		function(err) {
			displayErrorMessage("Ococrreu um erro ao acessar o stream de vídeo " + err.name, err);
		}
	);
}

// Navegadores de celulares não podem reproduzir video sem entrada do usuário.
// Com isso, iremos utilizar um botão para iniciar a app manualmente:
start_camera.addEventListener("click", function(e) {

	e.preventDefault();

	// Iniciar o video manualmente:
	video.play();
	showVideo();
});

take_photo_btn.addEventListener("click", function(e) {

	e.preventDefault();

	var snap = takeSnapshot();

	// Mostrar imagem:
	image.setAttribute('src', snap);
	image.classList.add("visible");

	// Ativar os botões: excluir e salvar:
	delete_photo_btn.classList.remove("disabled");
	download_photo_btn.classList.remove("disabled");

	//Definir o atributo href do botão de download para a URL:
	download_photo_btn.href = snap;

	video.pause();
});

delete_photo_btn.addEventListener("click", function(e) {

	e.preventDefault();

	// Esconder a imagem:
	image.setAttribute('src', "");
	image.classList.remove("visible");

	// Desabilitar os botões: excluir e salvar:
	delete_photo_btn.classList.add("disabled");
	download_photo_btn.classList.add("disabled");

	video.play();
});

function showVideo() {

	// Mostrar o stream de video e os controles:
	hiddenUI();
	video.classList.add("visible");
	controls.classList.add("visible");
}

function takeSnapshot() {

	// Aqui estamos usando um truque que envolve um elemento de tela oculta.
	var hidden_canvas = document.querySelector('canvas'),
		context = hidden_canvas.getContext('2d');

	var width = video.videoWidth,
		height = video.videoHeight;

	if(width && height) {

		// Configura uma tela com as mesmas dimensões do vídeo.
		hidden_canvas.width = width;
        hidden_canvas.height = height;

        // Make a copy of the current frame in the video on the canvas.
    context.drawImage(video, 0, 0, width, height);

    // Turn the canvas image into a dataURL that can be used as a src for our photo.
    return hidden_canvas.toDataURL('image/png');
	}
}

function displayErrorMessage(error_msg, error){
  error = error || "";
  if(error){
    console.log(error);
  }

  error_message.innerText = error_msg;

  hideUI();
  error_message.classList.add("visible");
}


function hideUI(){
  // Helper function for clearing the app UI.

  controls.classList.remove("visible");
  start_camera.classList.remove("visible");
  video.classList.remove("visible");
  snap.classList.remove("visible");
  error_message.classList.remove("visible");
}


