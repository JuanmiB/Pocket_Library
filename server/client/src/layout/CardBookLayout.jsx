export default function CardBookLayout({ children }) {
    const cardBook = {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "border": "solid 1px #fff",
        "width": "150px",
        "height": "200px",
        "margin": "5px"
    }
    return (
        <div style={cardBook}>
            {children}
        </div>
    )
}