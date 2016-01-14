var album;
var artista;
var botonEditarPerfil;
var cabeceraEscritorio;
var cambiarPassword;
var cancion;
var crearCuenta;
var edit;
var editarPerfil;
var formularioComparte;
var listadoAlbum;
var listas;
var login;
var menu;
var menuEmergente;
var menuPlaylist;
var misListas;
var noListasPropias;
var noSiguiendoListas;
var paginaInicio;
var perfil;
var playlist;
var playlistAbierta;
var search;
var siguiendoListas;
var topHits;

function iniciar(){
	album = document.getElementById("album");
	artista = document.getElementById("perfilArtista");
	botonEditarPerfil = document.getElementById("botonEditarPerfil");
	cabeceraEscritorio = document.getElementById("cabeceraEscritorio");
	cambiarPassword = document.getElementById("cambiarPassword");
	cancion = document.getElementById("cancion");
	crearCuenta = document.getElementById("crearCuenta");
	edit = document.getElementsByClassName("edit");
	editarPerfil = document.getElementById("editarPerfil");
	formularioComparte = document.getElementById("formularioComparte");
	listadoAlbum = document.getElementById("listadoAlbum");
	listas = document.getElementById("listas");
	login = document.getElementById("logIn");
	menu = document.getElementById("menu");
	menuEmergente = document.getElementById("menuEmergente");
	menuPlaylist = document.getElementById("menuPlaylist");
	misListas = document.getElementById("misListas");
	noListasPropias = document.getElementById("noListasPropias");
	noSiguiendoListas = document.getElementById("noSiguiendoListas");
	paginaInicio = document.getElementById("paginaInicio");
	perfil = document.getElementById("perfil");
	playlist = document.getElementById("playlists");
	playlistAbierta = document.getElementById("playlistAbierta");
	search = document.getElementById("search");
	siguiendoListas = document.getElementById("siguiendoListas");
	topHits = document.getElementById("topHits");
}

