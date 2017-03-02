// Referências a todo o elemento que precisaremos.

var video           	= document.querySelector('#camera-stream'),
    imagem           	= document.querySelector('#snap'),
    iniciar_camera    	= document.querySelector('#start-camera'),
    controles        	= document.querySelector('.controls'),
    tirar_foto_btn  	= document.querySelector('#take-photo'),
    excluir_foto_btn 	= document.querySelector('#delete-photo'),
    download_foto_btn 	= document.querySelector('#download-photo'),
    messagem_error 		= document.querySelector('#error-message');

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
				mostrarVideo();
			};
		},

		// Callback - Error:
		function(err) {
			displayErrorMessage("Ocorreu um erro ao acessar o stream de vídeo " + err.name, err);
		}
	);
}

// Browsers de celulares não podem reproduzir video sem entrada do usuário.
// Com isso, iremos utilizar um botão para iniciar a app manualmente:

iniciar_camera.addEventListener("click", function(e) {

	e.preventDefault();

	// Iniciar o video manualmente:
	video.play();
	mostrarVideo();
});

tirar_foto_btn.addEventListener("click", function(e) {

	e.preventDefault();

	var snap = tirarFoto();

	// Mostrar imagem:
	image.setAttribute('src', snap);
	image.classList.add("visible");

	// Ativar os botões: excluir e salvar:
	excluir_foto_btn.classList.remove("disabled");
	download_foto_btn.classList.remove("disabled");

	//Definir o atributo href do botão de download para a URL:
	download_foto_btn.href = snap;

	video.pause();
});

excluir_foto_btn.addEventListener("click", function(e) {

	e.preventDefault();

	// Esconder a imagem:
	image.setAttribute('src', "");
	image.classList.remove("visible");

	// Desabilitar os botões: excluir e salvar:
	excluir_foto_btn.classList.add("disabled");
	download_foto_btn.classList.add("disabled");

	video.play();
});

function mostrarVideo() {

	// Mostrar o stream de video e os controles:
	hideUI();
	video.classList.add("visible");
	controles.classList.add("visible");
}

function tirarFoto() {

	// Aqui estamos usando um truque que envolve um elemento de tela oculta.
	var esconder_canvas = document.querySelector('canvas'),
		context = esconder_canvas.getContext('2d');

	var width = video.videoWidth,
		height = video.videoHeight;

	if(width && height) {

		// Configura uma tela com as mesmas dimensões do vídeo.
		esconder_canvas.width = width;
        esconder_canvas.height = height;

    	context.drawImage(video, 0, 0, width, height);

    	return esconder_canvas.toDataURL('image/png');
	}
}

function displayErrorMessage(error_msg, error){
  error = error || "";
  if(error){
    console.log(error);
  }

  messagem_error.innerText = error_msg;

  hideUI();
  messagem_error.classList.add("visible");
}

// Função responsável por limpar a app.
function hideUI() {
  controles.classList.remove("visible");
  iniciar_camera.classList.remove("visible");
  video.classList.remove("visible");
  snap.classList.remove("visible");
  messagem_error.classList.remove("visible");
}


