const SHEET_ID = '1pux0EkoQUVN6jYKygQBMccvRFgNEwv8TL26FAt2GoWI';
const SHEET_NAME = 'ชีต1';

function setupHeader() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  sheet.getRange(1, 1, 1, 9).setValues([[
    'Timestamp','ชื่อผู้นิเทศ','ชื่อผู้รับการนิเทศ','วิชา','ชั้น','วันที่นิเทศ','คะแนน','ความคิดเห็น','ข้อเสนอแนะ'
  ]]);
}

function doPost(e) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.supervisor || '',
    data.teacher || '',
    data.subject || '',
    data.grade || '',
    data.date || '',
    data.score || '',
    data.comment || '',
    data.suggestion || ''
  ]);
  return ContentService.createTextOutput(JSON.stringify({status:'success'})).setMimeType(ContentService.MimeType.JSON);
}
