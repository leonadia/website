const DS = require('../services/dataService')
const Data = require('../models/data')

exports.AddData = (req, res, next) => {
    console.log(req.body)
    const data = new Data({
      title: req.body.title,
      content: req.body.content,
    });
    data
      .save()
      .then(createdData => {
        res.status(200).json({
          message: "Post added successfully",
          post: {
            ...createdData,
            id: createdData._id
          }
        });
      })
      .catch(error => {
          console.log(error)
        res.status(500).json({
          message: "Creating a post failed!"
        });
      });
  };

  exports.getData = (req, res, next) => {
    const dataQuery = Data.find();
    let fetchedData;
    dataQuery
      .then(documents => {
        fetchedData = documents;
        return Data.count();
      })
      .then(count => {
        res.status(200).json({
          message: "Posts fetched successfully!",
          posts: fetchedData,
          maxPosts: count
        });
      })
      .catch(error => {
        res.status(500).json({
          message: "Fetching posts failed!"
        });
      });
  };