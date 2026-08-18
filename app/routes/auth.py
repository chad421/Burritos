from fastapi import APIRouter
from schemas.auth import UserRegister
from security import password_hash

router = APIRouter()

db = {}

@router.get("/users")
def get_users():
    return db

@router.post("/signup")
def sign_up(user_info: UserRegister):
    db[user_info.email] = {
        "email": user_info.email,
        "password": password_hash.hash(user_info.password)
    }

@router.get("/signin")
def sign_in():
    ...
