import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Video() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: 'https://google.serper.dev/videos?q=apple+inc&apiKey=6b3e3a8466cec4b6c56b1390142069ec1262039b',
                headers: {}
            };

            try {
                const response = await axios.request(config);
                setVideos(response.data.videos || []);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className="video-container">
            <h2>Videos</h2>
            <div className="video-grid">
                {videos.map((video, index) => (
                    <div key={index} className="video-card">
                        <img src={video.imageUrl} alt={video.title} />
                        <h3>{video.title}</h3>
                        <p>{video.snippet}</p>
                        <a href={video.link} target="_blank" rel="noopener noreferrer">
                            Watch Video
                        </a>
                        <style jsx>{`
                            img {
                                width: 100%;
                            }
                            h3 {
                            margin-bottom: 10px;
                            font-size: 18px;
                            }
                            p {
                            margin: 0;
                            font-size: 14px;
                            }
                            a {
                            display: inline-block;

                            margin-top: 10px;
                            padding: 5px 10px;
                            background-color: #007bff;
                            color: white;
                            text-decoration: none;
                            }
                        `}</style>
                        
                    </div>
                ))}
            </div>

            <style jsx>{`
                .video-container {
                    padding: 20px;
                }
                .video-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 20px;
                }
                .video-card {
                    border: 1px solid #ddd;
                    padding: 10px;
                    border-radius: 8px;
                }
                .video-card img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 4px;
                }
                .video-card h3 {
                    margin: 10px 0;
                    font-size: 16px;
                }
                .video-card p {
                    color: #666;
                    font-size: 14px;
                }
                .video-card a {
                    display: inline-block;
                    margin-top: 10px;
                    padding: 5px 10px;
                    background-color: #007bff;
                    color: white;
                    text-decoration: none;
                    border-radius: 4px;
                }
            `}</style>
        </div>
    );
}

export default Video;