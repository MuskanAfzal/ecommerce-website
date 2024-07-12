const mongoose = require('mongoose');
const Category = require('../models/Category');
const { Readable } = require('stream');

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createCategory = (gfs) => async (req, res) => {
  const { name, description } = req.body;
  let icon = '';

  if (req.file) {
    const bufferStream = new Readable();
    bufferStream.push(req.file.buffer);
    bufferStream.push(null);

    const uploadStream = gfs.openUploadStream(req.file.originalname, {
      contentType: req.file.mimetype,
      metadata: { originalname: req.file.originalname }
    });

    bufferStream.pipe(uploadStream);

    uploadStream.on('finish', () => {
      icon = uploadStream.id.toString();
      saveCategory();
    });

    uploadStream.on('error', (err) => {
      res.status(500).json({ message: err.message });
    });
  } else {
    saveCategory();
  }

  function saveCategory() {
    const category = new Category({ name, description, icon });
    category.save()
      .then((category) => res.status(201).json(category))
      .catch((err) => res.status(400).json({ message: err.message }));
  }
};

exports.updateCategory = (gfs) => async (req, res) => {
  const { name, description } = req.body;
  let icon = req.body.icon;

  if (req.file) {
    const bufferStream = new Readable();
    bufferStream.push(req.file.buffer);
    bufferStream.push(null);

    const uploadStream = gfs.openUploadStream(req.file.originalname, {
      contentType: req.file.mimetype,
      metadata: { originalname: req.file.originalname }
    });

    bufferStream.pipe(uploadStream);

    uploadStream.on('finish', () => {
      icon = uploadStream.id.toString();
      updateCategory();
    });

    uploadStream.on('error', (err) => {
      res.status(500).json({ message: err.message });
    });
  } else {
    updateCategory();
  }

  function updateCategory() {
    Category.findByIdAndUpdate(req.params.id, { name, description, icon }, { new: true })
      .then((category) => {
        if (!category) return res.status(404).json({ message: "Category not found" });
        res.json(category);
      })
      .catch((err) => res.status(400).json({ message: err.message }));
  }
};

exports.deleteCategory = (gfs) => async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });

    if (category.icon) {
      gfs.delete(new mongoose.Types.ObjectId(category.icon), (err) => {
        if (err) return res.status(404).json({ err: err });
      });
    }

    res.json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCategoryIcon = (gfs) => async (req, res) => {
  gfs.find({ filename: req.params.filename }).toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.status(404).json({ err: 'No file exists' });
    }

    gfs.openDownloadStreamByName(req.params.filename).pipe(res);
  });
};
