import * as React from "react";
import {
  BooleanCell,
  DataGrid,
  DetailScope,
  DisplayTextField,
  GenericCell,
  HasOneSelectCell,
  Link,
  LinkButton,
  NavigateBackLink,
  Stack,
} from "@contember/admin";
import { Directive, Title } from "../../../components/Directives";
import { Slots } from "../../../components/Slots";

export default () => (
  <>
    <Title>Event detail</Title>
    <Directive name="content-max-width" content={null} />
    <DetailScope entity="Event(id=$id)">
      <Slots.Back>
        <NavigateBackLink to="trainer/event/list">Back</NavigateBackLink>
      </Slots.Back>
      <Slots.Actions>
        <LinkButton to="trainer/event/edit(id: $entity.id)">
          Edit event
        </LinkButton>
      </Slots.Actions>
      <Slots.ContentStack>
        <Stack direction="vertical" gap="xlarge">
          <Stack direction="vertical">
            <DisplayTextField field="type" label="type" />
            <DisplayTextField field="Name" label="Name" />
            <DisplayTextField field="Location" label="Location" />
          </Stack>
          <>
            <Stack direction="horizontal" justify="space-between">
              <h2 className="text-xl mt-4">EventRegistration</h2>
            </Stack>
            <DataGrid entities="EventRegistration[event.id=$id]">
              <GenericCell shrunk canBeHidden={false}>
                <Link to="trainer/eventRegistration/detail(id: $entity.id)">
                  Open detail
                </Link>
              </GenericCell>
              <HasOneSelectCell
                field="event"
                header="event"
                options="Event.Name"
              />
              <HasOneSelectCell
                field="clubMember"
                header="clubMember"
                options="ClubMember.name"
              />
              <BooleanCell
                key="transportNeeded"
                field="transportNeeded"
                header="transportNeeded"
              />
            </DataGrid>
          </>
        </Stack>
      </Slots.ContentStack>
    </DetailScope>
  </>
);
