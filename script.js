//script.js
const video = document.getElementById('video')

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models')
]).then(startVideo)

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

video.addEventListener('play', () => {
    setInterval(async () => {
        const detections = await faceapi.detecAllFaces(video, 
            new faceapi.TinyFaceDetectorOptions())
                .withFaceLandmarks().withFaceExpressions()
        console.log(detections)
    }, 100)
})