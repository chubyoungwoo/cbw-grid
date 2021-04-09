import XLSX from 'xlsx';

function ExcelOutputMan () {

}

ExcelOutputMan.prototype = {
    constructor: ExcelOutputMan,
    sheet2blob: function (sheet, sheetName) {
        sheetName = sheetName || 'sheet1';
        var workbook = {
            SheetNames: [sheetName],
            Sheets: {}
        };
        workbook.Sheets[sheetName] = sheet;

        // excel 설정 항목 생성
        var wopts = {
            bookType: 'xlsx', // 생성할 파일 형식
            bookSST: false, // Shared String Table 생성 여부는 생성 속도가 낮아지지만 낮은 버전의 IOS 기기에서 더 나은 호환성이 있다는 것이 공식 설명입니다
            type: 'binary'
        };

        var wbout = XLSX.write(workbook, wopts);
        var blob = new Blob([s2ab(wbout)], {
            type: 'application/octet-stream'
        });

        // 문자열 회전 ArrayBuffer
        function s2ab (s) {
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
        return blob;
    },

    openDownloadDialog: function (url, saveName) {
        if (typeof url == 'object' && url instanceof Blob) {
            url = URL.createObjectURL(url); // blob 주소 생성
        }
        var aLink = document.createElement('a');
        aLink.href = url;
        aLink.download = saveName || ''; // HTML5에 추가된 속성, 저장 파일명 지정, 접미사 없이 사용 가능, file:/// 모드에서는 유효하지 않음
        var event;
        if (window.MouseEvent) event = new MouseEvent('click');
        else {
            event = document.createEvent('MouseEvents');
            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        }
        aLink.dispatchEvent(event);
    },

    outPutAoA: function ({
        header = [],
        rows = [],
        name = '',
        dateNF = []
    }) {

        // 입력형식
        // var _data = [
        // ['이름', '성별', '나이', '등록시간'],
        // ['장삼', '남', 18, new Date() ] ,
        // ['이사', '여', 22, new Date() ]
        // ];
        const exportData = [
            header,
            ...rows
        ];
        var sheet = XLSX.utils.aoa_to_sheet(exportData);
        this.openDownloadDialog(this.sheet2blob(sheet), `${name}.xlsx`);
    },

    outPutJson: function ({
        name = '',
        header = [],
        headerDisplay = [],
        rows = [],
    }) {
        const exportData = [
            headerDisplay,
            ...rows
        ];
        const sheet = XLSX.utils.json_to_sheet(exportData, { header: header, skipHeader: true });
        this.openDownloadDialog(this.sheet2blob(sheet), `${name}.xlsx`);
    }

};



const EXCEL = new ExcelOutputMan();
export default EXCEL;