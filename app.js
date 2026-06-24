const express = require("express");
const os = require("os");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CloudScale Final Project</title>
      </head>
      <body style="font-family: Arial; text-align: center; margin-top: 50px;">
        <h1>CloudScale Final Project</h1>
        <h2>Deployed by Sabreen, Rahaf, and Retaj</h2>
        <p>This application is running on Azure Kubernetes Service.</p>
        <p><strong>Pod Name:</strong> ${os.hostname()}</p>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    message: "Application is running successfully"
  });
});

app.listen(port, () => {
  console.log(`CloudScale app listening on port ${port}`);
});