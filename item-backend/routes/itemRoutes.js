// const express = require('express');
// const multer = require('multer');
// const Item = require('../models/Item');
// const router = express.Router();
// const path = require('path');
// const fs = require('fs');

// // Upload config
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const folder = 'uploads/';
//     if (!fs.existsSync(folder)) fs.mkdirSync(folder);
//     cb(null, folder);
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   }
// });
// const upload = multer({ storage });

// router.post('/', upload.fields([{ name: 'coverImage' }, { name: 'additionalImages' }]), async (req, res) => {
//   try {
//     const { name, type, description } = req.body;
//     // const coverImage = req.files['coverImage']?.[0].path;
//     // const additionalImages = req.files['additionalImages']?.map(file => file.path) || [];
//     const coverImageUrl = req.files['coverImage']
//   ? `/uploads/${req.files['coverImage'][0].filename}`
//   : '';

// const additionalImages = req.files['additionalImages']
//   ? req.files['additionalImages'].map(file => `/uploads/${file.filename}`)
//   : [];

//     const newItem = new Item({ name, type, description, coverImage, additionalImages });
//     await newItem.save();
//     res.status(201).json({ message: 'Item saved!' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.get('/', async (req, res) => {
//   try {
//     const items = await Item.find();
//     res.json(items);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;


// const express = require('express');
// const multer = require('multer');
// const Item = require('../models/Item');
// const router = express.Router();
// const path = require('path');
// const fs = require('fs');

// // Upload config
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     const folder = 'uploads/';
//     if (!fs.existsSync(folder)) fs.mkdirSync(folder);
//     cb(null, folder);
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   }
// });

// const upload = multer({ storage });

// router.post(
//   '/',
//   upload.fields([
//     { name: 'coverImage' },
//     { name: 'additionalImages' }
//   ]),
//   async (req, res) => {
//     try {
//       const { name, type, description } = req.body;

//       // Correctly format file paths
//       const coverImageUrl = req.files['coverImage']
//         ? `/uploads/${req.files['coverImage'][0].filename}`
//         : '';

//       const additionalImages = req.files['additionalImages']
//         ? req.files['additionalImages'].map(file => `/uploads/${file.filename}`)
//         : [];

//       // Save item to DB with correct variable
//       const newItem = new Item({
//         name,
//         type,
//         description,
//         coverImage: coverImageUrl,
//         additionalImages
//       });

//       await newItem.save();
//       res.status(201).json({ message: 'Item saved!' });
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   }
// );

// // Fetch items
// router.get('/', async (req, res) => {
//   try {
//     const items = await Item.find();
//     res.json(items);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

const express = require('express');
const multer = require('multer');
const Item = require('../models/Item');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = 'uploads/';
    if (!fs.existsSync(folder)) fs.mkdirSync(folder);
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// POST route to save item
router.post(
  '/',
  upload.fields([
    { name: 'coverImage' },
    { name: 'additionalImages' }
  ]),
  async (req, res) => {
    try {
      const { name, type, description } = req.body;

      // ✅ Safely get image URLs
      const coverImageUrl = req.files['coverImage']
        ? `/uploads/${req.files['coverImage'][0].filename}`
        : '';

      const additionalImages = req.files['additionalImages']
        ? req.files['additionalImages'].map(file => `/uploads/${file.filename}`)
        : [];

      // ✅ Use correct variables
      const newItem = new Item({
        name,
        type,
        description,
        coverImage: coverImageUrl,
        additionalImages
      });

      await newItem.save();
      res.status(201).json({ message: 'Item saved!' });

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// GET route to fetch all items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;



