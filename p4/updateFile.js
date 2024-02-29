import fs from "fs/promises";

async function updateFile(filename, newData) {
  try {
    await fs.appendFile(filename, newData);
    console.log(`Dosya "${filename}" güncellendi.`);
  } catch (err) {
    console.error(`Dosya "${filename}" güncellenirken hata oluştu:`, err);
  }
}

export default updateFile;
