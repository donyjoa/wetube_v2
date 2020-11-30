const path = require("path");

const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  output: {
    path: OUTPUT_DIR,
    filename: "[main].[format]",
  },
};

module.exports = config;

// enrty는 어디서 파일이 왔는 가?
// output은 파일을 어디로 넣을 것인가?
// __dirname은 현재의 프로젝트 디렉토리 이름인데 이건 어디에서든 접근 가능한 node.js의 전역 변수다.
