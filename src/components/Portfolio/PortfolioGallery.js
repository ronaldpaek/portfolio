import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { itemData } from '@constants';
import { PortfolioCard } from '@components';

const PortfolioGallery = ({ handleRenderCard, handleFilter }) => {
	return (
		<ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 600: 2, 1280: 3 }}>
			<Masonry style={{ columnGap: '20px' }}>
				{itemData.filter(handleFilter).map((item, i) => (
					<PortfolioCard
						key={i}
						{...item}
						handleRenderCard={handleRenderCard}
					/>
				))}
			</Masonry>
		</ResponsiveMasonry>
	);
};

export default PortfolioGallery;
