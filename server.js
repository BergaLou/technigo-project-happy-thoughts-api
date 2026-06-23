import cors from "cors"
import express from "express"
import mongoose from "mongoose"
import { Thought } from './models/Thought.js'

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-happy-thoughts-api"
mongoose.connect(mongoUrl)
mongoose.Promise = Promise

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080
const app = express()

// Add middlewares to enable cors and json body parsing
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Welcome to my Happy Thoughts API, enjoy!");
});

// Start defining your routes here
app.get("/thoughts", async (req, res) => {
  try {
    const thoughts = await Thought.find()
    .sort({ createdAt: 'desc' })
    .limit(20);
    res.status(200).json(thoughts);
  } catch (err) {
    res.status(400).json({ message: 'Could not fetch thoughts', error: err.errors })
  }
  });
  
  // POST - create new
  app.post('/thoughts', async (req, res) => {
    const { message } = req.body;
    try {
      const newThought = await new Thought({ message }).save();
      res.status(201).json(newThought);
    } catch (err) {
      res.status(400).json({ message: 'Could not save thought', error: err.errors });
    }
    });

    //POST - like
    app.post('/thoughts/:thoughtId/like', async (req, res) => {
      const { thoughtId } = req.params;
      try {
        const updatedThought = await Thought.findByIdAndUpdate(
          thoughtId,
          { $inc: {hearts: 1 } },
          { new: true }
        );
        if (!updatedThought) {
          return res.status(404).json({ message: 'Thought not found' });
        }
        res.status(200).json(updatedThought);
      } catch (err) {
        res.status(400).json({ message: 'Invalid request', error: err.errors });
      }
    });

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
