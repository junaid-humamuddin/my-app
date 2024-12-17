import Book from "../booking/Book";

const Home = () => {
    return (
        <>
            <div className="content">
                <h1>Welcome to Taxi App</h1>
                <p>Discover the best taxi service in town,
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                </p>
            </div>
            <Book />
        </>
    )
}

export default Home;