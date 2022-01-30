export default function Footer() {
	const getCurrentYear = () => {
		return new Date().getFullYear();
	};

	return (
		<footer
			className='h-10 text-lg text-center text-gray-900 dark:text-gray-100'
			data-cy='footer-message'
		>
			<small>
				&copy; 2020 - {getCurrentYear()} Ralph King. All rights reserved.
			</small>
		</footer>
	);
}
