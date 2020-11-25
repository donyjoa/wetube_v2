import express from "express";
import {
  deleteVideo,
  getEditVideo,
  getUpload,
  postEditVideo,
  postUpload,
  videoDetail,
} from "../controller/videoController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

// 업로드
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// 세부정보
videoRouter.get(routes.videoDetail(), videoDetail);

// 수정
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// 삭제
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;

// videoDetail은 함수니까 ()실행 시켜줘야지,
// videoEdit도 이젠 함수
