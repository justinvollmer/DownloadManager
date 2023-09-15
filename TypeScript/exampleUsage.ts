import { download, downloadFromList } from "./DownloadManager";

async function exampleUsageSimple() {
  try {
    const imageUrl = "https://example.com/image.jpg";
    const videoUrl = "https://example.com/video.mp4";
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

async function exampleUsageList() {
  const urlList = [
    { url: "https://example.com/image.jpg", filename: "image" },
    { url: "https://example.com/video.mp4", filename: "video" },
    { url: "https://example.com/image.jpg", filename: "another image" },
    { url: "https://example.com/video.mp4", filename: "another video" },
    { url: "https://example.com/video.mkv", filename: "you can make this" },
    { url: "https://example.com/image.png", filename: "even longer" },
    { url: "https://example.com/video.avi", filename: "until it" },
    { url: "https://example.com/image.webp", filename: "gets silly" },
  ];
  const outputFolder = "./";

  downloadFromList(urlList, outputFolder)
    .then(() => {
      console.log("All files downloaded successfully.");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

exampleUsageSimple();

exampleUsageList();
