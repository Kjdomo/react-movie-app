export const Modal = ({ children }) => {
    const styles = {
        "z-index": 1,
        "opacity": 0.5
    }
    return (
        <div style={styles}>
            {children}
        </div>

    );
}  