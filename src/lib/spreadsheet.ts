export class Spreadsheet {
  constructor(param: SpreadsheetParams) {
    
  }

  public static connect(param: SpreadsheetParams = {}): GoogleAppsScript.Spreadsheet.Sheet {
    let tmp_ss: GoogleAppsScript.Spreadsheet.Spreadsheet = null
    if (param.fileId) {
      tmp_ss = SpreadsheetApp.openById(param.fileId)
    } else if (param.fileUrl) {
      tmp_ss = SpreadsheetApp.openByUrl(param.fileUrl)
    } else {
      tmp_ss = SpreadsheetApp.getActive()
    }
    if (tmp_ss) {
      if (param.sheetName) {
        return tmp_ss.getSheetByName(param.sheetName)
      } else {
        return tmp_ss.getActiveSheet()
      }
    }
  }
}

interface SpreadsheetParams {
  fileId?: string,
  fileUrl?: string,
  sheetName?: string
}