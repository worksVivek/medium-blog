import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { userRouter } from './routes/user'
import { postRouter } from './routes/post'
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>()
app.route("/api/v1/user", userRouter);
app.route("api/v1/blog", postRouter);





export default app

//postgres://avnadmin:AVNS_noTY3p1vOQAtf3xI5Ip@pg-4e7409b-works-3ccb.j.aivencloud.com:15487/defaultdb?sslmode=require
