import * as React from "react";
import { Component, HasRole, Menu } from "@contember/admin";

export const Navigation = Component(() => (
  <Menu>
    <Menu.Item>
      <HasRole role={(roles) => roles.has("admin") || roles.size === 0}>
        <Menu.Item title="Event" to="admin/event/list" />
        <Menu.Item title="ClubMember" to="admin/clubMember/list" />
      </HasRole>
      <HasRole role={(roles) => roles.has("trainer")}>
        <Menu.Item title="Event" to="trainer/event/list" />
        <Menu.Item title="ClubMember" to="trainer/clubMember/list" />
      </HasRole>
      <HasRole role={(roles) => roles.has("clubMember")}>
        <Menu.Item title="Event" to="clubMember/event/list" />
        <Menu.Item title="ClubMember" to="clubMember/clubMember/list" />
      </HasRole>
    </Menu.Item>
  </Menu>
));
