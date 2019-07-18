exports.insert = (data,res) => {
    data
    .save()
    .then(createdData => {
        res.status(200).json({
            message:"succesfully",
            datas: {
                ...createdData,
                id: createdData._id
            }
        })
    })
    .catch(err => {
        res.status(401).json({
            message: "failed"
        })
    })

}

exports.get = (id,res) => {
    data
    .find({belongTo:id })
    .then(fetchedData => {
        res.status(201).json({
            message:"succesful",
            datas: fetchedData
        })
    })
    .catch(err=>{
        res.status(501).json({
            message: "failed"
        })
    })
}

exports.update = (id,updata,res) => {
    profile
    .updateOne({_id: id},updata)
    .then(result => {
      if(result.n > 0) {
        res.status(200).json({
            message: "succsufully updata the profile"
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