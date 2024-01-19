export default function BookSection({ children }) {
    const bookSection = {
        
            "backgroundColor": "#485725",
            "color": "#fff",
            "padding": "20px",
            "margin": "20px",
            "borderRadius": "10px",
            "boxShadow": "0 0 10px #fff",
            "display": "grid",
            "gridTemplateColumns": "repeat(4, 1fr)",
            "gridGap": "10px",
            "width": "auto",
            "height": "auto"
        }
    return (
        <div style={bookSection}>
            {children}
        </div>
    )
}