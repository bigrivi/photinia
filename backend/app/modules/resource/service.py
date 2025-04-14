from typing import List
from app.middleware.fastapi_sqlalchemy import db
from app.common.service.base import ServiceBase
from .models import Resource


class ResourceService(ServiceBase[Resource]):
    def __init__(self):
        super().__init__(Resource)


resource_service = ResourceService()
