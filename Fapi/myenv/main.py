from fastapi import FastAPI
import json

def load_data():
    with open("patients.json","r") as f:
        data = json.load(f)

        return data


app = FastAPI()
@app.get("/")
async def hello():
    return {"message": "Patient Management system api"}
@app.get("/about")
async def about():
    return {"message": "A full functional API to manage your patient records !"}

@app.get("/view")
async def view():
    data = load_data()
    return data

@app.get("/Patient/{patient_id}")
async def patient(patient_id: str):
    data = load_data()
    for patient in data:
        if patient["id"] == patient_id:
            return patient
    return {"message": "Patient not found"}
    



