const Data = require('../models/data')

exports.insert = (data,res) => {
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

exports.get = (data, res) => {
    let fetchedData;
    data
    .then(documents => {
      fetchedData = documents;
      return Data.countDocuments();
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
}