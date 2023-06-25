import * as React from 'react'
import { DetailScope, DisplayTextField, LinkButton, NavigateBackLink, Stack } from '@contember/admin'
import { Directive, Title } from '../../../components/Directives'
import { Slots } from '../../../components/Slots'

export default () => <>
	<Title>
		Event registration detail
	</Title>
	<Directive name="content-max-width" content={null} />
	<DetailScope entity="EventRegistration(id=$id)">
		<Slots.Back>
			<NavigateBackLink to="admin/eventRegistration/list">
				Back
			</NavigateBackLink>
		</Slots.Back>
		<Slots.Actions>
			<LinkButton to="admin/eventRegistration/edit(id: $entity.id)">
				Edit event registration
			</LinkButton>
		</Slots.Actions>
		<Slots.ContentStack>
			<Stack direction="vertical" gap="xlarge">
				<Stack direction="vertical">
					<DisplayTextField field="clubMember.name" label="ClubMember" />
				</Stack>
			</Stack>
		</Slots.ContentStack>
	</DetailScope>
</>
