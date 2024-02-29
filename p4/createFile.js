import fs from "fs/promises";

async function createFile(filename, data) {
  try {
    await fs.writeFile(filename, data);
    console.log(`Dosya "${filename}" oluşturuldu.`);
  } catch (err) {
    console.error(`Dosya "${filename}" oluşturulurken hata oluştu:`, err);
  }
}

export default createFile;
