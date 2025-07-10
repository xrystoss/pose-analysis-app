# 🧍‍♂️ Pose Analysis Application

An Electron-based desktop tool for **real-time human pose detection**, **motion comparison**, and **biomechanical analysis** using computer vision and machine learning.

---

## 🚀 Overview

The **Pose Analysis Application** leverages **TensorFlow\.js** and **MoveNet** to deliver synchronized pose tracking and motion comparison. Ideal for **sports training**, **rehabilitation**, **fitness coaching**, and **research**, the application provides both **visual feedback** and **quantitative performance metrics**.

---

## 🖥️ Core Functionalities

### 🔀 Dual-View Interface

* **Video Reference Panel**
  Loopable instructional/demo video player
* **Camera Capture Panel**
  Real-time webcam with pose detection overlay
* **Synchronized Visualization**
  Side-by-side display of reference and live feed for intuitive comparison

### 🧠 Pose Detection System

* Built on **TensorFlow\.js** with **MoveNet (SinglePose Lightning)**
* Tracks **17 body keypoints**:

  * Nose, eyes, shoulders, elbows, wrists
  * Hips, knees, ankles
* Real-time **skeletal overlays**
* **Mirrored camera input** for easier mimicry

---

## 📊 Motion Analysis Features

* **Frame-by-frame tracking** at **30 FPS**
* **Time-normalized motion comparison** (different durations aligned)
* **Active vs Static movement detection**
* **Movement correlation analysis** to reference video

---

## 📈 Performance Evaluation

### 🔢 Quantitative Metrics

* **X/Y Position Correlation** using Pearson coefficient
* **Average Positional Accuracy**
* **Movement Timing Metrics**

### 🎨 Qualitative Assessment

* **Color-coded feedback**:
  *Excellent*, *Good*, *Fair*, *Poor*
* **Joint-specific analysis and guidance**

---

## 📉 Data Visualization

* **Interactive Graphs** (Chart.js):

  * Time-series of joint X/Y positions
  * Compare multiple attempts side-by-side
  * Track performance across sessions
* **Tabular Scores** for each joint
* **Loop Progression View** for repeated exercises

---

## 🗃️ Data Management

* **Video Library** with thumbnails
* **Loop Playback Options**: Infinite or fixed
* **Export Options**:

  * Raw Pose Data (`.json`)
  * Complete session data with timestamps
  * Summary statistics for historical comparison

---

## 🧱 Technical Architecture

* **Frontend**: Electron.js with HTML5, CSS, and JavaScript
* **Computer Vision**: TensorFlow\.js accelerated with WebGL
* **Data Processing & Visualization**:

  * JavaScript for computation
  * Chart.js for visual output
* **Local Server**: Embedded Express.js for file handling

---

## 🏋️‍♂️ Target Use Cases

* **Sports Training**: Golf swings, tennis serves, baseball pitching
* **Physical Therapy**: Rehab progress tracking
* **Dance Instruction**: Movement precision evaluation
* **Fitness Coaching**: Form correction and guidance
* **Research**: Biomechanical movement analysis

---

## 🔄 User Workflow

### 1️⃣ Pose Analysis Tab

1. Select a reference video from the library
2. Configure loop mode (Infinite / Fixed)
3. Start synchronized recording
4. Observe real-time pose overlay and comparison
5. Review performance metrics
6. Export results for analysis

### 2️⃣ Video Analysis Tab

1. Upload a reference video
2. Press **Play** and wait for processing
3. **Export** the results using the Export button

> **⚠️ Important:**
> **You must export the data from the Video Analysis tab before performing any further analysis.**
> Steps:
>
> * Add the exercises you want to analyze
> * Run the analysis
> * Go to the **Video Analysis** tab
> * Click **Export**
>
> ❗ This step is **mandatory** for downstream analysis

---

