import processPath from '../lib/path'
import moveFile from '../lib/mv'

class Upload {
  async uploadFile(files, path) {
    if (!files) {
      return {
        ok: false,
        message: 'Ningun archivo fue cargado'
      }
    }

    const dirPath = processPath(path)
    let ufiles = files.files
    if (!Array.isArray(ufiles)) {
      ufiles = [ufiles]
    }
    for (const file of ufiles) {
      await moveFile(file, dirPath.absolutePath)
    }

    return {
      ok: true,
      message: 'Archivos subidos correctamente',
      path: dirPath.relativePath
    }
  }
}

export default Upload
