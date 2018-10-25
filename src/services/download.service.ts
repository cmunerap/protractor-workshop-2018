import { get } from 'http';
import { createWriteStream, readFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';

export class DownloadService {

  public downloadFile(link: string, filename): Promise<void> {
    return new Promise((resolver, rejector) => {
      const dir = resolve(__dirname, '../../../temp/');
      if (!existsSync(dir)) {
        mkdirSync(dir);
      }
      const filepath = resolve(__dirname, '../../../temp/', filename);
      const file = createWriteStream(filepath, { flags: 'w' });
      get(link, (response) => {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolver();
        });
      })
      .on('error', () => {
        rejector();
      });
    });
  }

  public readFileFromTemp(filename: string): Buffer {
    const filepath = resolve(__dirname, '../../../temp/', filename);
    return readFileSync(filepath);
  }
}
