from fastapi import FastAPI

app = FastAPI()
@app.get("/")
async def hello():
    return {"message": "Patient Management system api"}
@app.get("/about")
async def about():
    return {"message": "A full functional API to manage your patient records !"}


