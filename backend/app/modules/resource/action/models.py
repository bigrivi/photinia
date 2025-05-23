from typing import Optional, List, Any, TYPE_CHECKING
from datetime import datetime
from sqlmodel import Field, SQLModel, Relationship, Column, DateTime, BIGINT
from app.common.model import BaseMixin
if TYPE_CHECKING:
    from app.modules.resource.models import Resource


class ActionBase(SQLModel):
    name: str


class Action(ActionBase, BaseMixin, table=True):
    resource_id: Optional[int] = Field(
        default=None, sa_type=BIGINT, foreign_key="resource.id"
    )
    resource: "Resource" = Relationship(
        sa_relationship_kwargs={"uselist": False, "viewonly": True, "lazy": "noload"})


class ActionPublic(ActionBase):
    id: Optional[int]
    resource_id: int
    valid_state: Optional[bool]
    created_at: Optional[datetime] = None


class ActionCreate(ActionBase):
    pass


class ActionUpdate(ActionBase):
    pass
