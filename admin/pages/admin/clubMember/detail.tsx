import * as React from "react";
import {
  BooleanCell,
  DataGrid,
  DeleteEntityButton,
  DetailScope,
  DisplayTextField,
  FieldView,
  GenericCell,
  HasOneSelectCell,
  Label,
  Link,
  LinkButton,
  NavigateBackLink,
  Stack,
} from "@contember/admin";
import { Directive, Title } from "../../../components/Directives";
import { Slots } from "../../../components/Slots";

export default () => (
  <>
    <Directive name="content-max-width" content={null} />
    <Title>Club member detail</Title>
    <DetailScope entity="ClubMember(id=$id)">
      <Slots.Back>
        <NavigateBackLink to="admin/clubMember/list">Back</NavigateBackLink>
      </Slots.Back>
      <Slots.Actions>
        <LinkButton to="admin/clubMember/edit(id: $entity.id)">
          Edit club member
        </LinkButton>
      </Slots.Actions>
      <Slots.ContentStack>
        <Stack direction="vertical" gap="xlarge">
          <div>
            <div className="grid gap-2 md:gap-4 md:grid-cols-2 mb-8">
              <DisplayTextField field="name" label="Name" />
              <DisplayTextField field="id" label="ID" />
            </div>
            <div className="mb-2">Contact</div>
            <div className="grid gap-2 md:gap-4 md:grid-cols-2">
              <DisplayTextField field="email" label="Email" />
              <DisplayTextField field="phoneNumber" label="Phone number" />
            </div>
          </div>
          <>
            <Stack direction="horizontal" justify="space-between">
              <h2 className="text-xl mt-4">Event Registration</h2>
            </Stack>
            <DataGrid entities="EventRegistration[clubMember.id=$id]">
              <HasOneSelectCell
                field="event"
                header="Event name"
                options="Event.Name"
              />
              <HasOneSelectCell
                field="clubMember"
                header="Club member"
                options="ClubMember.name"
              />
              <BooleanCell
                key="transportNeeded"
                field="transportNeeded"
                header="Needs transport?"
              />
              <GenericCell shrunk canBeHidden={false}>
                <DeleteEntityButton immediatePersist />
              </GenericCell>
              <GenericCell shrunk canBeHidden={false}>
                <Link to="admin/eventRegistration/detail(id: $entity.id)">
                  Open detail
                </Link>
              </GenericCell>
            </DataGrid>
          </>
        </Stack>
      </Slots.ContentStack>
    </DetailScope>
  </>
);
