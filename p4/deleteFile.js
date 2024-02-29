import fs from "fs/promises";

async function deleteFile(filename) {
  try {
    await fs.unlink(filename);
    console.log(`Dosya "${filename}" silindi.`);
  } catch (err) {
    console.error(`Dosya "${filename}" silinirken hata oluştu:`, err);
  }
}

export default deleteFile;
