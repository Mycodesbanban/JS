interface VideoPlayerElements {
    videoPlayer: HTMLVideoElement;
    playButton: HTMLButtonElement;
    stopButton: HTMLButtonElement;
}
interface VideoPlayerProtocol {
    playToglle(): void;
    stop(): void;
    inciarEventos(): void;
}
export default class VideoPlayer implements VideoPlayerProtocol {
    private videoPlayer;
    private playButton;
    private stopButton;
    constructor(VideoPlayerElements: VideoPlayerElements);
    inciarEventos(): void;
    playToglle(): void;
    stop(): void;
}
export {};
//# sourceMappingURL=index.d.ts.map