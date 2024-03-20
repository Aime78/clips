import { Injectable } from '@angular/core';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';

@Injectable({
  providedIn: 'root',
})
export class FfmpegService {
  isRunning = false;
  isReady = false;
  private ffmpeg;

  constructor() {
    this.ffmpeg = createFFmpeg({ log: true });
  }

  async init() {
    if (this.isReady) {
      return;
    }

    await this.ffmpeg.load();

    this.isReady = true;
  }

  async getScreenshots(file: File) {
    this.isRunning = true;

    const data = await fetchFile(file);

    this.ffmpeg.FS('writeFile', file.name, data);

    const seconds = [1, 2, 3];
    const commands: string[] = [];

    for (let i = 0; i < seconds.length; i++) {
      let second = seconds[i];
      let screenshot = second;
      if (i !== 0) {
        screenshot = second + 5;
      }
      commands.push(
        // Input
        '-i',
        file.name,
        // Output Options
        '-ss',
        `00:00:0${screenshot}`,
        '-frames:v',
        '1',
        '-filter:v',
        'scale=510:-1',
        // Output
        `output_0${second}.png`
      );
    }

    // seconds.forEach((second) => {
    //   commands.push(
    //     // Input
    //     '-i',
    //     file.name,
    //     // Output Options
    //     '-ss',
    //     `00:00:0${second}`,
    //     '-frames:v',
    //     '1',
    //     '-filter:v',
    //     'scale=510:-1',
    //     // Output
    //     `output_0${second}.png`
    //   );
    // });

    await this.ffmpeg.run(...commands);
    const screenshoots: string[] = [];

    seconds.forEach((second) => {
      const screenshotFile = this.ffmpeg.FS(
        'readFile',
        `output_0${second}.png`
      );
      const screenshotBlob = new Blob([screenshotFile.buffer], {
        type: 'image/png',
      });

      const screenshotURL = URL.createObjectURL(screenshotBlob);

      screenshoots.push(screenshotURL);
    });

    this.isRunning = false;

    return screenshoots;
  }

  async blobFromURL(url: string) {
    const response = await fetch(url);
    const blob = response.blob();

    return blob;
  }
}
