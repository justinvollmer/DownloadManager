import { download } from "./DownloadManager";

async function exampleUsage() {
  try {
    const imageUrl = "https://example.com/imagefile.jpg";
    const videoUrl = "https://example.com/videofile.mp4";
    const customFileType = "mkv"; // The custom file type 
    const outputFolder = "./"; // Specify the output folder

    await download(imageUrl, "downloaded_image", outputFolder);
    console.log("Image downloaded successfully.");

    await download(videoUrl, "downloaded_video", outputFolder, customFileType);
    console.log("Video downloaded successfully.");
  } catch (error) {
    console.error(
      `Error: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

exampleUsage();
