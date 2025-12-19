import pydantic
from pydantic import BaseModel,EmailStr,AnyUrl,Field,field_validator 
from typing import List,Dict,Optional,Annotated

class PATIENT(BaseModel):
    name : str
    email: EmailStr
    age: int
    weight: float
    married: bool
    allergies: List[str]
    contact_details: Dict[str, str]

    @field_validator('email')
    @classmethod
    def email_must_contain_domain(cls, value):
        valid_domains = ['gmail.com', 'yahoo.com', 'outlook.com']
        domain = value.split('@')[-1]
        if domain not in valid_domains:
            raise ValueError(f'Email domain must be one of {valid_domains}')
        return value
    

def insert_patient(patient:PATIENT):
        print(patient.name)
        print(patient.email)
        print(patient.age)
        print(patient.height)
        print(patient.weight)
        print(patient.bmi)
        print("Inserted")

Patient_info ={'name':'nitesh','email':'nitesh@gmail.com','age':25,'height':5.9,'weight':70,'bmi':22.5,'allergies':['pollen','dust'],'contact_details':{'phone':'1234567890'}}

patient1 = PATIENT(**Patient_info)


insert_patient(patient1)


