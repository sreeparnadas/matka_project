import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import {Workbook} from 'exceljs';
import alasql from 'alasql';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({providedIn: 'root'})
export class ExcelService {
  constructor() { }

  public exportAsExcelFile(data: any[], excelFileName: string, headers?: any): void {
    // http://www.lib4dev.in/info/SheetJS/sheetjs/6988020
    if (headers){
      // adding data from second line
      // tslint:disable-next-line:prefer-const
      var worksheet = XLSX.utils.json_to_sheet([{}]);
      // tslint:disable-next-line:prefer-const
      let headerKeys = Object.keys(headers);
      XLSX.utils.sheet_add_json(worksheet, data, { header: headerKeys, skipHeader: true, origin: 'A2'});
      // Adding Header to top line
      XLSX.utils.sheet_add_json(worksheet,
        [
          headers,
        ],
        {
          header: headerKeys,
          skipHeader: true,
          origin: "A1"
        }
      );
    }else{
      const originalHeaders = Object.keys(data[0]);

      // tslint:disable-next-line:prefer-const
      var worksheet = XLSX.utils.json_to_sheet([{}]);
      XLSX.utils.sheet_add_json(worksheet, data, {skipHeader: true, origin: 'A2'});
      XLSX.utils.sheet_add_json(worksheet,
        [
          originalHeaders,
        ],
        {
          skipHeader: true,
          origin: "A1"
        }
      );
    }
    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }


  public exportToExcelSpecial(data: any[], excelFileName: string, headersArray: any[]): void {
    // https://www.npmjs.com/package/exceljs

    // Create workbook and worksheet
    let workbook = new Workbook();
    const worksheet = workbook.addWorksheet('My Sheet');
    worksheet.columns = headersArray;
    worksheet.addRows(data);


    // @ts-ignore
   // Add Header Row
   // const headerRow = worksheet.addRow(header);
    // Cell Style : Fill and Border
    // headerRow.eachCell((cell, n) => {
    //   cell.fill = {
    //     type: 'pattern',
    //     pattern: 'solid',
    //     fgColor:{argb:'FFFFFF00'},
    //     bgColor:{argb:'FF0000FF'}
    //   }
    //   cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    // });
    //hhh


    // var rowValues = [];
    // rowValues[1] = 4;
    // rowValues[5] = 'Kyle';
    // rowValues[9] = new Date();
    //
    // worksheet.getCell('A1').alignment = { vertical: 'top', horizontal: 'left' };
    // worksheet.getCell('B1').alignment = { vertical: 'middle', horizontal: 'center' };
    // worksheet.getCell('C1').alignment = { vertical: 'bottom', horizontal: 'center' };
    //
    //
    // worksheet.addRow(rowValues);
    // worksheet.getColumn(3).width = 35;
    // worksheet.getColumn(4).width = 20;
    // worksheet.getColumn(5).width = 30;
    // worksheet.getColumn(6).width = 30;
    // worksheet.getColumn(7).width = 10;
    // worksheet.addRow([]);
    // Generate Excel File with given name

    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], { type: EXCEL_TYPE });
      FileSaver.saveAs(blob, excelFileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
    });
  }

  simpleExportToExcel(jsonData: any[], excelFileName): void
  {
    /* table id is passed over here */
    // const element = document.getElementById('my-table');
    // const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);


    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, excelFileName);
  }



  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
    FileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
  }

}
