import pdfmake from 'pdfmake'
import PDF_Fonts from 'pdfmake/build/vfs_fonts'

pdfmake.vfs = PDF_Fonts.pdfMake.vfs

export default (thead: string[], tbody: any[], fileName: string): void => {
  const dataToGenerate = {
    content: [
      {
        table: {
          widths: ['*', 'auto', 'auto'],
          body: [thead, ...tbody],
        },
      },
    ],
  }

  pdfmake.createPdf(dataToGenerate).download(fileName)
}
