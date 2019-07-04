exports.insert = (data,res) => {
    data
      .save()
      .then(createdData => {
        res.status(200).json({
          message: "Post added successfully",
          datas: {
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
  let countData;
  data
  .find({top: null})
  .then(documents => {
    fetchedData = documents;
    return data.countDocuments();
  })
  .then(count => {
    countData = count;
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
        message: "Fetching posts failed!"
    });
  })

  data
  .find({top:false})
  .then(documents =>{
    res.status(200).json({
      message: "Posts fethed successfully!",
      datas:[...fetchedData, ...documents],
      maxPosts: countData + 1,
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      mesasge: "Fetching posts failed!"
    });
  })
  
}

// exports.get = (data, res) => {

//     let fetchedData;
//     data
//     .find()
//     .then(documents => {
//       fetchedData = documents;
//       return data.countDocuments();
//     })
//     .then(count => {
//       res.status(200).json({
//         message: "Posts fetched successfully!",
//         datas: fetchedData,
//         maxPosts: count,
//       });
//     })
//     .catch(error => {
//       console.log(error)
//       res.status(500).json({
//         message: "Fetching posts failed!"
//       });
//     });
// }

exports.delete = (data, id, res) => {
        data
        .deleteOne({_id: id})
        .then(result => {
            if(result.n > 0) {
              res.status(200).json({
                  message: "succsufully delete the data"
              })
            }
            else {
              res.status(201).json({
                message: "something went wrong"
              })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                message: "someting going wrong"
            })
        })
}

exports.update = (data,id,updata,res) => {
  data
  .updateOne({_id: id},updata)
  .then(result => {
    if(result.n > 0) {
      res.status(200).json({
          message: "succsufully updata the data"
      })
    }
    else {
      console.log(result)
      res.status(201).json({
        message: "something went wrong"
      })
    }
})
.catch(err => {
    console.log(err)
    res.status(500).json({
        message: "someting going wrong"
    })
})
}