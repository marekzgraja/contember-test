import * as React from 'react'
import { CreateScope, NavigateBackLink, PersistButton } from '@contember/admin'
import { Title } from '../../../components/Directives'
import { ClubMemberForm } from '../../../components/forms/ClubMemberForm'
import { Slots } from '../../../components/Slots'
import { useInviteUser } from '../../../hooks/useInviteUser'

export default () => <>
	<Title>
		Create club member
	</Title>
	<CreateScope
		entity="ClubMember"
		redirectOnSuccess="admin/clubMember/detail(id: $entity.id)"
		onBeforePersist={useInviteUser([{ role: 'clubMember', variables: [] }])}
	>
		<Slots.Actions>
			<PersistButton />
		</Slots.Actions>
		<Slots.Back>
			<NavigateBackLink to="admin/clubMember/list">
				Back
			</NavigateBackLink>
		</Slots.Back>
		<Slots.ContentStack>
			<ClubMemberForm />
		</Slots.ContentStack>
	</CreateScope>
</>
