
interface VideoPlayerElements {
    videoPlayer:HTMLVideoElement
    playButton:HTMLButtonElement
    stopButton:HTMLButtonElement


}
interface VideoPlayerProtocol {
    playToglle():void;
    stop(): void ;
    inciarEventos(): void;

}
export default class VideoPlayer implements VideoPlayerProtocol {
    private videoPlayer:HTMLVideoElement
    private playButton:HTMLButtonElement
    private stopButton:HTMLButtonElement

    constructor(VideoPlayerElements: VideoPlayerElements){
        this.videoPlayer = VideoPlayerElements.videoPlayer
        this.playButton = VideoPlayerElements.playButton
        this.stopButton = VideoPlayerElements.stopButton
    }
    inciarEventos(): void {
        this.playButton.addEventListener("click", () =>{
            this.playToglle()
        })
        this.stopButton.addEventListener("click", () =>{
            this.videoPlayer.pause();
            this.videoPlayer.currentTime = 0
        })
    }
    playToglle(): void {
        if( this.videoPlayer.paused){
            this.videoPlayer.play()
            this.playButton.innerHTML = "Pause"
        }else{
            this.videoPlayer.pause()
        this.playButton.innerHTML = "Play"

        }
    }
    stop(): void {
        
    }
}

const videoplayer = new VideoPlayer({
    videoPlayer:document.querySelector(".video") as HTMLVideoElement,
    playButton:document.querySelector(".play") as HTMLButtonElement,
    stopButton:document.querySelector(".stop") as HTMLButtonElement,
})
videoplayer.inciarEventos()