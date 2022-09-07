const Video = require('../model/video')

module.exports = {
  video: {
    upload: async (req, res) => {
      if (await Video.findOne({ title: req.body.title })) {
        return res.json({ success: false, message: 'Video title is already used' })
      }

      let video = new Video({
        title: req.body.title,
        url: req.body.url
      })

      video = await video.save()

      return res.status(200).json({
        success: true,
        message: 'Player successfully registered',
        video: {
          id: video._id,
          title: video.title,
          url: video.url
        }
      })
    }
  }
}
