export default function AppLayout({ children }) {
    const styles = {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "height": "100%",
        }
    return (
        <div style={styles}>
            {children}
        </div>
    )
}