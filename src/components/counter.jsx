import React, { useEffect, useRef, useState } from 'react';

const progressData = [
    { label: "USA Study Programs", value: 95 },
    { label: "Canada Study Visa", value: 95 },
    { label: "Canada TRV Applications", value: 95 },
    { label: "Canada PR Applications", value: 100 },
];

const ProgressBar = () => {
    const [filled, setFilled] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setFilled(true);
                    observer.unobserve(entry.target); // Run once
                }
            },
            {
                threshold: 0.3, // Trigger when 30% is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <div ref={sectionRef} className="d-flex flex-column gap-3">
            {progressData.map((item, index) => (
                <div key={index} className="bg-light p-1 rounded shadow-sm">
                    <div className="d-flex justify-content-between mb-2">
                        <strong>{item.label}</strong>
                        <strong>{item.value}%</strong>
                    </div>

                    <div className="progress" style={{ height: '8px' }}>
                        <div
                            className="progress-bar bg-danger"
                            role="progressbar"
                            style={{
                                width: filled ? `${item.value}%` : '0%',
                                transition: 'width 1s ease-in-out',
                            }}
                            aria-valuenow={item.value}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProgressBar;
