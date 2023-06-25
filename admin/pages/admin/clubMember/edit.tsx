import * as React from 'react'
import { EditScope, NavigateBackLink, PersistButton } from '@contember/admin'
import { Title } from '../../../components/Directives'
import { ClubMemberForm } from '../../../components/forms/ClubMemberForm'
import { Slots } from '../../../components/Slots'

export default () => <>
	<Title>
		Edit club member
	</Title>
	<EditScope entity="ClubMember(id=$id)">
		<Slots.Back>
			<NavigateBackLink to="admin/clubMember/detail(id: $entity.id)">
				Back
			</NavigateBackLink>
		</Slots.Back>
		<Slots.Actions>
			<PersistButton />
		</Slots.Actions>
		<Slots.ContentStack>
			<ClubMemberForm />
		</Slots.ContentStack>
	</EditScope>
</>
