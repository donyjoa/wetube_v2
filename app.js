import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localMiddleWare } from "./middlewares";

const app = express();

app.use(helmet({ contentSecurityPolicy: false })); //보안
app.set("view engine", "pug"); //엔진변경
app.use("/uploads", express.static("uploads")); //누군가 업로드로 간다면 스테틱, 다이렉토리에서 파일을 보내주는 미들웨어
// 이제 누군가 업로드스 폴더안에 있는 파일로 간다.
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localMiddleWare);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
