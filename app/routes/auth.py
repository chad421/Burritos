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
    if db.get(user_info.email, None) is not None:
        raise ValueError("User Already Exists")
    db[user_info.email] = {
        "email": user_info.email,
        "username": user_info.username,
        "password": password_hash.hash(user_info.password)
    }

@router.get("/signin")
def sign_in():
    ...
