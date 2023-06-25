import {
  SchemaDefinition as def,
  AclDefinition as acl,
} from "@contember/schema-definition";

export const trainerRole = acl.createRole("trainer", {
  s3: {
    "**": {
      upload: true,
      read: true,
    },
  },
  stages: "*",
  tenant: {},
});

export const clubMemberRole = acl.createRole("clubMember", {
  s3: {
    "**": {
      upload: true,
      read: true,
    },
  },
  stages: "*",
  tenant: {},
});

export const personIdTrainerVariable = acl.createPredefinedVariable(
  "personIdTrainerVariable",
  "personID",
  [trainerRole]
);

export const personIdClubMemberVariable = acl.createPredefinedVariable(
  "personIdClubMemberVariable",
  "personID",
  [clubMemberRole]
);

export const eventType = def.createEnum("race", "training", "trainingCamp");

@acl.allow(trainerRole, { read: true, create: true })
@acl.allow(clubMemberRole, { read: true })
export class Event {
  type = def.enumColumn(eventType).notNull();
  registrationClosed = def.boolColumn().notNull().default(false);
  Name = def.stringColumn();
  Location = def.stringColumn();
  Description = def
    .oneHasOne(ContentSynthetic)
    .cascadeOnDelete()
    .removeOrphan();
  registrations = def.oneHasMany(EventRegistration, "event");
}

export class ContentSynthetic {
  parts = def.oneHasMany(ContentPartsSynthetic, "content").orderBy(["order"]);
}

export class ContentPartsSynthetic {
  order = def.intColumn().notNull();
  content = def
    .manyHasOne(ContentSynthetic, "parts")
    .notNull()
    .cascadeOnDelete();
  json = def.stringColumn().notNull();
}

@def.Unique("personId")
@def.Unique("email")
@acl.allow(trainerRole, { read: true })
@acl.allow(clubMemberRole, {
  when: { personId: personIdClubMemberVariable },
  read: true,
})
export class ClubMember {
  personId = def.uuidColumn().notNull();
  name = def.stringColumn().notNull();
  email = def.stringColumn().notNull();
  phoneNumber = def.stringColumn();
  transportPreference = def.boolColumn();
  registrations = def.oneHasMany(EventRegistration, "clubMember");
}

@acl.allow(trainerRole, { read: true })
@acl.allow(clubMemberRole, {
  when: { clubMember: { personId: personIdClubMemberVariable } },
  read: true,
  create: true,
})
export class EventRegistration {
  event = def.manyHasOne(Event, "registrations").notNull();
  clubMember = def.manyHasOne(ClubMember, "registrations").notNull();
  transportNeeded = def.boolColumn().notNull();
}
