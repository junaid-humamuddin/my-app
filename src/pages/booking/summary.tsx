import { useEffect, useState } from "react";

const Summary = () => {
    const [summary, setSummary] = useState<any | undefined>(undefined);
    useEffect(() => {
        const summayData = JSON.parse(sessionStorage.getItem('checkout') ?? '{}')
        setSummary(summayData)
    }, [])
    return (
        <>
            {summary && (
                <div className="summary-page">
                    <div className="summary-page-inner">
                        <h1>Thanks for you Order. we'll reach you soon!</h1>
                        <div className="summary-conent">
                            <h5>Your car details:</h5>
                            <div className="summary-conent-inner">
                                <div className="item"><span>Company</span> <span>{summary.company}</span></div>
                                <div className="item"><span>Model</span> <span>{summary.model}</span></div>
                                <div className="item"><span>Fare per km</span> <span>{summary.farePerKm}</span></div>
                                <div className="item"><span>Seats</span> <span>{summary.seat} Seats</span></div>

                            </div>
                        </div>

                    </div>
                </div>)}
        </>
    );
};
export default Summary;