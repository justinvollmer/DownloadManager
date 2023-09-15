import axios from 'axios';
import fs from 'fs';

async function downloadImage(url: string, outputPath: string): Promise<void> {
  try {
    const response = await axios.get(url, { responseType: 'stream' });

    if (response.status === 200) {
      const writer = fs.createWriteStream(outputPath);
      response.data.pipe(writer);

      return new Promise<void>((resolve, reject) => {
        writer.on('finish', () => resolve());
        writer.on('error', (err: Error) => reject(err)); // Specify the type of 'err'
      });
    } else {
      throw new Error(`Failed to download image. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Error downloading image: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Example usage:
const imageUrl = 'https://example.com/image.jpg';
const outputPath = 'downloaded_image.jpg';

downloadImage(imageUrl, outputPath)
  .then(() => {
    console.log(`Image downloaded to ${outputPath}`);
  })
  .catch((error) => {
    console.error(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  });
