// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function (req, res) {
  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'chasegarseesoftwaredevelopment@gmail.com',
      pass: '',
    },
    secure: true,
  })
  const mailData = {
    from: 'chasegarseesoftwaredevelopment@gmail.com',
    to: 'chasegarsee@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info)
  })
  res.status(200)
}
