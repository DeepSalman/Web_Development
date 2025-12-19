import pydantic
from pydantic import BaseModel

#pydantic model
class Patient(BaseModel):
    name: str
    age: int
    height: float
    weight: float
    bmi: float
    allergies: list = [str]
    contact_details: dict = dict

def insert_patient(patient: Patient):
    print(patient.name)
    print(patient.age)
    print(patient.height)
    print(patient.weight)
    print(patient.bmi)
    print("Inserted")

Patient_info ={'name':'nitesh','age':25,'height':5.9,'weight':70,'bmi':22.5,'allergies':['pollen','dust'],'contact_details':{'phone':'1234567890'}}

patient1 = Patient(**Patient_info)


insert_patient(patient1)


#Field Validator : 

