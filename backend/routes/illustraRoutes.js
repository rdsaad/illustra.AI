import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').get((req, res) => {
  res.send('Hello from Illustra!');
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Invalid prompt provided. Please provide a valid prompt.' });
    }

    console.log('Received prompt:', prompt);

    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    console.log('AI Response:', aiResponse);

    const image = aiResponse.data[0].b64_json;
    res.status(200).json({ success: true, photo: image });
  } catch (error) {
    console.error('Error from OpenAI API:', error);
    res.status(500).json({ error: error?.response?.data?.error?.message || 'Something went wrong. Please try again later.' });
  }
});

export default router;