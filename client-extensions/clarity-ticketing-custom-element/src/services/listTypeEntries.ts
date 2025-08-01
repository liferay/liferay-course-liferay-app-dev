/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

import {request} from './request';

type ListTypeDefinitionEntry = {
	key: string;
	name: string;
};

async function fetchListTypeEntries(externalReferenceCode: string) {
	const response = await request(
		`/o/headless-admin-list-type/v1.0/list-type-definitions/by-external-reference-code/${externalReferenceCode}/list-type-entries`
	);

	const data = await response.json();

	return data?.items.map((item: {key: string; name: string}) => ({
		key: item.key,
		name: item.name,
	}));
}

export const PRIORITIES = 'PRIORITIES';
export const REGIONS = 'REGIONS';
export const RESOLUTIONS = 'RESOLUTIONS';
export const STATUSES = 'STATUSES';
export const TYPES = 'TYPES';

const listTypeDefinitionERCs = [
	PRIORITIES,
	RESOLUTIONS,
	REGIONS,
	STATUSES,
	TYPES,
] as const;

export type ListTypeDefinitions = {
	[PRIORITIES]: any;
	[REGIONS]: any;
	[RESOLUTIONS]: any;
	[STATUSES]: any;
	[TYPES]: any;
};

export async function fetchListTypeDefinitions() {
	const listTypeDefinitions = {} as ListTypeDefinitions;

	for (const listTypeDefinitionERC of listTypeDefinitionERCs) {
		const entries: ListTypeDefinitionEntry[] = await fetchListTypeEntries(
			listTypeDefinitionERC
		);

		const processedEntries: {
			entriesArray: ListTypeDefinitionEntry[];
			entriesMap: {[key: string]: any};
		} = {
			entriesArray: entries,
			entriesMap: {},
		};

		entries.forEach((entry) => {
			processedEntries.entriesMap[entry.name] = entry;
		});

		listTypeDefinitions[listTypeDefinitionERC] = processedEntries;
	}

	return listTypeDefinitions;
}
