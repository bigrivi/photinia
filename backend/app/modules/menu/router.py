from .api import router
from app.registrar import register_router


@register_router("/menu", ["sys"])
def setup():
    return router
