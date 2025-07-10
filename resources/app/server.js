const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const multer = require('multer');
const PORT = 3000;
const VIDEO_DIR = path.join(__dirname, 'videos');
const THUMBNAIL_DIR = path.join(__dirname, 'thumbnails');
const DATA_DIR = path.join(__dirname, 'data'); // Directory to store exported data
// Create a writable stream for appending data
const exportFilePath = path.join(DATA_DIR, 'export-stream.json');
const writeStream = fs.createWriteStream(exportFilePath, { flags: 'a' }); // Append mode
const upload = multer({ dest: 'uploads/' }); // Temporary storage

app.use(express.static('public'));

// Create the data directory if it doesn't exist
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR);
}
app.use(express.json({ limit: '10mb' })); // Allow up to 10MB
app.use(express.urlencoded({ extended: true, limit: '10mb' })); 


// Serve static files from the root directory
app.use(express.static(__dirname));

// Serve static files from the "thumbnails" folder
app.use('/thumbnails', express.static(THUMBNAIL_DIR));
app.use('/models', express.static('public/models'));// Serve the index.html file
app.use('/videos_data', express.static('videos_data'));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// CORS middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // or set specific origin
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// Endpoint to list video files
app.get('/api/videos', (req, res) => {
    fs.readdir(VIDEO_DIR, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to load videos' });
        }
        const videoFiles = files.filter(file => file.endsWith('.mp4'));
        res.json(videoFiles);
    });
});

// Serve video files
app.get('/videos/:filename', (req, res) => {
    const filePath = path.join(VIDEO_DIR, req.params.filename);
    res.sendFile(filePath);
});

// Store exported data
app.post('/api/export', (req, res) => {
  const data = req.body;
  console.log('Received export data'); 
  if (!Array.isArray(data) || data.length === 0 || !data[0].video) {
    return res.status(400).json({ message: 'Invalid data format' });
  }

  const videoName = data[0].video;
  const filename = `${videoName}_pose_data.json`;
  const filePath = path.join(__dirname, 'videos_data', filename);
console.log("Saving to", filePath);

  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.error('Failed to save pose data:', err);
      return res.status(500).json({ message: 'Failed to save data' });
    }

    res.json({ message: 'Pose data saved', filename });
  });
});
// Start the server
app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});

// Ensure videos directory exists
const videosDir = path.join(__dirname, 'videos');
if (!fs.existsSync(videosDir)) {
    fs.mkdirSync(videosDir);
}

app.post('/api/upload', upload.single('video'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Generate unique filename
        const ext = path.extname(req.file.originalname);
        const filename = `${Date.now()}${ext}`;
        const destination = path.join(videosDir, filename);

        // Move file from temp location to videos folder
        fs.renameSync(req.file.path, destination);

        res.json({ filename });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: 'Upload failed' });
    }
});

