export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <footer className="h-10 text-center text-gray-900 dark:text-gray-100">
            <small>&copy; Copyright {getCurrentYear()}, King Ralph LLC</small>
        </footer>
    );
}
