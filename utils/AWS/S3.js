const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  })

  const imageURL = 'https://www.magltk.com/wp-content/uploads/2022/09/%D8%A7%D9%84%D9%84%D9%87%D9%85-%D8%B5%D9%84-%D9%88%D8%B3%D9%84%D9%85-%D8%B9%D9%84%D9%89-%D9%86%D8%A8%D9%8A%D9%86%D8%A7-%D9%85%D8%AD%D9%85%D8%AF-%D9%81%D8%B6%D9%84-%D8%A7%D9%84%D8%B5%D9%84%D8%A7%D8%A9-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D9%86%D8%A8%D9%8A.webp'
  const res = await fetch(imageURL)
  const blob = await res.buffer()


  const uploadedImage = await s3.upload({
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: req.files[0].originalFilename,
    Body: blob,
  }).promise()


