from .api import router
from app.registrar import register_router

@register_router("/user",["user"])
def setup():
    return router
