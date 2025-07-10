Pose Analysis Application - Technical Documentation

Overview
The Pose Analysis Application is an Electron-based desktop tool that enables real-time human pose detection, comparison, and movement analysis through computer vision and machine learning. The application combines video processing with live camera feed analysis to provide comprehensive biomechanical feedback.


Core Functionalities

 1. Dual-View Interface
- Video Reference Panel: Plays instructional/demonstration videos in a loopable player
- Camera Capture Panel: Processes real-time webcam feed with pose detection overlay
- Synchronized visualization of both reference and user performance

 2. Pose Detection System
- Implements TensorFlow.js with MoveNet model (singlepose lightning variant)
- Tracks 17 key body points (nose, eyes, shoulders, elbows, wrists, hips, knees, ankles)
- Provides real-time skeletal overlay on both video and camera feeds
- Mirrors camera input for more intuitive movement matching

 3. Motion Analysis Features
- Frame-by-frame tracking: Captures body positions at 30fps
- Movement correlation: Compares user motion to reference video
- Time-normalization: Aligns motion data of different durations for accurate comparison
- Motion detection: Identifies active movement periods vs static poses

 4. Performance Evaluation
- Quantitative metrics:
  - X/Y position correlation coefficients (Pearson)
  - Average positional accuracy scores
  - Movement timing analysis
- Qualitative assessment:
  - Color-coded performance ratings (Excellent, Good, Fair, Poor)
  - Body-part specific feedback

 5. Data Visualization
- Interactive charts:
  - Time-series graphs of X/Y positions for each body part
  - Side-by-side comparison of multiple attempts
  - Aggregate performance across sessions
- Tabular results:
  - Detailed numerical scores per body joint
  - Loop-by-loop progression tracking

 6. Data Management
- Video library: Thumbnail-based selection of reference materials
- Loop analysis: Supports both infinite and fixed-repeat video playback
- Export capabilities:
  - JSON export of raw pose data
  - Complete session results with timestamps
  - Statistical summaries

 Technical Architecture
- Frontend: Electron.js with HTML5/CSS/JS
- Computer Vision: TensorFlow.js with WebGL acceleration
- Data Processing: Client-side JavaScript with Chart.js visualization
- Local Server: Embedded Express.js for file management

Target Use Cases
1. Sports Training: Golf swings, tennis serves, baseball pitching form analysis
2. Physical Therapy: Rehabilitation exercise monitoring
3. Dance Instruction: Movement precision evaluation
4. Fitness Coaching: Exercise form correction
5. Research Applications: Biomechanical movement studies

User Workflow (Pose analysis - 1st tab)
1. Select reference video from library
2. Configure loop settings (infinite/fixed)
3. Start synchronized recording
4. View real-time pose comparison
5. Analyze performance metrics
6. Export data for further review

User Workflow (Video analysis - 2nd tab)
1. Upload Reference Video
2. Press play and wait for processing
3. Export Results (Export data) 

Performance Characteristics
- Processes video at native resolution (typically 720p)
- Operates at 10-30fps depending on hardware capabilities
- Supports sessions with unlimited duration (memory-dependent)
- Maintains historical data for multi-session comparison

The application provides immediate visual feedback while generating comprehensive quantitative data for professional review, making it suitable for both real-time coaching and post-session analysis.

Important: You must export the data from the Video Analysis app (2nd tab) before any analysis can be performed.
Required Steps:
1. Add the exercises you want to analyze.
2. Run the analysis on the added exercises.
3. Go to the second tab in the app.
4. Press the Export button to export the data.
Without exporting, you will not be able to proceed with the analysis. This step is mandatory.

