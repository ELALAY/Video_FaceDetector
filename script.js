//script.js
const video = document.getElementById('video')

Promise.all([
    faceapi.nets,tinyFaceDetector.loadFromUri('/models')
    faceapi.nets,.loadFromUri('/models')
    faceapi.nets,tinyFaceDetector.loadFromUri('/models')
    faceapi.nets,tinyFaceDetector.loadFromUri('/models')
])

function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

