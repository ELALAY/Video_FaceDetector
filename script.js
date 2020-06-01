//script.js
const video = document.getElementById('video')

Promise.all([
    faceapi.nets.TinyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandMark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models')
])

function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

//startVideo()

video.addEventListener('play', () =>{
    console.log('cwdkjc')
})
