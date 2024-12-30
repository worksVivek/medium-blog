import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { createPostInput, updateBlog } from "@worksvivek990/medium-common"
export const postRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
  Variables: {
    authorId: string;
    
  };
}>();

postRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("authorization") || "";
  try{
    const author = await verify(authHeader,c.env.JWT_SECRET);
    if(author  ){
      //@ts-ignore
      c.set("authorId",author.id);
      await next();
    }
    else{
      c.status(403);
      return c.json({
        message: "You are not logged in"
      })
    }
  }catch(e){
    c.status(403);
    return c.json({
      message: "You are not logged in"
    })
  }

  
  //extract the user id and pass to the below handler
})

postRouter.post('/', async (c) => {
  const body = await c.req.json();
  const {success} = createPostInput.safeParse(body);
  if(!success){
    c.status(411)
    c.json({
      message: "Incorrect inputs"
    })
  }
  const authorId = c.get("authorId")
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      
      authorId: authorId

    }
  })
  return c.json({
    id: post.id
  })
})

postRouter.put('/', async (c) => {
  
  const body = await c.req.json();
  const { success } = updateBlog.safeParse(body);
  if(!success){
    c.status(411)
    c.json({
      message: "Incorrect inputs"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const post = await prisma.post.update({
    where: {
      id: body.id
    },
    data: {
      title: body.title,
      content: body.content
    }
  })
  return c.json({
    id: post.id
  })


  return c.text('Hello Hono!')
})

postRouter.get('/bulk', async (c) => {
  
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const posts = await prisma.post.findMany({
    
    select:{
      content: true,
      title:true,
      id:true,
      author:{
        select:{
        name: true
        }
      }
    }
  });
   return c.json({posts})
})

postRouter.get('/:id', async (c) => {
  const id =  c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  try {
    const post = await prisma.post.findFirst({
      where: {
        id: id
      },
      select:{
        id : true,
        title:true,
        content:true,
        author:{
          select:{
            name:true
          }
        }
      }

    })
    return c.json({
      post
    })
  } catch (e) {
    c.status(411);
    return c.json({
      message: "Error while fetching blog"
    });
  }
})
//pagination to be implemented
