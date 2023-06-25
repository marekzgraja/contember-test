import * as React from "react";
import {
  BooleanCell,
  DataGrid,
  DeleteEntityButton,
  DetailScope,
  DisplayTextField,
  Field,
  GenericCell,
  HasOneSelectCell,
  Heading,
  Link,
  LinkButton,
  NavigateBackLink,
  Stack,
} from "@contember/admin";
import { Box, Button } from "@chakra-ui/react";
import { Directive, Title } from "../../../components/Directives";
import { Slots } from "../../../components/Slots";

/**
 * Page Enhancement: Enhance the detail pages for "Club Member" and "Event". Make
 * them visually appealing and replace ID with names for better human readability. Use
 * TailwindCSS for this task and feel free to use any UI library with an open-source license.
 */

export default () => (
  <>
    <Title>Event detail</Title>
    <Directive name="content-max-width" content={null} />
    <DetailScope entity="Event(id=$id)">
      <Slots.Back>
        <NavigateBackLink to="admin/event/list">Back</NavigateBackLink>
      </Slots.Back>
      <Slots.Actions>
        <LinkButton to="admin/event/edit(id: $entity.id)">
          Edit event
        </LinkButton>
      </Slots.Actions>

      <Slots.ContentStack>
        <Stack direction="vertical" gap="xlarge">
          <Stack direction="vertical">
            <Field field="Name" />
            <LinkButton to="admin/event/edit(id: $entity.id)">
              Edit event
            </LinkButton>

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
                <Link to="admin/eventRegistration/detail(id: $entity.id)">
                  Open detail
                </Link>
              </GenericCell>
              <HasOneSelectCell
                field="event"
                header="event"
                options="Event.id"
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
              <GenericCell shrunk canBeHidden={false}>
                <DeleteEntityButton immediatePersist />
              </GenericCell>
            </DataGrid>
          </>
        </Stack>
      </Slots.ContentStack>
    </DetailScope>
  </>
);
