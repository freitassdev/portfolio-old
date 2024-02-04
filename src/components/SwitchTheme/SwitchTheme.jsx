import './SwitchTheme.css';
const SwitchTheme = () => {
    function toggleDarkMode() {
        let checkbox = document.querySelector('.light-dark-toggle');
        checkbox.classList.toggle('light-dark-toggle-checked');
        document.body.classList.toggle('is-dark');
    }

    return (
        <div>
            <div className="light-dark-toggle" onClick={() => toggleDarkMode()}>
                <div className="toggle">
                    <svg id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264.5 283.46">
                        <defs>
                            <style>
                                {`.cls-1 {
                    fill: #fff;
                  }`}
                            </style>
                        </defs>
                        <path className="cls-1" d="M185.07,13.35C157.35,1.35,129.9-2.09,104.56,1.16c-8.43,1.08-10.69,12.25-3.35,16.53,43.33,25.25,66.48,81.33,39.36,138.18-8.96,18.79-24.46,33.68-43.4,42.34-30.13,13.77-59.92,13.5-84.94,3.7-7.98-3.13-15.32,5.6-10.89,12.94,24.81,41.12,69.91,68.62,121.44,68.62,98.54,0,173.59-100.56,128.13-204.65-12.81-29.34-36.45-52.75-65.83-65.47Z" />
                    </svg>
                </div>

                <div className="light-items">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                </div>

                <div className="dark-items">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>

                    <svg className="star1" id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282.41 270.75">
                        <defs>
                            <style>
                                {`.cls-1 {
                    fill: #fff;
                  }`}
                            </style>
                        </defs>
                        <path className="cls-1" d="M161.02,12.32l26.52,53.73c3.22,6.52,9.44,11.04,16.64,12.09l59.3,8.62c18.12,2.63,25.36,24.9,12.25,37.69l-42.91,41.82c-5.21,5.08-7.58,12.39-6.35,19.56l10.13,59.06c3.1,18.05-15.85,31.81-32.06,23.29l-53.04-27.88c-6.44-3.38-14.13-3.38-20.56,0l-53.04,27.88c-16.21,8.52-35.15-5.24-32.06-23.29l10.13-59.06c1.23-7.17-1.15-14.48-6.35-19.56L6.7,124.44c-13.11-12.78-5.88-35.05,12.25-37.69l59.3-8.62c7.2-1.05,13.42-5.57,16.64-12.09L121.39,12.32c8.1-16.42,31.52-16.42,39.63,0Z" />
                    </svg>

                    <svg className="star2" id="Ebene_1" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 282.41 270.75">
                        <defs>
                            <style>
                                {`.cls-1 {
                    fill: #fff;
                  }`}
                            </style>
                        </defs>
                        <path className="cls-1" d="M161.02,12.32l26.52,53.73c3.22,6.52,9.44,11.04,16.64,12.09l59.3,8.62c18.12,2.63,25.36,24.9,12.25,37.69l-42.91,41.82c-5.21,5.08-7.58,12.39-6.35,19.56l10.13,59.06c3.1,18.05-15.85,31.81-32.06,23.29l-53.04-27.88c-6.44-3.38-14.13-3.38-20.56,0l-53.04,27.88c-16.21,8.52-35.15-5.24-32.06-23.29l10.13-59.06c1.23-7.17-1.15-14.48-6.35-19.56L6.7,124.44c-13.11-12.78-5.88-35.05,12.25-37.69l59.3-8.62c7.2-1.05,13.42-5.57,16.64-12.09L121.39,12.32c8.1-16.42,31.52-16.42,39.63,0Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default SwitchTheme;