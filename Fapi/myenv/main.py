from fastapi import FastAPI, Path, HTTPException,Query
import json
from pydantic import BaseModel

def load_data():
    with open("patients.json","r") as f:
        data = json.load(f)

        return data


app = FastAPI()
@app.get("/") #End Points
async def hello():
    return {"message": "Patient Management system api"}
@app.get("/about")
async def about():
    return {"message": "A full functional API to manage your patient records !"}

@app.get("/view")
async def view():
    data = load_data()
    return data

@app.get("/patient/{patient_id}")
async def patient(patient_id: str=Path(..., description="The ID of the patient to retrieve")):
    data = load_data()
    if patient_id in data:
        return data[patient_id]
    raise HTTPException(status_code=404, detail="Patient not found")
    


@app.get("/sort")
def sort_patients(sort_by: str=Query(..., description="Sort on the basis of Height,weight,bmi"),order: str=Query('asc', description="Order can be asc or desc")):
    valid_fields=["height","weight","bmi"]
    if sort_by not in valid_fields:
        raise HTTPException(status_code=400, detail=f"Invalid sort_by field. Must be one of {valid_fields}")
    if order not in ['asc','desc']:
        raise HTTPException(status_code=400, detail="Invalid order. Must be 'asc' or 'desc'")
    
    data = load_data()
    
    sort_order = True if order == 'desc' else False

    sorted_data = dict(sorted(data.items(), key=lambda item: item[1][sort_by], reverse=sort_order))

    return sorted_data