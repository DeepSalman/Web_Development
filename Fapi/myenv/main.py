from fastapi import FastAPI, Path, HTTPException,Query
import json
from fastapi.responses import JSONResponse
from pydantic import BaseModel,Field,computed_field
from typing import Annotated,Literal,Optional

class Patient(BaseModel):
    id:  Annotated[str, Field(...,description="Unique identifier for the patient")]
    name: Annotated[str,Field(...,description="Full name of the patient")]
    city: Annotated[str,Field(...,description="City of residence")]
    age: Annotated[int,Field(...,gt=0,lt=100,description="Age of the patient")]
    gender: Annotated[Literal['male','female','others'],Field(...,description="Gender of the patient")]
    height: Annotated[float,Field(...,gt=0,description="Height of the patient in meters")]
    weight: Annotated[float,Field(...,gt=0,description="Weight of the patient in kg")]
    @computed_field
    @property
    def bmi(self) -> float:
        bmi=self.weight/(self.height**2)
        return round(bmi,2)
    @computed_field
    @property
    def verdict(self) -> str:
        if self.bmi < 18.5:
            return "Underweight"
        elif 18.5 <= self.bmi < 24.9:
            return "Normal weight"
        elif 25 <= self.bmi < 29.9:
            return "Overweight"
        else:
            return "Obesity"


class PatientUpdate(BaseModel):
    
    name: Annotated[str,Field(Optional,description="Full name of the patient")]
    city: Annotated[str,Field(Optional,description="City of residence")]
    age: Annotated[int,Field(Optional,gt=0,lt=100,description="Age of the patient")]
    gender: Annotated[Literal['male','female','others'],Field(Optional,description="Gender of the patient")]
    height: Annotated[float,Field(Optional,gt=0,description="Height of the patient in meters")]
    weight: Annotated[float,Field(Optional,gt=0,description="Weight of the patient in kg")]




def load_data():
    with open("patients.json","r") as f:
        data = json.load(f)

        return data
    
def save_data(data):
    with open("patients.json","w") as f:
        json.dump(data,f)


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



@app.post('/create')
def create_patient(patient: Patient):
    #load existing data
    data = load_data()

    #Check if the patient id already exists
    if patient.id in data:
        raise HTTPException(status_code=400, detail="Patient with this id already exists : ")
    
    #new patient add to the database
    data[patient.id]=patient.model_dump(exclude=['id']) # converts a pydantic model to a dictionary

    #save the updated data back to the json file ( not this is as python dictionary form )
    save_data(data)

    return JSONResponse(content={"message": "Patient created successfully"}, status_code=201)


