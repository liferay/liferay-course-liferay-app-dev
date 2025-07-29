import React, { useEffect, useRef, useState } from 'react';
import ClayLayout from '@clayui/layout';
import StoreCard from './StoreCard';


const FeaturedStoresList = ({ isEditMode }) => {
	const editMode =
		typeof isEditMode === 'string'
			? isEditMode.toLowerCase() === 'true'
			: !!isEditMode;

	const slotRef = useRef(null);
	const [stores, setStores] = useState([]);

	useEffect(() => {
		if (editMode || !slotRef.current) return;

		const slot = slotRef.current;

		const extractStores = () => {
			const elements = slot.assignedElements({ flatten: true });
			const rows = elements[0]?.querySelectorAll('.row') || [];

			const newStores = Array.from(rows).map((row) => {
				const paragraphs = row.querySelectorAll(
					'.component-paragraph[data-lfr-editable-type="rich-text"]'
				);
				const image = row.querySelector(
					'img[data-lfr-editable-type="image"]'
				);

				return {
					id: paragraphs[0]?.textContent.trim() || '',
					name: paragraphs[1]?.textContent.trim() || '',
					description: paragraphs[2]?.textContent.trim() || '',
					imageUrl: image?.src || '',
					imageAlt: image?.alt || '',
				};
			});

			setStores(newStores);
		};

		const observer = new MutationObserver(extractStores);
		observer.observe(slot, { childList: true, subtree: true });

		extractStores();

		return () => observer.disconnect();
	}, [editMode]);

	return (
		<ClayLayout.ContainerFluid>
			<slot name="dropZoneSlot" ref={slotRef} />

			{!editMode && (
				<div className="d-flex flex-wrap justify-content-center gap-3">
					{stores.length === 0 ? (
						<div className="placeholder-text">
							Featured stores will appear here.
						</div>
					) : (
						stores.map((mech) => <StoreCard key={mech.id} {...mech} />)
					)}
				</div>
			)}
		</ClayLayout.ContainerFluid>
	);
};

export default FeaturedStoresList;