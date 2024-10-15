
import * as React from 'react';
import styles from './styles.module.css';

import Player from '@madzadev/audio-player';
import '@madzadev/audio-player/dist/index.css';

        const tracks = [
          {
            url: 'https://github.com/hyaliyun/Bible/raw/refs/heads/main/%E4%BB%A5%E5%BC%97%E6%89%80%E4%B9%A6/%E4%BB%A5%E5%BC%97%E6%89%80%E4%B9%A6%E7%AC%AC1%E7%AB%A0.mp3',
            title: '以弗所书第1章',
            tags: ['']
          },
          {
            url: 'https://github.com/hyaliyun/Bible/raw/refs/heads/main/%E4%BB%A5%E5%BC%97%E6%89%80%E4%B9%A6/%E4%BB%A5%E5%BC%97%E6%89%80%E4%B9%A6%E7%AC%AC2%E7%AB%A0.mp3',
            title: '以弗所书第2章',
            tags: ['']
          },
          {
            url: 'https://github.com/hyaliyun/Bible/raw/refs/heads/main/%E4%BB%A5%E5%BC%97%E6%89%80%E4%B9%A6/%E4%BB%A5%E5%BC%97%E6%89%80%E4%B9%A6%E7%AC%AC3%E7%AB%A0.mp3',
            title: '以弗所书第3章',
            tags: ['']
          },
          {
            url: 'https://github.com/hyaliyun/Bible/raw/refs/heads/main/%E4%BB%A5%E5%BC%97%E6%89%80%E4%B9%A6/%E4%BB%A5%E5%BC%97%E6%89%80%E4%B9%A6%E7%AC%AC4%E7%AB%A0.mp3',
            title: '以弗所书第4章',
            tags: ['']
          },
          {
            url: 'https://github.com/hyaliyun/Bible/raw/refs/heads/main/%E4%BB%A5%E5%BC%97%E6%89%80%E4%B9%A6/%E4%BB%A5%E5%BC%97%E6%89%80%E4%B9%A6%E7%AC%AC5%E7%AB%A0.mp3',
            title: '以弗所书第5章',
            tags: ['']
          },
          {
            url: 'https://github.com/hyaliyun/Bible/raw/refs/heads/main/%E4%BB%A5%E5%BC%97%E6%89%80%E4%B9%A6/%E4%BB%A5%E5%BC%97%E6%89%80%E4%B9%A6%E7%AC%AC6%E7%AB%A0.mp3',
            title: '以弗所书第6章',
            tags: ['']
          }
        ]     

        const colors = {
          tagsBackground: "#adb5bd",
          tagsText: "#dee2e6",
          tagsBackgroundHoverActive: "#6e65f1",
          tagsTextHoverActive: "#dee2e6",
          searchBackground: "#adb5bd",
          searchText: "#dee2e6",
          searchPlaceHolder: "#575a77",
          playerBackground: "#adb5bd",
          titleColor: "#dee2e6",
          timeColor: "#dee2e6",
          progressSlider: "#3e32e4",
          progressUsed: "#dee2e6",
          progressLeft: "#151616",
          bufferLoaded: "#1f212b",
          volumeSlider: "#3e32e4",
          volumeUsed: "#dee2e6",
          volumeLeft: "#151616",
          playlistBackground: "#adb5bd",
          playlistText: "#575a77",
          playlistBackgroundHoverActive: "#adb5bd",
          playlistTextHoverActive: "#dee2e6",
      }

      function HomeContent() {
        return (
          <div className={styles.container}>
            <div className={styles.player}>
              <Player
                trackList={tracks}
                includeTags={true}
                includeSearch={true}
                showPlaylist={true}
                sortTracks={true}
                autoPlayNextTrack={true}
                customColorScheme={colors}
              />
            </div>
            <div className={styles.buttonContainer}>
             <a href="/fo/0" className={styles.secondaryButton}>
              圣经MP3有声读物
            </a>
           </div>
          </div>
        );
      }
        
export default HomeContent;