import * as React from 'react'
import { DetailScope, DisplayTextField, NavigateBackLink, Stack } from '@contember/admin'
import { Directive, Title } from '../../../components/Directives'
import { Slots } from '../../../components/Slots'

export default () => <>
	<Title>
		Event registration detail
	</Title>
	<Directive name="content-max-width" content={null} />
	<DetailScope entity="EventRegistration(id=$id)">
		<Slots.Back>
			<NavigateBackLink to="trainer/eventRegistration/list">
				Back
			</NavigateBackLink>
		</Slots.Back>
		<Slots.ContentStack>
			<Stack direction="vertical" gap="xlarge">
				<Stack direction="vertical">
					<DisplayTextField field="clubMember.name" label="ClubMember" />
				</Stack>
			</Stack>
		</Slots.ContentStack>
	</DetailScope>
</>
