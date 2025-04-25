function WeatherForm({ city, setCity, onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" onChange={e => setCity(e.target.value)} value={city} />
            <button type="submit">submit</button>
        </form>
    )
}
export default WeatherForm