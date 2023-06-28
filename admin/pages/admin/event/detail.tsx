import * as React from "react";
import {
  BooleanCell,
  DataGrid,
  DeleteEntityButton,
  DetailScope,
  DisplayTextField,
  EntityView,
  Field,
  FieldView,
  GenericCell,
  HasOne,
  HasOneSelectCell,
  Heading,
  Link,
  LinkButton,
  NavigateBackLink,
  Stack,
  useEntity,
} from "@contember/admin";
import {
  Directive,
  PageLayout,
  Title,
  useDirectives,
} from "../../../components/Directives";
import { Slots } from "../../../components/Slots";
import { useDocumentTitle } from "@contember/layout";
import { LayoutType } from "../../../components/Layouts";

/**
 * Page Enhancement: Enhance the detail pages for "Club Member" and "Event". Make
 * them visually appealing and replace ID with names for better human readability. Use
 * TailwindCSS for this task and feel free to use any UI library with an open-source license.
 */

const detailPage = () => {
  return (
    <>
      <Directive name="content-max-width" content={null} />
      <Title>Event detail</Title>
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
              <h1 className="text-xl md:flex items-center mb-3">
                <Field field="Name" />
              </h1>
              <div className="grid gap-2 md:gap-4 md:grid-cols-2">
                <DisplayTextField field="type" label="type" />
                <DisplayTextField field="Location" label="Location" />
              </div>
            </Stack>
            <>
              <Stack
                direction="horizontal"
                justify="space-between"
                align="center"
                className="mt-4"
              >
                <h2 className="text-xl">Event Registration</h2>
                <LinkButton to="admin/eventRegistration/create">
                  Register
                </LinkButton>
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
};

export default detailPage;