function verLogin(){
	login.classList.remove("oculto");
	crearCuenta.classList.add("oculto");
}
function verCrearCuenta(){
	crearCuenta.classList.remove("oculto");
	login.classList.add("oculto");
}
function verTopHits(){
	album.classList.add("oculto");
	artista.classList.add("oculto");
	cancion.classList.add("oculto");
	menuEmergente.classList.add("oculto");
	paginaInicio.classList.add("oculto");
	perfil.classList.add("oculto");
	playlist.classList.add("oculto");
	playlistAbierta.classList.add("oculto");
	search.classList.add("oculto");
	topHits.classList.remove("oculto");
	// menu.style.display="block";
	// cabeceraEscritorio.style.display="block";
}
function verMenuEmergente(){
	menuEmergente.classList.remove("oculto");
}
function verPerfil(){
	album.classList.add("oculto");
	artista.classList.add("oculto");
	cancion.classList.add("oculto");
	menuEmergente.classList.add("oculto");
	perfil.classList.add("oculto");
	perfil.classList.remove("oculto");
	playlist.classList.add("oculto");
	playlistAbierta.classList.add("oculto");
	search.classList.add("oculto");
	topHits.classList.add("oculto");
}
function verEditarPerfil(){
	edit[0].classList.remove("oculto");
	edit[1].classList.remove("oculto");
	edit[2].classList.remove("oculto");
	editarPerfil.classList.remove("oculto");
	listas.classList.add("oculto");
}
function volverPerfil(){
	edit[0].classList.add("oculto");
	edit[1].classList.add("oculto");
	edit[2].classList.add("oculto");
	listas.classList.remove("oculto");
	botonEditarPerfil.classList.remove("oculto");
	editarPerfil.classList.add("oculto");
	cambiarPassword.classList.add("oculto");
}
function verPlaylist(){
	artista.classList.add("oculto");
	cancion.classList.add("oculto");
	album.classList.add("oculto");
	menuEmergente.classList.add("oculto");
	paginaInicio.classList.add("oculto");
	perfil.classList.add("oculto");
	playlist.classList.remove("oculto");
	playlistAbierta.classList.add("oculto");
	search.classList.add("oculto");
	topHits.classList.add("oculto");
}
function verPlaylistAbierta(){
	playlistAbierta.classList.remove("oculto");
	playlist.classList.add("oculto");
	artista.classList.add("oculto");
	cancion.classList.remove("oculto");
	menuEmergente.classList.add("oculto");
	paginaInicio.classList.add("oculto");
	perfil.classList.add("oculto");
	search.classList.add("oculto");
	topHits.classList.add("oculto");
}
function verAlbum(){
	album.classList.remove("oculto");
	artista.classList.add("oculto");
	cancion.classList.add("oculto");
	menuEmergente.classList.add("oculto");
	paginaInicio.classList.add("oculto");
	perfil.classList.add("oculto");
	playlist.classList.add("oculto");
	playlistAbierta.classList.add("oculto");
	search.classList.add("oculto");
	topHits.classList.add("oculto");
}
function verCancion(){
	album.classList.remove("oculto");
	artista.classList.add("oculto");
	cancion.classList.remove("oculto");
	menuEmergente.classList.add("oculto");
	paginaInicio.classList.add("oculto");
	perfil.classList.add("oculto");
	playlist.classList.add("oculto");
	playlistAbierta.classList.add("oculto");
	search.classList.add("oculto");
	topHits.classList.add("oculto");
}
function verArtista(){
	album.classList.add("oculto");
	artista.classList.remove("oculto");
	cancion.classList.add("oculto");
	menuEmergente.classList.add("oculto");
	paginaInicio.classList.add("oculto");
	perfil.classList.add("oculto");
	playlist.classList.add("oculto");
	playlistAbierta.classList.add("oculto");
	search.classList.add("oculto");
	topHits.classList.add("oculto");
}
function verSearch(){
	album.classList.add("oculto");
	artista.classList.add("oculto");
	cancion.classList.add("oculto");
	menuEmergente.classList.add("oculto");
	paginaInicio.classList.add("oculto");
	perfil.classList.add("oculto");
	playlist.classList.add("oculto");
	playlistAbierta.classList.add("oculto");
	search.classList.remove("oculto");
	topHits.classList.add("oculto");
}
function verMenuPlaylist(){
	menuPlaylist.classList.remove("oculto");
}
function ocultarMenuPlaylist(){
	menuPlaylist.classList.add("oculto");
}
function verFormularioComparte(){
	formularioComparte.classList.remove("oculto");
}
function ocultarFormularioComparte(){
	formularioComparte.classList.add("oculto");
}
function verMisListas(){
	misListas.classList.remove("oculto");
	noListasPropias.classList.add("oculto");
	noSiguiendoListas.classList.add("oculto");
	siguiendoListas.classList.add("oculto");
}
function verSiguiendoListas(){
	misListas.classList.add("oculto");
	noListasPropias.classList.add("oculto");
	noSiguiendoListas.classList.add("oculto");
	siguiendoListas.classList.remove("oculto");
}
function verNoListasPropias(){
	misListas.classList.add("oculto");
	noListasPropias.classList.remove("oculto");
	noSiguiendoListas.classList.add("oculto");
	siguiendoListas.classList.add("oculto");
}
function verNoSiguiendoListas(){
	misListas.classList.add("oculto");
	noListasPropias.classList.add("oculto");
	noSiguiendoListas.classList.remove("oculto");
	siguiendoListas.classList.add("oculto");
}
function ocultarBotonEditarPerfil(){
	botonEditarPerfil.classList.add("oculto");
}
function verCambiarPassword(){
	cambiarPassword.classList.remove("oculto");
	editarPerfil.classList.add("oculto");
}
function alerta(){
	alert("Ehhh que pasa??");
}