from .api import router
from app.registrar import register_router


@register_router("/parameter", ["parameter"])
def setup():
    return router
