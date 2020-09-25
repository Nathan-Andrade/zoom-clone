
const videoGrid = document.getElementById("#video-grid");

// constante para criar um elemento e o mesmo será para o video ser mudo
const myVideo = document.createElement("video");
myVideo.muted = true;

// função para capitar e executar o video e o audio. E add outro vídeo
let myVideoStream
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
  myVideoStream = stream;
  addVideoStream(myVideo, stream)
})

// função para adicionar um video
function addVideoStream(video, stream) {
  video.srcObject = stream;
  video.addEventListener('loadedmetadata', () => {
    video.play();
  })
  videoGrid.append(video);
}