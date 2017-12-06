import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work'

const myWork = [
  {
    'title': "A Serverless Portfolio",
    'href': "images/PortfolioDiagram.jpg",
    'desc': `This portfolio is built on Amazon Web Services and ReactJS. On landing, you go to my domain managed by Amazon Route 53. This directs the request to the Cloudfront Content Delivery Network, which distributes my portfolio worldwide. Cloudfront retrieves the portfolio from an Amazon Simple Storage Service (S3) Bucket, the portfolio that arrives on your device is a combination of HTML, CSS, JavaScript and Images.
The frontend component, which is running on your device, uses the React JavaScript Library to provide interactivity. It also uses the Babel JavaScript compiler to ensure that it runs in almost any browser.
Taken together, all these things make up the frontend of this application.
To get the portfolio to S3: First, my machine was set up as a development environment. The source code is stored on GitHub. When the code is pushed to GitHub, Amazon Web Services CodeBuild takes over automatically, runs unit tests with Jest, packages the code using NPM, Webpack, and Babel, and stores the results in S3. CodePipeline will then run a Lambda function that deploys the code to my S3 Bucket. The Lambda function also sends a message using AWS Simple Notification Service (SNS), to notify me that my portfolio has been deployed.
`,
    'image': {
      'desc': "Screenshot of Serverless Portfolio project code",
      'src': "images/PortfolioCode.jpg",
      'comment': ""
    }
  },
  {
    'title': "Note Converter App on DynamoDB",
    'href': "images/PollyDiagram.jpg",
    'desc': `The website is hosted in S3. In this website you enter your notes. Once you've entered those notes in the site executes a post to
an Amazon API Gateway, which triggers a Lambda function. This function puts the notes into Amazon DynamoDB, a managed noSQL Database. Lambda then triggers an SNS event that triggers another Lambda function, which takes the notes and passes them to the Amazon Polly Service, which in turn returns the notes as MP3 audio file.
The MP3 file is saved to S3 bucket. The Lambda function then updates DynamoDB stating that the notes have been converted into audio.

Then you visit the site and search for notes. This triggers API Gateway, which triggers a Lambda function to scan DynamoDB and return the notes.
`,
    'image': {
      'desc': "Note Converter Application",
      'src': "images/Polly.jpg",
      'comment': ""
    }
  },
  {
    'title': "Alexa Skill with AWS and Lambda",
    'href': "images/AlexaSkill.jpg",
    'desc': `In this project I programmed an Alexa Skill in order to be able to interact with and hear
    the notes I have created using the Note to Speech project.
    It uses AWS Lambda and the Amazon Developer platform to set things like invocation name, intent schema, slot type,
    and utterances. The completed Skill reads MP3 files stored in S3 Buckets and selects them randomly - so Alexa is reading
    out random facts and helping to practice learning notes.
    `,
    'image': {
      'desc': "Screenshot of Alexa Skill",
      'src': "images/AlexaSkill.jpg",
      'comment': ""
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'))
