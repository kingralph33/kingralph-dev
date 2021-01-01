export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <footer className="h-10 text-center dark:text-gray-200">
            <small>&copy; Copyright {getCurrentYear()}, King Ralph LLC</small>
        </footer>
    );
}
