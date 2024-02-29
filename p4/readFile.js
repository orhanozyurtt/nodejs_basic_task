import fs from "fs/promises";

async function readFile(filename) {
  try {
    const data = await fs.readFile(filename, "utf8");
    console.log(`Dosya "${filename}" içeriği:`, data);
  } catch (err) {
    console.error(`Dosya "${filename}" okunurken hata oluştu:`, err);
  }
}

export default readFile;
